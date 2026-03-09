export type Status = "NOT_STARTED" | "IN_PROGRESS" | "IN_REVIEW" | "COMPLETED" | "BLOCKED" | "ARCHIVED";

export interface Subtask {
  id: string;
  name: string;
  status: Status;
  completed_at?: string;
  artefacts?: string[];
  auto?: boolean; // true = fully automated by Claude Code
}

export interface Module {
  id: string;
  name: string;
  status: Status;
  progress: number;
  dependencies: string[];
  subtasks: Subtask[];
  artefacts?: string[];
  automation?: number; // 0-100% automated by Claude Code
}

export interface Phase {
  id: number;
  name: string;
  status: Status;
  modules: Module[];
}

export interface Project {
  name: string;
  description: string;
  target_market: string;
  business_model: string;
  language: string;
  created_at: string;
  status: Status;
}

export interface WorkflowData {
  project: Project;
  phases: Phase[];
}

export const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string }> = {
  NOT_STARTED: { label: "Not Started", color: "text-zinc-500", bg: "bg-zinc-500/10 border-zinc-500/20" },
  IN_PROGRESS: { label: "In Progress", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  IN_REVIEW: { label: "In Review", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  COMPLETED: { label: "Completed", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  BLOCKED: { label: "Blocked", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  ARCHIVED: { label: "Archived", color: "text-zinc-600", bg: "bg-zinc-600/10 border-zinc-600/20" },
};

export const PHASE_COLORS = [
  "from-violet-500/20 to-violet-500/5",
  "from-pink-500/20 to-pink-500/5",
  "from-amber-500/20 to-amber-500/5",
  "from-cyan-500/20 to-cyan-500/5",
  "from-blue-500/20 to-blue-500/5",
  "from-indigo-500/20 to-indigo-500/5",
  "from-green-500/20 to-green-500/5",
  "from-orange-500/20 to-orange-500/5",
  "from-red-500/20 to-red-500/5",
  "from-emerald-500/20 to-emerald-500/5",
] as const;

export const PHASE_ACCENT = [
  "text-violet-400",
  "text-pink-400",
  "text-amber-400",
  "text-cyan-400",
  "text-blue-400",
  "text-indigo-400",
  "text-green-400",
  "text-orange-400",
  "text-red-400",
  "text-emerald-400",
] as const;

// Automation levels from the PRD matrix
export const MODULE_AUTOMATION: Record<string, number> = {
  "0.1": 90, "0.2": 80, "0.3": 70, "0.4": 60,
  "1.1": 95, "1.2": 80, "1.3": 50, "1.4": 90,
  "2.1": 70, "2.2": 90, "2.3": 90, "2.4": 85, "2.5": 85, "2.6": 95,
  "3.1": 90, "3.2": 99, "3.3": 99, "3.4": 95, "3.5": 90,
  "4.1": 95, "4.2": 95, "4.3": 80, "4.4": 90, "4.5": 95, "4.6": 95, "4.7": 95, "4.8": 90, "4.9": 85, "4.10": 85, "4.11": 80,
  "5.1": 95, "5.2": 95, "5.3": 95, "5.4": 90, "5.5": 90, "5.6": 85,
  "6.1": 90, "6.2": 99, "6.3": 85, "6.4": 60, "6.5": 90,
  "7.1": 80, "7.2": 90, "7.3": 70, "7.4": 60, "7.5": 80, "7.6": 85, "7.7": 50,
  "8.1": 90, "8.2": 95, "8.3": 70,
  "9.1": 80, "9.2": 75, "9.3": 70, "9.4": 75,
};
