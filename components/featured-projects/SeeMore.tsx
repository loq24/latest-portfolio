"use client";

import { useEffect, useRef } from "react";
import Text from "../common/Text";
import { gsap } from "gsap";
import Link from "next/link";

export default function SeeMore() {
  const wrapperRef = useRef(null);
  const t1 = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      t1.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
          },
        })
        .to({}, {})
        .to(wrapperRef.current, {
          opacity: 1,
        });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="mx-auto flex max-w-xl flex-col items-center justify-center gap-3 px-5 opacity-0 sm:px-10"
      ref={wrapperRef}
    >
      <Text className="text-center text-sm text-neutral-500">
        Take a look at some of my earlier projects that I have had the
        opportunity to work on.
      </Text>
      <Link
        href="/projects"
        className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium  leading-6 text-gray-600 shadow-sm hover:bg-gray-50 focus:shadow-none focus:outline-none sm:text-base"
      >
        See more
      </Link>
    </div>
  );
}
