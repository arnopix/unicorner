"use client";

import { Status, STATUS_CONFIG } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function StatusBadge({ status }: { status: Status }) {
  const config = STATUS_CONFIG[status];
  return (
    <Badge variant="outline" className={`${config.bg} ${config.color} text-xs border`}>
      {config.label}
    </Badge>
  );
}
