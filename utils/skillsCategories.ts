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
  SiDocker,
  SiPrisma,
  SiGreensock,
  SiSanity,
  SiStrapi,
  SiShadcnui,
  SiGithub,
  SiSentry,
  SiClerk,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { RiZzzFill } from "react-icons/ri";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "ReactJS", icon: SiReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: RiZzzFill },
      { name: "Tanstack Query", icon: SiReactquery },
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
      { name: "Headless WP", icon: SiWordpress },
      { name: "StrapiJS", icon: SiStrapi },
      { name: "Stripe API", icon: SiStripe },
      { name: "REST API", icon: AiOutlineApi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Clerk", icon: SiClerk },
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
      { name: "Github", icon: SiGithub },
      { name: "Sanity.io", icon: SiSanity },
      { name: "WordPress", icon: SiWordpress },
      { name: "Sentry", icon: SiSentry },
    ],
  },
  {
    name: "Emerging Tech",
    skills: [{ name: "AI Integration", icon: SiOpenai }],
  },
];

export default skillCategories;
