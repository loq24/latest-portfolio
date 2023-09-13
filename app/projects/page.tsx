import Heading from "@/components/common/Heading";
import Text from "@/components/common/Text";
import Projects from "@/components/projects/Projects";
import React from "react";

export default function page() {
  return (
    <div className="h-full w-full bg-slate-100 pb-28 pt-44">
      <div className="centered-block flex flex-col">
        <Heading as="h1" className="mb-2">
          All Projects
        </Heading>
        <Text className="text-neutral-500">
          These are the complete list of my projects that I worked on over the
          years.
        </Text>
        <Projects />
      </div>
    </div>
  );
}
