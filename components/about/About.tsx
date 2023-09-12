"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";

export default function About() {
  const wrapperRef = useRef(null);
  const t1 = useRef<any>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.to(wrapperRef.current, {
      //   scrollTrigger: {
      //     trigger: wrapperRef.current,
      //     start: "top top",
      //     pin: true,
      //     end: "+=1000",
      //     pinSpacing: true,
      //   },
      // });
      // t1.current = gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: wrapperRef.current,
      //       scrub: 0.5,
      //       start: "top top",
      //       end: "+=2500",
      //     },
      //   })
      //   .to(wrapperRef.current, { backgroundColor: "red" });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="centered-block flex items-center pb-48 pt-20 lg:flex-row lg:gap-14"
      ref={wrapperRef}
      id="about"
    >
      <div className="w-full lg:w-1/2">
        <Heading>About Me</Heading>
        <Text className="mb-4">
          I&apos;m a passionate frontend web developer with a journey spanning
          more than a decade in the ever-evolving digital landscape. My
          expertise lies in crafting pixel-perfect designs and translating them
          into smooth, responsive, and visually stunning websites.
        </Text>
        <p className="text-justify font-work-sans text-xl text-neutral-600 lg:text-xl">
          Over the years, I&apos;ve had the privilege of building websites for
          various clients, including a bank, a popular artist&apos;s promotional
          website, a website for a popular company&apos;s new product launch,
          and a corporate website.
        </p>
      </div>
      <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
        <h2 className="mb-6 font-anek-bangla text-3xl font-semibold text-raisin-black">
          Main Skills
        </h2>
        <div className="mb-7 grid grid-cols-4 gap-3 font-anek-bangla text-lg">
          <Button>ReactJS</Button>
          <Button>NextJS</Button>
          <Button>Typescript</Button>
          <Button>GSAP</Button>
          <Button>TailwindCSS</Button>
          <Button>Sanity.io</Button>
          <Button>StrapiJS</Button>
          <Button>SASS</Button>
        </div>

        <h3 className="mb-5 font-anek-bangla text-2xl font-semibold text-raisin-black">
          Other Skills
        </h3>
        <div className="mb-7 flex flex-wrap gap-3 font-anek-bangla text-lg">
          <Button>Python</Button>
          <Button>React Three Fiber</Button>
          <Button>React Native</Button>
          <Button>PHP</Button>
        </div>
      </div>
    </div>
  );
}
