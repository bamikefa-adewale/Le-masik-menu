import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-11 w-full rounded-full border border-input bg-card px-4 py-2 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-50",
);

export type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return <input ref={ref} className={cn(inputVariants(), className)} {...props} />;
});

export { inputVariants };
