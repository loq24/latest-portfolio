"use client";

import classNames from "classnames";
import { useState } from "react";
import Links from "./Links";

export default function Hamburger() {
  const [active, setActive] = useState(false);

  const toggleHamburger = (status: boolean) => {
    setActive(status);
  };

  return (
    <div className="absolute right-0 top-0 z-10 shrink-0 opacity-100 duration-75 sm:opacity-0 group-[.scrolling]:sm:z-50 group-[.scrolling]:sm:opacity-100 group-[.scrolling]:sm:delay-300 group-[.scrolling]:sm:duration-300">
      <button
        className="relative"
        tabIndex={0}
        onClick={() => toggleHamburger(!active)}
        onBlur={() => toggleHamburger(false)}
      >
        <div
          className={classNames(
            "relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full bg-slate-200 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8",
            { "ring-4": active }
          )}
        >
          <div
            className={classNames(
              "flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300",
              { "-rotate-[45deg]": active }
            )}
          >
            <div
              className={classNames(
                "h-[2px] w-1/2 origin-right transform rounded bg-raisin-black transition-all delay-75 duration-300",
                { "h-[1px] -translate-y-[1px] -rotate-90": active }
              )}
            ></div>
            <div className="h-[1px] rounded bg-raisin-black"></div>
            <div
              className={classNames(
                "h-[2px] w-1/2 origin-left transform self-end rounded bg-raisin-black transition-all delay-75 duration-300 ",
                { "h-[1px] translate-y-[1px] -rotate-90": active }
              )}
            ></div>
          </div>
        </div>

        <div
          className={classNames(
            "pointer-events-none absolute right-5 top-14 min-w-[120px] rounded bg-slate-200 p-3 opacity-0 transition-opacity duration-300",
            { "pointer-events-auto opacity-100": active }
          )}
        >
          <ul className="flex flex-col items-center font-inter tracking-wide text-raisin-black">
            <Links
              liClassName="py-2"
              anchorClassName="capitalize hover:cursor-pointer"
            />
          </ul>
        </div>
      </button>
    </div>
  );
}
