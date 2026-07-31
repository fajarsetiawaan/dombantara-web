import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "info";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
          {
            "border-transparent bg-accent-primary text-base": variant === "default",
            "border-transparent bg-status-success/20 text-status-success": variant === "success",
            "border-transparent bg-status-warning/20 text-status-warning": variant === "warning",
            "border-transparent bg-status-error/20 text-status-error": variant === "error",
            "border-transparent bg-status-info/20 text-status-info": variant === "info",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
