"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

export default function ScrollSmootherInit({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainWrapperRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      smooth: 1,
      wrapper: mainWrapperRef.current,
      content: contentRef.current,
    });
  }, []);

  return (
    <main id="smooth-wrapper" ref={mainWrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </main>
  );
}
