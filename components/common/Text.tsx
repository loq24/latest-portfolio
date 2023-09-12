import { twMerge } from "tailwind-merge";

type TextType = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextType) {
  return (
    <p
      className={twMerge(
        "text-justify font-work-sans text-xl text-neutral-600",
        className
      )}
    >
      {children}
    </p>
  );
}
