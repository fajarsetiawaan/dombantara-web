import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function buttonVariants({ variant = "primary", size = "md", className }: { variant?: "primary" | "secondary" | "ghost", size?: "sm" | "md" | "lg", className?: string }) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-accent-primary text-text-inverse hover:bg-accent-hover": variant === "primary",
      "bg-surface text-text-primary hover:bg-border-subtle": variant === "secondary",
      "bg-transparent text-text-primary hover:bg-surface": variant === "ghost",
      "h-9 px-4 text-sm": size === "sm",
      "h-11 px-8 text-base": size === "md",
      "h-14 px-10 text-lg": size === "lg",
    },
    className
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
