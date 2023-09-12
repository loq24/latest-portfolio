import reactProjects from "@/data/react-projects.json";
import reactNativeProjects from "@/data/react-native-projects.json";
import wpProjects from "@/data/wp-projects.json";
import codeigniterProjects from "@/data/codeigniter-projects.json";
import { ProjectType } from "@/types";
import Project from "./Project";
import Heading from "../common/Heading";

export default function Projects() {
  return (
    <div className="mt-14 flex flex-col flex-wrap">
      <div className="mb-36 w-full">
        <Heading className="mb-10 text-4xl">ReactJS / NextJS</Heading>
        <div className="grid grid-cols-2 gap-14">
          {reactProjects.map((project: ProjectType) => {
            return <Project project={project} key={project.name} />;
          })}
        </div>
      </div>

      <div className="mb-36 w-full">
        <Heading className="mb-10 text-4xl">React Native</Heading>
        <div className="grid grid-cols-2 gap-14">
          {reactNativeProjects.map((project: ProjectType) => {
            return <Project project={project} key={project.name} />;
          })}
        </div>
      </div>

      <div className="mb-36 w-full">
        <Heading className="mb-10 text-4xl">Wordpress</Heading>
        <div className="grid grid-cols-2 gap-14">
          {wpProjects.map((project: ProjectType) => {
            return <Project project={project} key={project.name} />;
          })}
        </div>
      </div>

      <div className="mb-36 w-full">
        <Heading className="mb-10 text-4xl">Codeigniter</Heading>
        <div className="grid grid-cols-2 gap-14">
          {codeigniterProjects.map((project: ProjectType) => {
            return <Project project={project} key={project.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
