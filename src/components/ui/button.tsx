import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export function Button({className,...props}:ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition hover:-translate-y-0.5 disabled:opacity-50",className)} {...props}/>;
}
