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
        "mb-5 font-anek-bangla text-6xl font-semibold text-raisin-black",
        className
      )}
    >
      {children}
    </Tag>
  );
}
