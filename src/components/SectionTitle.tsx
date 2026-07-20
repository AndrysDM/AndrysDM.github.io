import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight sm:text-4xl",
        className
      )}
    >
      {title}
    </h2>
  );
}
