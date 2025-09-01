"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowUpDown, Plus, ExternalLink } from "lucide-react";

export type QuickAction = {
  id: string;
  label: string; // visible text e.g. "Swap Tokens"
  ariaLabel?: string; // e.g. "Swap Tokens action"
  icon: "swap" | "plus" | "external";
  href: string; // can be internal or external
  external?: boolean; // if true, open in new tab + rel
};

export interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  const router = useRouter();

  const handleActionClick = (action: QuickAction) => {
    if (action.external) {
      window.open(action.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(action.href);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: QuickAction) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActionClick(action);
    }
  };

  const getIcon = (icon: QuickAction["icon"]) => {
    switch (icon) {
      case "swap":
        return ArrowUpDown;
      case "plus":
        return Plus;
      case "external":
        return ExternalLink;
      default:
        return null;
    }
  };

  return (
    <Card className="py-6 px-16 w-fit bg-card border-none shadow-md">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Quick Actions
      </h2>
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = getIcon(action.icon);
          return (
            <button
              key={action.id}
              onClick={() => handleActionClick(action)}
              onKeyDown={(e) => handleKeyDown(e, action)}
              aria-label={action.ariaLabel || `${action.label} action`}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left group border"
            >
              {Icon && (
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />
              )}
              <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground mr-16">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
