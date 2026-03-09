"use client";

import { WorkflowData, Status } from "@/lib/types";
import { StatsCards } from "./stats-cards";
import { PhaseCard } from "./phase-card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { getStats, computeModuleProgress, getModuleStatus } from "@/lib/store";
import { Rocket, RotateCcw, Download, Pencil } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface DashboardProps {
  data: WorkflowData;
  onUpdate: (data: WorkflowData) => void;
  onReset: () => void;
}

export function Dashboard({ data, onUpdate, onReset }: DashboardProps) {
  const stats = getStats(data);
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(data.project.name);

  const displayName = data.project.name || "Projet sans nom";
  const needsNaming = !data.project.name;

  function handleSubtaskToggle(moduleId: string, subtaskId: string, newStatus: Status) {
    const updated: WorkflowData = {
      ...data,
      phases: data.phases.map((phase) => ({
        ...phase,
        modules: phase.modules.map((mod) => {
          if (mod.id !== moduleId) return mod;
          const updatedSubtasks = mod.subtasks.map((s) =>
            s.id === subtaskId
              ? {
                  ...s,
                  status: newStatus,
                  completed_at: newStatus === "COMPLETED" ? new Date().toISOString() : undefined,
                }
              : s
          );
          return {
            ...mod,
            subtasks: updatedSubtasks,
            progress: computeModuleProgress(updatedSubtasks),
            status: getModuleStatus(updatedSubtasks),
          };
        }),
      })),
    };
    onUpdate(updated);
  }

  function handleNameSave() {
    onUpdate({
      ...data,
      project: { ...data.project, name: tempName.trim() },
    });
    setEditingName(false);
  }

  function handleExport() {
    const slug = (data.project.name || "project").toLowerCase().replace(/\s+/g, "-");
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `unicorner-${slug}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Unicorner
              </span>
            </h1>
            <span className="text-zinc-600">|</span>
            {editingName ? (
              <form onSubmit={(e) => { e.preventDefault(); handleNameSave(); }} className="flex items-center gap-2">
                <Input
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="h-7 text-sm bg-zinc-800 border-zinc-700 w-48"
                  autoFocus
                  onBlur={handleNameSave}
                />
              </form>
            ) : (
              <button
                onClick={() => { setTempName(data.project.name); setEditingName(true); }}
                className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <span className={needsNaming ? "italic text-zinc-600" : ""}>
                  {displayName}
                </span>
                <Pencil className="h-3 w-3 opacity-50" />
              </button>
            )}
            {needsNaming && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Naming en Phase 1
              </span>
            )}
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
              {data.project.business_model} / {data.project.target_market}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleExport} className="text-zinc-400">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
            <Button variant="ghost" size="sm" onClick={onReset} className="text-zinc-400">
              <RotateCcw className="h-4 w-4 mr-1" />
              Nouveau
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Project description */}
        <div className="rounded-lg bg-zinc-900/50 border border-zinc-800 p-4">
          <p className="text-sm text-zinc-400 leading-relaxed">{data.project.description}</p>
        </div>

        {/* Overall progress bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-violet-400" />
              <span className="text-zinc-400">Progression globale</span>
            </div>
            <span className="font-mono text-zinc-300">{stats.overallProgress}%</span>
          </div>
          <Progress value={stats.overallProgress} className="h-2 bg-zinc-800" />
        </div>

        {/* Stats */}
        <StatsCards data={data} />

        {/* Phases */}
        <div className="space-y-4">
          {data.phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              onSubtaskToggle={handleSubtaskToggle}
            />
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">
        Unicorner — From idea to unicorn — Powered by Claude Code
      </footer>
    </div>
  );
}
