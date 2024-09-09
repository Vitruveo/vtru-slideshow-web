import { twMerge } from "tailwind-merge";

interface LayoutContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const LayoutContainer = ({
  children,
  className,
}: LayoutContainerProps) => {
  return (
    <div
      className={twMerge(
        "flex overflow-hidden z-10 w-full h-full relative p-8 gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};
