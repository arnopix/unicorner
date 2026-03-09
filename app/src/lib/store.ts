import { WorkflowData, Status } from "./types";

const STORAGE_KEY = "unicorner_workflow";

export function loadWorkflow(): WorkflowData | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as WorkflowData;
  } catch {
    return null;
  }
}

export function saveWorkflow(data: WorkflowData): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function computeModuleProgress(subtasks: { status: Status }[]): number {
  if (subtasks.length === 0) return 0;
  const completed = subtasks.filter((s) => s.status === "COMPLETED").length;
  return Math.round((completed / subtasks.length) * 100);
}

export function computePhaseProgress(modules: { subtasks: { status: Status }[] }[]): number {
  const allSubtasks = modules.flatMap((m) => m.subtasks);
  return computeModuleProgress(allSubtasks);
}

export function getPhaseStatus(modules: { status: Status }[]): Status {
  if (modules.every((m) => m.status === "NOT_STARTED")) return "NOT_STARTED";
  if (modules.every((m) => m.status === "COMPLETED")) return "COMPLETED";
  if (modules.some((m) => m.status === "BLOCKED")) return "BLOCKED";
  return "IN_PROGRESS";
}

export function getModuleStatus(subtasks: { status: Status }[]): Status {
  if (subtasks.every((s) => s.status === "NOT_STARTED")) return "NOT_STARTED";
  if (subtasks.every((s) => s.status === "COMPLETED")) return "COMPLETED";
  if (subtasks.some((s) => s.status === "BLOCKED")) return "BLOCKED";
  if (subtasks.some((s) => s.status === "IN_REVIEW")) return "IN_REVIEW";
  return "IN_PROGRESS";
}

export function canStartModule(moduleId: string, data: WorkflowData): boolean {
  const allModules = data.phases.flatMap((p) => p.modules);
  const mod = allModules.find((m) => m.id === moduleId);
  if (!mod) return false;
  return mod.dependencies.every((depId) => {
    const dep = allModules.find((m) => m.id === depId);
    return dep?.status === "COMPLETED";
  });
}

export function getStats(data: WorkflowData) {
  const allModules = data.phases.flatMap((p) => p.modules);
  const allSubtasks = allModules.flatMap((m) => m.subtasks);
  return {
    totalModules: allModules.length,
    completedModules: allModules.filter((m) => m.status === "COMPLETED").length,
    inProgressModules: allModules.filter((m) => m.status === "IN_PROGRESS").length,
    blockedModules: allModules.filter((m) => m.status === "BLOCKED").length,
    totalSubtasks: allSubtasks.length,
    completedSubtasks: allSubtasks.filter((s) => s.status === "COMPLETED").length,
    overallProgress: computeModuleProgress(allSubtasks),
  };
}
