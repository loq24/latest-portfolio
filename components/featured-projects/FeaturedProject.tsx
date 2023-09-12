"use client";

import { useEffect, useRef } from "react";
import ExternalLink from "../svgs/ExternalLink";
import { gsap } from "gsap";
import { ProjectType } from "@/types";
import Button from "../common/Button";

type FeaturedProjectType = {
  project: ProjectType;
};

export default function FeaturedProject({ project }: FeaturedProjectType) {
  const { name, description, tags, featuredImage, link } = project;
  const wrapperRef = useRef(null);

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
    <div className="w-full translate-y-60 pb-44" ref={wrapperRef}>
      <div className="centered-block flex h-full items-center gap-10">
        <div className="relative w-1/2 overflow-hidden">
          <div className="absolute right-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] bg-slate-100"></div>
          <div className="absolute left-0 top-0 z-20 h-[calc(100%-15px)] w-[12%] bg-slate-100"></div>
          <img
            src="images/macbook-02.png"
            alt="Macbook Mockup"
            className="relative z-30 h-full w-full object-contain"
          />
          <div className="absolute left-0 top-0 z-10 h-[calc(100%-15px)] w-full overflow-hidden">
            <img
              data-animation="website-img"
              src={featuredImage}
              className="absolute left-0 right-0 top-1 mx-auto h-auto w-[78%] -translate-y-64 object-contain will-change-transform"
              alt={name}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col justify-start gap-3">
          <h2
            data-animation="text"
            className="mr-1 font-anek-bangla text-3xl font-semibold text-raisin-black"
          >
            {name}
          </h2>
          <div className="mb-2 flex flex-wrap gap-3">
            {tags.map((tag) => {
              return (
                <Button key={tag} className="button">
                  {tag}
                </Button>
              );
            })}
          </div>
          <p
            data-animation="text"
            className="text-justify font-work-sans text-lg text-neutral-600"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <a
            data-animation="text"
            href={link}
            target="_blank"
            rel="nofollow"
            className="flex gap-1 text-lg text-neutral-600"
          >
            <span>Visit Website</span>
            <div className="h-5 w-5 translate-y-1">
              <ExternalLink />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
