import { twMerge } from "tailwind-merge";

type HeadingType = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export default function Heading({
  children,
  className,
  as = "h2",
}: HeadingType) {
  const Tag = as;

  return (
    <Tag
      className={twMerge(
        "font-anek-bangla text-4xl font-semibold text-raisin-black sm:text-5xl lg:mb-5 lg:text-6xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
