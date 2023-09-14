import { ProjectType } from "@/types";
import Heading from "../common/Heading";
import Project from "./Project";

type ProjectCategoryType = {
  name: string;
  projects: ProjectType[];
};

export default function ProjectCategory({
  name,
  projects,
}: ProjectCategoryType) {
  return (
    <div className="mb-16 w-full sm:mb-20 md:mb-24">
      <h2 className="mb-5 font-anek-bangla text-3xl font-semibold text-gray-700 sm:text-4xl">
        {name}
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-14">
        {projects.map((project: ProjectType) => {
          return <Project project={project} key={project.name} />;
        })}
      </div>
    </div>
  );
}
