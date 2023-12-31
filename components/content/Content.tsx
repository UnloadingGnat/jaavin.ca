import Hero from "@/components/content/section/Hero";
import LogoMarquee from "@/components/content/section/LogoMarquee";
import dynamic from "next/dynamic";
import SelectedWork from "@/components/content/section/SelectedWork";
import About from "@/components/content/section/About";

const DynamicTechStack = dynamic(
  () => import("@/components/content/section/TechStack"),
);

export default function Content({
  height,
  cycleFunc,
}: {
  height: number;
  cycleFunc: () => void;
}) {
  return (
    <>
      <div className="px-1 lg:px-2">
        <div className="min-h-screen flex flex-col gap-2">
          <Hero />
          <LogoMarquee />
          <DynamicTechStack />
          <SelectedWork />
          <About cycleFunc={cycleFunc} height={height} />
        </div>
      </div>
    </>
  );
}
