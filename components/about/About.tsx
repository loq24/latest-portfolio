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
          With over 14 years of experience, I am a senior full-stack engineer
          focused on building polished, high-performing digital products. React
          and NextJS remain my foundation, supported by hands-on experience
          across backend systems, headless CMS architecture, cloud
          infrastructure, and modern deployment workflows.
        </Text>
        <Text className="mb-4">
          My recent work spans AI-powered applicant ranking for a major job
          platform, secure banking infrastructure, premium real estate
          experiences, real-time collaboration tools, and consumer-facing
          product launches. I enjoy turning complex requirements into fast,
          reliable, and intuitive experiences that serve both users and
          business goals.
        </Text>
        <Text className="mb-4">
          AI is now a core part of how I build, not just an area of
          exploration. I use LLMs, automation, and AI-assisted workflows to
          create smarter products, streamline development, and ship features
          that feel genuinely useful in production.
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
