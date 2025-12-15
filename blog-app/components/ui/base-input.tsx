'use client';

import * as React from "react";

import {cn} from "@/lib/utils";

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({className, type = "text", ...props}, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
BaseInput.displayName = "BaseInput";
