#!/bin/bash
# Sync workflow state from the root project into the Next.js app.
# Called automatically before build or manually.
cp "$(dirname "$0")/../../workflow/modules.json" "$(dirname "$0")/../src/lib/workflow-state.json" 2>/dev/null || true
echo "Workflow state synced."
