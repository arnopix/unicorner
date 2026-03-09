"use client";

import { useState, useEffect } from "react";
import { WorkflowData } from "@/lib/types";
import { loadWorkflow, saveWorkflow } from "@/lib/store";
import { DEFAULT_WORKFLOW } from "@/lib/default-data";
import { getCommittedState, hasActiveProject } from "@/lib/sync";
import { ProjectSetup } from "@/components/project-setup";
import { Dashboard } from "@/components/dashboard";

export default function Home() {
  const [data, setData] = useState<WorkflowData | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Priority: localStorage > committed state > empty
    const saved = loadWorkflow();
    if (saved && saved.project.description) {
      setData(saved);
    } else {
      // Check if there's a committed state from Claude Code execution
      const committed = getCommittedState();
      if (hasActiveProject(committed)) {
        setData(committed);
        saveWorkflow(committed); // cache in localStorage
      }
    }
    setReady(true);
  }, []);

  function handleSetup(newData: WorkflowData) {
    setData(newData);
    saveWorkflow(newData);
  }

  function handleUpdate(updated: WorkflowData) {
    setData(updated);
    saveWorkflow(updated);
  }

  function handleReset() {
    setData(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("unicorner_workflow");
    }
  }

  if (!ready) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="animate-pulse text-zinc-600">Loading...</div>
      </div>
    );
  }

  if (!data || !data.project.description) {
    return <ProjectSetup onSubmit={handleSetup} defaultData={DEFAULT_WORKFLOW} />;
  }

  return <Dashboard data={data} onUpdate={handleUpdate} onReset={handleReset} />;
}
