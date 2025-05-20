"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Mouse from "../svgs/Mouse";

export default function Hero() {
  const wrapperRef = useRef(null);
  const t1 = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap.timeline().to('[data-animation="text"]', {
        opacity: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: 0,
        duration: 1,
        stagger: 0.1,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-full w-full ">
      <div
        className="centered-block relative z-10 flex h-screen flex-col flex-wrap items-center justify-center gap-y-4 lg:gap-8"
        ref={wrapperRef}
      >
        <h1
          className="bottom-clipped relative inline-block translate-y-7 overflow-hidden text-center font-anek-bangla text-5xl font-normal text-raisin-black opacity-0 sm:text-7xl lg:text-8xl"
          data-animation="text"
        >
          <span className="relative z-10">Hi, I&apos;m Lougie Quisel</span>
        </h1>
        <h2
          className="bottom-clipped inline-block translate-y-7 overflow-hidden text-center font-work-sans text-base font-normal text-neutral-600 opacity-0 sm:text-xl lg:max-w-[80%] lg:text-2xl"
          data-animation="text"
        >
          A Full Stack Engineer crafting high-performance web applications with
          modern technologies and exceptional user experiences.
        </h2>

        <div
          data-animation="mouse"
          className="transition-opacity duration-300 group-[.scrolling]:opacity-0"
        >
          <Mouse />
        </div>
      </div>
    </div>
  );
}
