"use client";

import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";

export default function About() {
  return (
    <div
      className="centered-block flex flex-col items-start pb-16 pt-20 lg:flex-row lg:gap-14 lg:pb-48"
      id="about"
    >
      <div className="mb-9 w-full lg:mb-0 lg:w-1/2">
        <Heading>About Me</Heading>
        <Text className="mb-4">
          I'm passionate about building stunning and user-friendly websites and
          web applications with a journey spanning more than 12 years in the
          ever-evolving digital landscape. My stack revolves around the ReactJS
          ecosystem.
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
          Skills
        </h2>
        <div className="mb-7 grid grid-cols-2 gap-3 font-anek-bangla text-lg min-[375px]:grid-cols-3 sm:grid-cols-4">
          <Button>JavaScript</Button>
          <Button>ReactJS</Button>
          <Button>NextJS</Button>
          <Button>TypesSript</Button>
          <Button>TailwindCSS</Button>
          <Button>Redux</Button>
          <Button>Stripe API</Button>
          <Button>SASS</Button>
          <Button>React Native</Button>
          <Button>PHP</Button>
          <Button>WordPress</Button>
          <Button>NodeJS</Button>
          <Button>REST API</Button>
          <Button>GraphQL</Button>
          <Button>HTML5</Button>
          <Button>CSS3</Button>
        </div>

        <h3 className="mb-5 font-anek-bangla text-xl font-semibold text-raisin-black sm:text-2xl">
          Others
        </h3>
        <div className="mb-7 flex flex-wrap gap-3 font-anek-bangla text-lg">
          <Button>Python</Button>
          <Button>Prisma</Button>
          <Button>AWS</Button>
          <Button>MongoDB</Button>
          <Button>GSAP</Button>
          <Button>Github CI/CD</Button>
          <Button>Sanity.io</Button>
          <Button>StrapiJS</Button>
          <Button>jQuery</Button>
        </div>
      </div>
    </div>
  );
}
