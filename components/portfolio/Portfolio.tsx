"use client";

import { useEffect, useRef } from "react";
import Item from "./Item";
import Item2 from "./Item2";

export default function Portfolio() {
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = sliderWrapperRef.current,
      trackDataAttribute = "data-mouse-down-at",
      trackPrevPercentageAttribute = "data-prev-percentage",
      trackPercentageAttribute = "data-percentage";

    const onMouseMove = (e: MouseEvent) => {
      if (!track) return;

      const mouseDownAtValue = track.getAttribute(trackDataAttribute);
      const prevPercentageValue = track.getAttribute(
        trackPrevPercentageAttribute
      );
      if (mouseDownAtValue === "0") return;

      const mouseDelta = mouseDownAtValue
          ? parseFloat(mouseDownAtValue) - e.clientX
          : 0,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          prevPercentageValue || prevPercentageValue === "0"
            ? parseFloat(prevPercentageValue) + percentage
            : 0,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -55
        );

      track.setAttribute(trackPercentageAttribute, `${nextPercentage}`);

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 2500, fill: "forwards" }
      );

      for (const image of Array.from(
        document.getElementsByClassName("image")
      )) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 2500, fill: "forwards" }
        );
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      if (!track) return;

      track.setAttribute(trackDataAttribute, `${e.clientX}`);
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!track) return;

      const percentageValue = track.getAttribute(trackPercentageAttribute);

      track.setAttribute(trackDataAttribute, `0`);
      track.setAttribute(trackPrevPercentageAttribute, `${percentageValue}`);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.addEventListener("mousedown", onMouseMove);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={sliderWrapperRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-percentage="0"
        className="absolute left-[4%] top-1/2 flex  flex-shrink-0 -translate-y-1/2 flex-row gap-3 py-5 will-change-transform"
      >
        <Item />
        <Item2 />
        <Item />
        <Item2 />
        <Item />
      </div>
    </div>
  );
}
