import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/featured-projects/FeaturedProjects";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
    </>
  );
}
