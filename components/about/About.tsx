"use client";

import Button from "../common/Button";
import Heading from "../common/Heading";
import Text from "../common/Text";
import skillCategories from "@/utils/skillsCategories";

export default function About() {
  return (
    <div
      className="centered-block flex flex-col items-start pb-16 pt-20 lg:gap-20 lg:pb-48"
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
        <h2 className="mb-6 font-anek-bangla text-2xl font-semibold text-raisin-black sm:text-5xl lg:mb-8">
          My Skills
        </h2>
        <div className="w-full space-y-10">
          {skillCategories.map((category) => (
            <div key={category.name} className="w-full">
              <h3 className="mb-4 flex items-center font-anek-bangla text-lg font-medium text-gray-600">
                <span className="mr-2 h-[1px] w-4 bg-gray-300"></span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 font-anek-bangla text-lg">
                {category.skills.map((skill) => (
                  <Button
                    key={skill.name}
                    icon={skill.icon}
                    className="bg-gray-100 hover:bg-gray-100 hover:text-gray-800"
                  >
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
