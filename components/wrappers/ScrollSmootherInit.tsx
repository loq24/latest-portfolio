"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export default function ScrollSmootherInit({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainWrapperRef = useRef(null);
  const contentRef = useRef(null);

  const toggleScrolling = (
    self: globalThis.ScrollTrigger | globalThis.ScrollSmoother
  ) => {
    if (self.progress > 0.0014) {
      document.body?.classList.add("scrolling");
    } else {
      document.body?.classList.remove("scrolling");
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        smooth: 1,
        wrapper: mainWrapperRef.current,
        content: contentRef.current,
        onUpdate: toggleScrolling,
      });
    }, mainWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <main id="smooth-wrapper" ref={mainWrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </main>
  );
}
