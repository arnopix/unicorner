"use client";

import { Card, CardContent } from "@/components/ui/card";
import { WorkflowData } from "@/lib/types";
import { getStats } from "@/lib/store";
import { CheckCircle2, Clock, AlertTriangle, ListChecks } from "lucide-react";

export function StatsCards({ data }: { data: WorkflowData }) {
  const stats = getStats(data);

  const cards = [
    {
      label: "Overall Progress",
      value: `${stats.overallProgress}%`,
      sub: `${stats.completedSubtasks}/${stats.totalSubtasks} subtasks`,
      icon: ListChecks,
      color: "text-blue-400",
    },
    {
      label: "Completed",
      value: stats.completedModules,
      sub: `of ${stats.totalModules} modules`,
      icon: CheckCircle2,
      color: "text-emerald-400",
    },
    {
      label: "In Progress",
      value: stats.inProgressModules,
      sub: "active modules",
      icon: Clock,
      color: "text-amber-400",
    },
    {
      label: "Blocked",
      value: stats.blockedModules,
      sub: "need attention",
      icon: AlertTriangle,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.label} className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <card.icon className={`h-5 w-5 ${card.color}`} />
              <div>
                <p className="text-2xl font-bold">{card.value}</p>
                <p className="text-xs text-zinc-500">{card.sub}</p>
              </div>
            </div>
            <p className="text-xs text-zinc-400 mt-2">{card.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
