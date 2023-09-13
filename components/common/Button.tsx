import { twMerge } from "tailwind-merge";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonType) {
  return (
    <button
      className={twMerge(
        "rounded-md bg-gray-200 px-3 py-2 font-anek-bangla text-sm text-neutral-600 duration-500 hover:cursor-default hover:bg-gray-600 hover:text-white hover:drop-shadow-md sm:text-base",
        className
      )}
    >
      {children}
    </button>
  );
}
