import {
  IconBallpen,
  IconBrandAzure,
  IconBrandFramerMotion,
  IconBrandGraphql,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVite,
  IconChevronLeft,
  IconChevronRight,
  IconSourceCode,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import {
  SiAmazonaws,
  SiCsharp,
  SiDjango,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGooglecloud,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPowerapps,
  SiPrisma,
  SiRedis,
  SiServerless,
  SiSketch,
} from "@icons-pack/react-simple-icons";

const frontendSkills = [
  { icon: <IconBrandTypescript stroke={2} size={25} />, label: "TypeScript" },
  { icon: <SiJavascript stroke={2} size={25} />, label: "JavaScript" },
  { icon: <IconBrandTailwind stroke={2} size={25} />, label: "TailwindCSS" },
  { icon: <IconBrandReact stroke={2} size={25} />, label: "ReactJS" },
  { icon: <IconBrandNextjs stroke={2} size={25} />, label: "NextJS" },
  { icon: <IconBrandGraphql stroke={2} size={25} />, label: "GraphQL" },
  { icon: <IconBrandRadixUi stroke={2} size={25} />, label: "RadixUI" },
  {
    icon: <IconBrandReactNative stroke={2} size={25} />,
    label: "React Native",
  },
  { icon: <SiElectron stroke={2} size={25} />, label: "Electron" },
  { icon: <IconBrandVite stroke={2} size={25} />, label: "Vite" },
  { icon: <IconSourceCode stroke={2} size={25} />, label: "HTML/CSS" },
  {
    icon: <IconBrandFramerMotion stroke={2} size={25} />,
    label: "Framer Motion",
  },
];

const backendSkills = [
  { icon: <IconBrandPython stroke={2} size={25} />, label: "Python" },
  { icon: <SiOpenjdk stroke={2} size={25} />, label: "Java" },
  { icon: <SiCsharp stroke={2} size={25} />, label: "C#" },
  { icon: <SiDjango stroke={2} size={25} />, label: "Django" },
  { icon: <SiDotnet stroke={2} size={25} />, label: ".NET" },
  { icon: <SiNodedotjs stroke={2} size={25} />, label: "NodeJS" },
  { icon: <SiExpress stroke={2} size={25} />, label: "ExpressJS" },
  { icon: <SiServerless stroke={2} size={25} />, label: "Serverless" },
];

const cloudSkills = [
  { icon: <IconBrandVercel stroke={2} size={25} />, label: "Vercel" },
  { icon: <IconBrandAzure stroke={2} size={25} />, label: "Azure" },
  { icon: <SiAmazonaws stroke={2} size={25} />, label: "AWS" },
  { icon: <SiGooglecloud stroke={2} size={25} />, label: "Google Cloud" },
  { icon: <SiFirebase stroke={2} size={25} />, label: "Firebase" },
];

const databaseSkills = [
  { icon: <SiPostgresql stroke={2} size={25} />, label: "PostgreSQL" },
  {
    icon: <SiMicrosoftsqlserver stroke={2} size={25} />,
    label: "Microsoft SQL",
  },
  { icon: <SiMongodb stroke={2} size={25} />, label: "MongoDB" },
  { icon: <SiRedis stroke={2} size={25} />, label: "Redis" },
  { icon: <SiPrisma stroke={2} size={25} />, label: "Prisma" },
];

const systemSkills = [
  { icon: <SiSketch stroke={2} size={25} />, label: "Sketch" },
  { icon: <SiFigma stroke={2} size={25} />, label: "Figma" },
  { icon: <IconBallpen stroke={2} size={25} />, label: "Excalidraw" },
  { icon: <SiPowerapps stroke={2} size={25} />, label: "Power Apps" },
];

function SkillCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getSkills = () => {
    if (activeTab === "frontend") {
      return frontendSkills;
    } else if (activeTab === "backend") {
      return backendSkills;
    } else if (activeTab === "cloud") {
      return cloudSkills;
    } else if (activeTab === "database") {
      return databaseSkills;
    } else if (activeTab === "system") {
      return systemSkills;
    } else {
      return frontendSkills;
    }
  };

  return (
    <>
      <div className="flex">
        <button aria-label="skill category left" className="text-gray-500 mt-3 mr-1 lg:hidden" onClick={scrollLeft}>
          <IconChevronLeft stroke={2} size={25} />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth border-x-2 mt-2 border-opacity-60 border-gray-700 lg:border-hidden "
        >
          <button
            onClick={() => handleTabChange("frontend")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "frontend" ? "text-white hover:no-underline" : ""
            }`}
          >
            Frontend Dev
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("backend")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "backend" ? "text-white hover:no-underline" : ""
            }`}
          >
            Backend Dev
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("cloud")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "cloud" ? "text-white hover:no-underline" : ""
            }`}
          >
            Cloud Ops
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("database")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "database" ? "text-white hover:no-underline" : ""
            }`}
          >
            Database
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("system")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "system" ? "text-white hover:no-underline" : ""
            }`}
          >
            System Design
          </button>
        </div>
        <button aria-label="Skill category right" className="text-gray-500 ml-1 mt-3 lg:hidden" onClick={scrollRight}>
          <IconChevronRight stroke={2} size={25} />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-lg lg:text-2xl text-white ">
        {getSkills().map((skill, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-2 items-center"
          >
            {skill.icon}
            <h3 className="whitespace-nowrap">{skill.label}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default function TechStack() {
  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-6 sm:py-12 rounded-3xl">
        <div className="max-w-full px-12 lg:px-8">
          <div className="mx-auto max-w-full lg:mx-0">
            <h2 className="mt-2 text-2xl lg:text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Skills
            </h2>
            <SkillCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
