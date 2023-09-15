import Link from "next/link";
import Hamburger from "./Hamburger";
import Links from "./Links";

export default function Nav() {
  return (
    <div className="fixed left-0 right-0 z-50 py-8 drop-shadow-sm sm:top-8">
      <div className="centered-block relative flex flex-wrap items-center justify-between">
        <Link
          className="shrink-0 duration-300 group-[.scrolling]:opacity-0"
          href="/"
        >
          <div className="no-rounded-cursor h-[50px] w-[50px] rounded-full bg-[url('/images/lougiequisel.png')] bg-cover ring-4 ring-slate-200"></div>
        </Link>
        <ul className="relative z-20 hidden flex-wrap justify-between py-3 font-inter tracking-wide text-raisin-black duration-300 group-[.scrolling]:opacity-0 sm:flex">
          <Links
            liClassName="px-4"
            anchorClassName="capitalize hover:cursor-pointer"
          />
        </ul>
        <Hamburger />
      </div>
    </div>
  );
}
