"use client";

import { Module, Status, MODULE_AUTOMATION } from "@/lib/types";
import { StatusBadge } from "./status-badge";
import { Progress } from "@/components/ui/progress";
import { computeModuleProgress, getModuleStatus } from "@/lib/store";
import { ChevronDown, ChevronRight, Lock, Bot, User } from "lucide-react";
import { useState } from "react";

interface ModuleRowProps {
  module: Module;
  onSubtaskToggle: (moduleId: string, subtaskId: string, newStatus: Status) => void;
  accent: string;
}

export function ModuleRow({ module: mod, onSubtaskToggle, accent }: ModuleRowProps) {
  const [expanded, setExpanded] = useState(false);
  const progress = computeModuleProgress(mod.subtasks);
  const status = getModuleStatus(mod.subtasks);
  const completedCount = mod.subtasks.filter((s) => s.status === "COMPLETED").length;
  const automation = MODULE_AUTOMATION[mod.id] ?? 0;

  return (
    <div className="bg-zinc-900/30 rounded-lg border border-zinc-800/50">
      <div
        className="flex items-center justify-between p-3 cursor-pointer select-none hover:bg-zinc-800/30 rounded-lg transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2 min-w-0">
          {expanded ? (
            <ChevronDown className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
          )}
          <span className={`text-xs font-mono ${accent} shrink-0`}>{mod.id}</span>
          <span className="text-sm truncate">{mod.name}</span>
          {mod.dependencies.length > 0 && (
            <span className="text-xs text-zinc-600 flex items-center gap-1 shrink-0">
              <Lock className="h-3 w-3" />
              {mod.dependencies.join(", ")}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {/* Automation indicator */}
          <span
            className={`text-xs flex items-center gap-1 ${
              automation >= 90
                ? "text-emerald-500"
                : automation >= 70
                ? "text-blue-400"
                : "text-amber-400"
            }`}
            title={`${automation}% automated by Claude Code`}
          >
            {automation >= 80 ? (
              <Bot className="h-3 w-3" />
            ) : (
              <User className="h-3 w-3" />
            )}
            {automation}%
          </span>
          <span className="text-xs text-zinc-500">
            {completedCount}/{mod.subtasks.length}
          </span>
          <StatusBadge status={status} />
          <div className="w-16">
            <Progress value={progress} className="h-1 bg-zinc-800" />
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-3 pb-3 space-y-1">
          {mod.subtasks.map((subtask) => (
            <label
              key={subtask.id}
              className="flex items-center gap-3 px-3 py-1.5 rounded hover:bg-zinc-800/30 cursor-pointer transition-colors group"
            >
              <input
                type="checkbox"
                checked={subtask.status === "COMPLETED"}
                onChange={(e) => {
                  e.stopPropagation();
                  onSubtaskToggle(
                    mod.id,
                    subtask.id,
                    subtask.status === "COMPLETED" ? "NOT_STARTED" : "COMPLETED"
                  );
                }}
                className="rounded border-zinc-600 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/20 h-3.5 w-3.5"
              />
              <span className="text-xs font-mono text-zinc-600">{subtask.id}</span>
              <span
                className={`text-sm flex-1 ${
                  subtask.status === "COMPLETED"
                    ? "text-zinc-500 line-through"
                    : "text-zinc-300"
                }`}
              >
                {subtask.name}
              </span>
              {subtask.auto !== false && automation >= 80 && (
                <span title="Auto by Claude Code"><Bot className="h-3 w-3 text-emerald-600 opacity-50" /></span>
              )}
              <StatusBadge status={subtask.status} />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
