import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "bg-mirage-200/60 hover:bg-mirage-200 focus-visible:bg-mirage-50 dark:bg-mirage-700 dark:hover:bg-mirage-600 dark:focus-visible:bg-mirage-600 flex items-center justify-center rounded-lg px-4 py-1.5 text-sm outline-hidden duration-100 dark:shadow",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
