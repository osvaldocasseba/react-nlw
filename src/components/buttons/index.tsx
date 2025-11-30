import type { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";
import { type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center  px-5 py-2 rounded-lg font-medium ",
  variants: {
    variant: {
      lime: "bg-lime-300 text-zinc-950 hover:bg-lime-400",
      gray: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
    },
    size: { default: "py-2", full: "h-11 w-full" },
  },
  defaultVariants: { variant: "lime" },
});
interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
export default function Button({
  children,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
