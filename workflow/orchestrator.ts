/**
 * UNICORNER ORCHESTRATOR
 *
 * Ce fichier definit la logique d'auto-execution du workflow.
 * Claude Code l'utilise pour derouler automatiquement tous les modules.
 *
 * Usage dans Claude Code:
 *   "Lance le workflow pour [mon idee]"
 *   → Claude Code lit ce fichier + CLAUDE.md
 *   → Execute chaque module dans l'ordre des dependances
 *   → Produit les artefacts
 *   → Met a jour modules.json + DASHBOARD.md
 *   → Push sur GitHub → Vercel rebuild le dashboard
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const ROOT = resolve(__dirname, "..");
const MODULES_PATH = resolve(ROOT, "workflow/modules.json");
const DASHBOARD_PATH = resolve(ROOT, "workflow/DASHBOARD.md");

interface Subtask {
  id: string;
  name: string;
  status: string;
  completed_at?: string;
}

interface Module {
  id: string;
  name: string;
  status: string;
  progress: number;
  dependencies: string[];
  subtasks: Subtask[];
}

interface Phase {
  id: number;
  name: string;
  status: string;
  modules: Module[];
}

interface WorkflowData {
  project: {
    name: string;
    description: string;
    target_market: string;
    business_model: string;
    language: string;
    created_at: string;
    status: string;
  };
  phases: Phase[];
}

// --- State management ---

export function loadState(): WorkflowData {
  return JSON.parse(readFileSync(MODULES_PATH, "utf-8"));
}

export function saveState(data: WorkflowData): void {
  writeFileSync(MODULES_PATH, JSON.stringify(data, null, 2));
  regenerateDashboard(data);
}

export function initProject(
  description: string,
  opts: { name?: string; market: string; model: string; language: string }
): WorkflowData {
  const data = loadState();
  data.project = {
    name: opts.name || "",
    description,
    target_market: opts.market,
    business_model: opts.model,
    language: opts.language,
    created_at: new Date().toISOString(),
    status: "IN_PROGRESS",
  };
  saveState(data);
  return data;
}

// --- Dependency resolution ---

export function getAllModules(data: WorkflowData): Module[] {
  return data.phases.flatMap((p) => p.modules);
}

export function canStart(moduleId: string, data: WorkflowData): boolean {
  const all = getAllModules(data);
  const mod = all.find((m) => m.id === moduleId);
  if (!mod) return false;
  if (mod.status === "COMPLETED") return false;
  return mod.dependencies.every((depId) => {
    const dep = all.find((m) => m.id === depId);
    return dep?.status === "COMPLETED";
  });
}

export function getNextModules(data: WorkflowData): Module[] {
  const all = getAllModules(data);
  return all.filter(
    (m) => m.status !== "COMPLETED" && canStart(m.id, data)
  );
}

export function getExecutionOrder(data: WorkflowData): string[] {
  const order: string[] = [];
  const all = getAllModules(data);
  const remaining = new Set(all.filter((m) => m.status !== "COMPLETED").map((m) => m.id));
  const completed = new Set(all.filter((m) => m.status === "COMPLETED").map((m) => m.id));

  while (remaining.size > 0) {
    const batch: string[] = [];
    for (const id of remaining) {
      const mod = all.find((m) => m.id === id)!;
      if (mod.dependencies.every((d) => completed.has(d))) {
        batch.push(id);
      }
    }
    if (batch.length === 0) break; // circular or blocked
    batch.sort();
    for (const id of batch) {
      order.push(id);
      remaining.delete(id);
      completed.add(id);
    }
  }
  return order;
}

// --- Status updates ---

export function markSubtaskDone(
  data: WorkflowData,
  moduleId: string,
  subtaskId: string
): void {
  for (const phase of data.phases) {
    for (const mod of phase.modules) {
      if (mod.id !== moduleId) continue;
      for (const st of mod.subtasks) {
        if (st.id === subtaskId) {
          st.status = "COMPLETED";
          st.completed_at = new Date().toISOString();
        }
      }
      // Update module progress
      const done = mod.subtasks.filter((s) => s.status === "COMPLETED").length;
      mod.progress = Math.round((done / mod.subtasks.length) * 100);
      // Update module status
      if (mod.subtasks.every((s) => s.status === "COMPLETED")) {
        mod.status = "COMPLETED";
      } else if (mod.subtasks.some((s) => s.status !== "NOT_STARTED")) {
        mod.status = "IN_PROGRESS";
      }
    }
  }
}

export function markModuleStarted(data: WorkflowData, moduleId: string): void {
  for (const phase of data.phases) {
    for (const mod of phase.modules) {
      if (mod.id === moduleId) {
        mod.status = "IN_PROGRESS";
        // Also mark phase as in progress
        phase.status = "IN_PROGRESS";
      }
    }
  }
}

// --- Dashboard generation ---

function statusIcon(status: string): string {
  switch (status) {
    case "COMPLETED": return "[x]";
    case "IN_PROGRESS": return "[~]";
    case "BLOCKED": return "[!]";
    default: return "[ ]";
  }
}

export function regenerateDashboard(data: WorkflowData): void {
  const all = getAllModules(data);
  const totalSub = all.flatMap((m) => m.subtasks);
  const doneSub = totalSub.filter((s) => s.status === "COMPLETED");
  const overallPct = totalSub.length > 0 ? Math.round((doneSub.length / totalSub.length) * 100) : 0;

  let md = `# UNICORNER — Dashboard de Suivi\n\n`;
  md += `**Projet :** ${data.project.name || "_(nom a definir — Phase 1)_"}\n`;
  md += `**Description :** ${data.project.description}\n`;
  md += `**Marche :** ${data.project.target_market} | **Modele :** ${data.project.business_model} | **Langue :** ${data.project.language}\n`;
  md += `**Demarre le :** ${data.project.created_at}\n`;
  md += `**Derniere mise a jour :** ${new Date().toISOString()}\n\n`;
  md += `---\n\n`;
  md += `## Progression globale: ${overallPct}% (${doneSub.length}/${totalSub.length} sous-taches)\n\n`;

  md += `| Phase | Nom | Modules | Progression | Statut |\n`;
  md += `|-------|-----|---------|-------------|--------|\n`;

  for (const phase of data.phases) {
    const pSub = phase.modules.flatMap((m) => m.subtasks);
    const pDone = pSub.filter((s) => s.status === "COMPLETED").length;
    const pPct = pSub.length > 0 ? Math.round((pDone / pSub.length) * 100) : 0;
    const doneModules = phase.modules.filter((m) => m.status === "COMPLETED").length;
    const pStatus = phase.modules.every((m) => m.status === "COMPLETED")
      ? "COMPLETED"
      : phase.modules.some((m) => m.status !== "NOT_STARTED")
      ? "IN_PROGRESS"
      : "NOT_STARTED";
    md += `| ${phase.id} | ${phase.name} | ${doneModules}/${phase.modules.length} | ${pPct}% | ${pStatus} |\n`;
  }

  md += `\n---\n\n## Detail par Phase\n\n`;

  for (const phase of data.phases) {
    md += `### Phase ${phase.id} — ${phase.name}\n`;
    for (const mod of phase.modules) {
      const doneCount = mod.subtasks.filter((s) => s.status === "COMPLETED").length;
      md += `- ${statusIcon(mod.status)} **${mod.id}** ${mod.name} (${doneCount}/${mod.subtasks.length})\n`;
      for (const st of mod.subtasks) {
        md += `  - ${statusIcon(st.status)} ${st.id} ${st.name}\n`;
      }
    }
    md += `\n`;
  }

  writeFileSync(DASHBOARD_PATH, md);
}
