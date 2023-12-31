import {
  IconBallpen,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import {
  SiAmazonaws,
  SiCsharp,
  SiDjango,
  SiDotnet,
  SiFigma,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPowerapps,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSketch,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";

const frontendSkills = [
  { icon: <SiTypescript stroke="2" size={25} />, label: "TypeScript" },
  { icon: <SiJavascript stroke="2" size={25} />, label: "JavaScript" },
  { icon: <SiTailwindcss stroke="2" size={25} />, label: "TailwindCSS" },
  { icon: <SiReact stroke="2" size={25} />, label: "ReactJS" },
  { icon: <SiNextdotjs stroke="2" size={25} />, label: "NextJS" },
  { icon: <SiGraphql stroke="2" size={25} />, label: "GraphQL" },
];

const backendSkills = [
  { icon: <SiPython stroke="2" size={25} />, label: "Python" },
  { icon: <SiOpenjdk stroke="2" size={25} />, label: "Java" },
  { icon: <SiCsharp stroke="2" size={25} />, label: "C#" },
  { icon: <SiDjango stroke="2" size={25} />, label: "Django" },
  { icon: <SiDotnet stroke="2" size={25} />, label: ".NET" },
  { icon: <SiRust stroke="2" size={25} />, label: "Rust" },
];

const cloudSkills = [
  { icon: <SiVercel stroke="2" size={25} />, label: "Vercel" },
  { icon: <SiMicrosoftazure stroke="2" size={25} />, label: "Azure" },
  { icon: <SiAmazonaws stroke="2" size={25} />, label: "AWS" },
  { icon: <SiGooglecloud stroke="2" size={25} />, label: "Google Cloud" },
  { icon: <SiFirebase stroke="2" size={25} />, label: "Firebase" },
];

const databaseSkills = [
  { icon: <SiPostgresql stroke="2" size={25} />, label: "PostgreSQL" },
  {
    icon: <SiMicrosoftsqlserver stroke="2" size={25} />,
    label: "Microsoft SQL",
  },
  { icon: <SiMongodb stroke="2" size={25} />, label: "MongoDB" },
  { icon: <SiRedis stroke="2" size={25} />, label: "Redis" },
  { icon: <SiMysql stroke="2" size={25} />, label: "MySQL" },
  { icon: <SiPrisma stroke="2" size={25} />, label: "Prisma" },
];

const systemSkills = [
  { icon: <SiSketch stroke="2" size={25} />, label: "Sketch" },
  { icon: <SiFigma stroke="2" size={25} />, label: "Figma" },
  { icon: <SiStorybook stroke="2" size={25} />, label: "Storybook" },
  { icon: <IconBallpen stroke="2" size={25} />, label: "Excalidraw" },
  { icon: <SiPowerapps stroke="2" size={25} />, label: "Power Apps" },
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
      <div className="flex lg:px-0 px-3">
        <button
          aria-label="skill category left"
          className="text-gray-500 mt-3 mr-1 lg:hidden"
          onClick={scrollLeft}
        >
          <IconChevronLeft stroke={2} size={25} />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth border-x-2 mt-2 border-opacity-60 border-gray-700 lg:border-hidden "
        >
          <button
            onClick={() => handleTabChange("frontend")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap pl-2 lg:pl-0 hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "frontend" ? "text-white hover:no-underline" : ""
            }`}
          >
            Frontend Dev
          </button>
          <p className="mt-2 text-lg ml-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("backend")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap pl-2 hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "backend" ? "text-white hover:no-underline" : ""
            }`}
          >
            Backend Dev
          </button>
          <p className="mt-2 text-lg ml-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("cloud")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap pl-2 hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
              activeTab === "cloud" ? "text-white hover:no-underline" : ""
            }`}
          >
            Cloud Ops
          </button>
          <p className="mt-2 text-lg ml-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button
            onClick={() => handleTabChange("database")}
            className={`mt-2 text-lg snap-start snap-always whitespace-nowrap pl-2 hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ${
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
        <button
          aria-label="Skill category right"
          className="text-gray-500 ml-1 mt-3 lg:hidden"
          onClick={scrollRight}
        >
          <IconChevronRight stroke={2} size={25} />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:pl-1 mt-6 text-lg lg:text-2xl text-white ">
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
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-4 rounded-3xl">
        <div className="max-w-full lg:px-8">
          <div className="mx-auto max-w-full lg:mx-0">
            <h2 className="mt-2 pl-5 lg:pl-0 text-3xl tracking-normal text-white md:text-4xl">
              Skills
            </h2>
            <SkillCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
