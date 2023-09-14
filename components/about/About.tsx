"use client";

import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";

export default function About() {
  return (
    <div
      className="centered-block flex flex-col items-center pb-16 pt-20 lg:flex-row lg:gap-14 lg:pb-48"
      id="about"
    >
      <div className="mb-9 w-full lg:mb-0 lg:w-1/2">
        <Heading>About Me</Heading>
        <Text className="mb-4">
          I&apos;m a passionate frontend web developer with a journey spanning
          more than a decade in the ever-evolving digital landscape. My
          expertise lies in crafting pixel-perfect designs and translating them
          into smooth, responsive, and visually stunning websites.
        </Text>
        <Text>
          Over the years, I&apos;ve had the privilege of building websites for
          various clients, including a bank, a popular artist&apos;s promotional
          website, a website for a popular company&apos;s new product launch,
          and a corporate website.
        </Text>
      </div>
      <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
        <h2 className="mb-6 font-anek-bangla text-2xl font-semibold text-raisin-black sm:text-3xl">
          Main Skills
        </h2>
        <div className="mb-7 grid grid-cols-2 gap-3 font-anek-bangla text-lg min-[375px]:grid-cols-3 sm:grid-cols-4">
          <Button>ReactJS</Button>
          <Button>NextJS</Button>
          <Button>Typescript</Button>
          <Button>GSAP</Button>
          <Button>TailwindCSS</Button>
          <Button>Sanity.io</Button>
          <Button>StrapiJS</Button>
          <Button>SASS</Button>
        </div>

        <h3 className="mb-5 font-anek-bangla text-xl font-semibold text-raisin-black sm:text-2xl">
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
