import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

type ButtonType = {
  children: React.ReactNode;
  className?: string;
  icon?: IconType;
};

export default function Button({
  children,
  className,
  icon: Icon,
}: ButtonType) {
  return (
    <button
      className={twMerge(
        "shadow-xs group flex items-center gap-2 rounded-md border border-gray-200 bg-gray-100 px-3 py-2 font-anek-bangla text-sm text-neutral-700 transition-all duration-300 hover:cursor-default hover:bg-gray-600 hover:text-white hover:shadow-md sm:text-base",
        className
      )}
    >
      {Icon && <Icon className="text-neutral-70 h-5 w-5" />}
      {children}
    </button>
  );
}
