import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, eyebrow, title, description, align = "left", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col space-y-4",
          {
            "items-center text-center": align === "center",
            "items-start text-left": align === "left",
          },
          className
        )}
        {...props}
      >
        {eyebrow && (
          <span className="text-accent-primary font-semibold tracking-wider uppercase text-sm">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary">
          {title}
        </h2>
        {description && (
          <p className="text-text-muted max-w-[600px] text-lg">
            {description}
          </p>
        )}
      </div>
    );
  }
);
SectionHeading.displayName = "SectionHeading";
