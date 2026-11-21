import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium " +
  "transition-[background-color,color,transform] duration-300 ease-brand active:scale-[0.97] " +
  "focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/85 active:bg-ink/75 focus-visible:outline-ink",
  outline: "text-ink ring-1 ring-ink/20 ring-inset hover:bg-ink/6 active:bg-ink/10 focus-visible:outline-ink",
  ghost: "text-ink hover:bg-ink/6 active:bg-ink/10 focus-visible:outline-ink",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-14 px-7 text-body",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

/** Pill link-button. All buttons on the site are fully rounded (CLAUDE.md §4). */
export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: Props) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
