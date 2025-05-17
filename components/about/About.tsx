"use client";

import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";

import {
  SiOpenai,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiStripe,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiNodedotjs,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiPrisma,
  SiGreensock,
  SiSanity,
  SiStrapi,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { RiZzzFill } from "react-icons/ri";

export default function About() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "ReactJS", icon: SiReact },
        { name: "NextJS", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
        { name: "Zustand", icon: RiZzzFill },
        { name: "Tanstack Query", icon: SiReactquery },
        { name: "React Native", icon: SiReact },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "GSAP", icon: SiGreensock },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "NodeJS", icon: SiNodedotjs },
        { name: "PHP", icon: SiPhp },
        { name: "Laravel", icon: SiLaravel },
        { name: "WordPress", icon: SiWordpress },
        { name: "REST API", icon: AiOutlineApi },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Stripe API", icon: SiStripe },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      name: "DevOps & CMS",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: SiDocker },
        { name: "Sanity.io", icon: SiSanity },
        { name: "StrapiJS", icon: SiStrapi },
      ],
    },
    {
      name: "Emerging Tech",
      skills: [{ name: "AI Integration", icon: SiOpenai }],
    },
  ];

  return (
    <div
      className="centered-block flex flex-col items-start pb-16 pt-20 lg:gap-14 lg:pb-48"
      id="about"
    >
      <div className="mb-9 w-full lg:mb-0">
        <Heading>About Me</Heading>
        <Text className="mb-4">
          A seasoned Full Stack Engineer with over 14 years dedicated to
          crafting effective digital experiences, my core technical proficiency
          lies in the ReactJS/NextJS framework for building responsive and
          performant UIs.
        </Text>
        <Text className="mb-4">
          I have successfully delivered a range of projects, from developing
          secure web infrastructure for a bank and a compelling online presence
          for a popular artist, to spearheading the digital launch of a
          significant new product and constructing an enterprise-level corporate
          website.
        </Text>
        <Text className="mb-4">
          Committed to continuous improvement and innovation, I am now
          incorporating AI into my skillset. I view AI as a powerful enabler to
          streamline development, enhance creative problem-solving, and
          contribute to the next generation of intelligent web applications.
        </Text>
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <h2 className="mb-6 font-anek-bangla text-2xl font-semibold text-raisin-black sm:text-5xl">
          My Skills
        </h2>
        <div className="w-full space-y-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="w-full">
              <h3 className="mb-3 font-anek-bangla text-xl font-medium text-gray-700">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 font-anek-bangla text-lg">
                {category.skills.map((skill) => (
                  <Button key={skill.name} icon={skill.icon}>
                    {skill.name}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
