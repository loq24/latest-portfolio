import reactProjects from "@/data/react-projects.json";
import reactNativeProjects from "@/data/react-native-projects.json";
import wpProjects from "@/data/wp-projects.json";
import codeigniterProjects from "@/data/codeigniter-projects.json";
import ProjectCategory from "./ProjectCategory";

export default function Projects() {
  return (
    <div className="mt-14 flex flex-col flex-wrap">
      <ProjectCategory name="ReactJS / NextJS" projects={reactProjects} />
      <ProjectCategory name="React Native" projects={reactNativeProjects} />
      <ProjectCategory name="Wordpress" projects={wpProjects} />
      <ProjectCategory name="Codeigniter" projects={codeigniterProjects} />
    </div>
  );
}
