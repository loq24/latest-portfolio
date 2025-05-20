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
        "group flex items-center gap-2 rounded-md border border-gray-100 bg-white px-3 py-2 font-anek-bangla text-sm text-neutral-600 transition-all duration-300 hover:cursor-default hover:border-gray-200 hover:shadow-sm sm:text-base",
        className
      )}
    >
      {Icon && (
        <Icon className="h-4 w-4 text-gray-500 transition-transform group-hover:scale-105" />
      )}
      {children}
    </button>
  );
}
