"use client";

import { useEffect, useRef } from "react";
import ExternalLink from "../svgs/ExternalLink";
import { gsap } from "gsap";
import { ProjectType } from "@/types";
import Button from "../common/Button";
import Text from "../common/Text";
import Image from "next/image";
import skillCategories from "@/utils/skillsCategories";

type FeaturedProjectType = {
  project: ProjectType;
};

export default function FeaturedProject({ project }: FeaturedProjectType) {
  const {
    name,
    description,
    tags,
    featuredImage,
    link,
    buttonText,
    repository_link,
  } = project;
  const wrapperRef = useRef(null);

  const findSkillByName = (skillName: string) => {
    const normalizedTagName = skillName.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (const category of skillCategories) {
      const skill = category.skills.find((skill) => {
        const normalizedSkillName = skill.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");
        return (
          normalizedSkillName.includes(normalizedTagName) ||
          normalizedTagName.includes(normalizedSkillName)
        );
      });
      if (skill) return skill;
    }
    return null;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('[data-animation="website-img"]', {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        y: 0,
      });
      gsap.to(wrapperRef.current, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
        },
        y: 0,
        duration: 2,
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full translate-y-60 pb-20 sm:pb-32 md:pb-44"
      ref={wrapperRef}
    >
      <div className="centered-block flex h-full flex-col items-center gap-10">
        <div className="relative mx-auto w-[90%] overflow-hidden">
          <div className="absolute left-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] bg-slate-100"></div>
          <Image
            src="/images/macbook-02.png"
            alt="Macbook Mockup"
            width={800}
            height={500}
            priority
            className="relative z-30 h-full w-full object-contain [transform-style:preserve-3d] [transform:translateZ(1000px)]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-0 top-1 z-10 h-[calc(100%-15px)] w-full overflow-hidden">
            {featuredImage && (
              <Image
                data-animation="website-img"
                src={featuredImage}
                width={700}
                height={400}
                alt={name || "Project screenshot"}
                className="absolute left-0 right-0 top-1 z-10 mx-auto h-auto w-[78%] -translate-y-64 object-contain will-change-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        </div>
        <div className="flex w-full flex-col justify-start gap-3">
          <h2
            data-animation="text"
            className="mr-1 font-anek-bangla text-3xl font-semibold text-raisin-black"
          >
            {name}
          </h2>
          <div className="mb-2 flex flex-wrap gap-3">
            {tags.map((tag) => {
              const skill = findSkillByName(tag);
              return (
                <Button key={tag} className="button">
                  {skill?.icon && (
                    <span className="mr-1">
                      <skill.icon size={16} />
                    </span>
                  )}
                  {tag}
                </Button>
              );
            })}
          </div>
          <Text>{description}</Text>

          <div className="flex gap-4">
            {link && (
              <a
                data-animation="text"
                href={link}
                target="_blank"
                rel="nofollow"
                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
              >
                <span>{buttonText ? buttonText : "Visit Website"}</span>
                <div className="h-5 w-5 translate-y-1">
                  <ExternalLink />
                </div>
              </a>
            )}
            {repository_link && (
              <a
                data-animation="text"
                href={repository_link}
                target="_blank"
                rel="nofollow"
                className="flex gap-1 text-base text-neutral-600 sm:text-lg"
              >
                <span>View Repository</span>
                <div className="h-5 w-5 translate-y-1">
                  <ExternalLink />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
