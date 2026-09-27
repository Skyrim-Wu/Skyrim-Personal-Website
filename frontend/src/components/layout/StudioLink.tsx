import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function StudioLink({
  children = "Visit Skyrim Studio",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://studio.skyrimwu.me/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-medium text-indigo-600 dark:text-indigo-400 underline-offset-4 hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}>
      {children}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
