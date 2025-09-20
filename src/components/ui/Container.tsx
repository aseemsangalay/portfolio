import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("max-w-[1100px] mx-auto px-6 md:px-8", className)}>
      {children}
    </Component>
  );
}

export function GridContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-12 gap-6", className)}>{children}</div>
  );
}
