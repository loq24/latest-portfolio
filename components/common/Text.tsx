import { twMerge } from "tailwind-merge";

type TextType = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextType) {
  return (
    <p
      className={twMerge(
        "text-justify font-work-sans text-base text-neutral-600 sm:text-lg lg:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
}
