import { buttonVariants, ButtonProps } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface WhatsAppCTAProps extends Omit<ButtonProps, "asChild"> {
  message?: string;
  phoneNumber?: string; // Default to ops phone number
  iconOnly?: boolean;
}

export function WhatsAppCTA({
  message = "Halo Dombantara, saya tertarik untuk...",
  phoneNumber = "6281234567890", // dummy default phone
  iconOnly = false,
  className,
  children,
  variant = "primary",
  size = "md",
  ...props
}: WhatsAppCTAProps) {
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (iconOnly) {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-accent-primary text-base hover:bg-accent-hover transition-colors shadow-lg p-3",
          className
        )}
        aria-label="Hubungi via WhatsApp"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <MessageCircle size={28} />
      </a>
    );
  }

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), "gap-2", className)}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      <MessageCircle size={20} />
      {children || "Hubungi via WhatsApp"}
    </a>
  );
}
