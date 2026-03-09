/**
 * Sync module: bridges file-based workflow state with the web dashboard.
 *
 * Flow:
 * 1. Claude Code executes modules → updates workflow/modules.json
 * 2. Pre-build script copies modules.json → app/src/lib/workflow-state.json
 * 3. Next.js imports workflow-state.json at build time
 * 4. Git push → Vercel rebuild → dashboard shows latest state
 *
 * For local dev: localStorage overrides are supported.
 */

import workflowState from "./workflow-state.json";
import { WorkflowData } from "./types";

export function getCommittedState(): WorkflowData {
  return workflowState as unknown as WorkflowData;
}

export function hasActiveProject(data: WorkflowData): boolean {
  return !!(data.project.description && data.project.status !== "NOT_STARTED");
}
