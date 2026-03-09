"use client";

import { Phase, PHASE_COLORS, PHASE_ACCENT, Status } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "./status-badge";
import { ModuleRow } from "./module-row";
import { computePhaseProgress, getPhaseStatus } from "@/lib/store";
import {
  Search, Palette, Scale, Server, Code,
  LayoutDashboard, FileText, Megaphone, Rocket, TrendingUp,
  ChevronDown, ChevronRight,
} from "lucide-react";
import { useState } from "react";

const ICONS = [Search, Palette, Scale, Server, Code, LayoutDashboard, FileText, Megaphone, Rocket, TrendingUp];

interface PhaseCardProps {
  phase: Phase;
  onSubtaskToggle: (moduleId: string, subtaskId: string, newStatus: Status) => void;
}

export function PhaseCard({ phase, onSubtaskToggle }: PhaseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = ICONS[phase.id] || Search;
  const progress = computePhaseProgress(phase.modules);
  const status = getPhaseStatus(phase.modules);
  const colorGradient = PHASE_COLORS[phase.id];
  const accent = PHASE_ACCENT[phase.id];
  const completedModules = phase.modules.filter((m) => getPhaseStatus([m]) === "COMPLETED").length;

  return (
    <Card className={`bg-gradient-to-br ${colorGradient} border-zinc-800 overflow-hidden`}>
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {expanded ? (
              <ChevronDown className={`h-4 w-4 ${accent}`} />
            ) : (
              <ChevronRight className={`h-4 w-4 ${accent}`} />
            )}
            <div className={`p-2 rounded-lg bg-zinc-900/50`}>
              <Icon className={`h-5 w-5 ${accent}`} />
            </div>
            <div>
              <CardTitle className="text-sm font-semibold">
                Phase {phase.id} — {phase.name}
              </CardTitle>
              <p className="text-xs text-zinc-500 mt-0.5">
                {completedModules}/{phase.modules.length} modules
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <StatusBadge status={status} />
            <span className="text-xs text-zinc-400 font-mono w-10 text-right">{progress}%</span>
          </div>
        </div>
        <Progress value={progress} className="h-1 mt-3 bg-zinc-800" />
      </CardHeader>

      {expanded && (
        <CardContent className="pt-0 space-y-1">
          {phase.modules.map((mod) => (
            <ModuleRow
              key={mod.id}
              module={mod}
              onSubtaskToggle={onSubtaskToggle}
              accent={accent}
            />
          ))}
        </CardContent>
      )}
    </Card>
  );
}
