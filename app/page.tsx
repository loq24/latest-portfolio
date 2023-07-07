import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Portfolio />
    </div>
  );
}
