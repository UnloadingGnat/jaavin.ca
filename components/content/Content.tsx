import Hero from "@/components/content/section/Hero";
import LogoMarquee from "@/components/content/section/LogoMarquee";
import dynamic from "next/dynamic";
import SelectedWork from "@/components/content/section/SelectedWork";

const DynamicTechStack = dynamic(
  () => import("@/components/content/section/TechStack"),
);

export default function Content() {
  return (
    <>
      <div className="px-1 lg:px-2">
        <div className="min-h-screen flex flex-col gap-2">
          <Hero />
          <DynamicTechStack />
          <LogoMarquee />
          <SelectedWork />
        </div>
      </div>
    </>
  );
}
