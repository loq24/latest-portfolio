import Heading from "../common/Heading";
import Text from "../common/Text";
import FeaturedProject from "./FeaturedProject";
import projects from "@/data/featured-projects.json";
import SeeMore from "./SeeMore";

export default function Projects() {
  return (
    <div className="w-full bg-slate-100 py-20" id="projects">
      <div className="centered-block mb-32 flex flex-col justify-center">
        <Heading className="mb-4 text-center">Featured Projects</Heading>
        <Text className="text-center">
          Here are my recent featured projects that I&apos;m very proud of.
        </Text>
      </div>
      {projects.map((project) => {
        return <FeaturedProject key={project.name} project={project} />;
      })}
      <SeeMore />
    </div>
  );
}
