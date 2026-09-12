import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "text";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { variant?: Variant };
type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: Variant;
};

function buttonClassName(variant: Variant, className: string) {
  return `button button--${variant} ${className}`.trim();
}

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button {...props} type={type} className={buttonClassName(variant, className)} />;
}

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <a {...props} className={buttonClassName(variant, className)} />;
}
