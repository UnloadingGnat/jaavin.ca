import Hero from "@/components/content/section/Hero";
import TechStack from "@/components/content/section/TechStack";
import LogoMarquee from "@/components/content/section/LogoMarquee";

export default function Content() {
  return (
    <>
      <div className="px-1 lg:px-2">
        <div className="min-h-screen flex flex-col gap-2">
          <Hero />
          <TechStack />
          <LogoMarquee />
        </div>
      </div>
    </>
  );
}
