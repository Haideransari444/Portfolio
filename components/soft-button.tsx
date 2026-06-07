import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type SoftButtonProps = {
  href?: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "ghost" | "default";
  download?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function SoftButton({
  href,
  children,
  icon: Icon,
  variant = "default",
  download,
  onClick,
  className,
  disabled
}: SoftButtonProps) {
  const classes = clsx(
    "soft-button px-5 py-3 text-sm",
    variant === "primary" && "soft-button-primary",
    variant === "ghost" && "soft-button-ghost",
    disabled && "cursor-not-allowed opacity-50",
    className
  );

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} download={download}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} type="button">
      {content}
    </button>
  );
}
