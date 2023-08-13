import { IconCircleFilled } from "@tabler/icons-react";
import ExpandingArrow from "@/components/shared/expanding-arrow";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import ipexLogo from "@/public/ipexbanner.png";
import apiGatewayeLogo from "@/public/apigateway.png";
import azure from "@/public/azure.png";
import ipexMock from "@/public/ipexmock.png";
import megptBanner from "@/public/megptBanner.png";
import megptMock from "@/public/megptmock.png";
import createMegppt from "@/public/createmegpt.png";
import jaavinMeGPT from "@/public/jaavinMeGPT.png";
import province1325 from "@/public/1325Province.png";
import cad1325 from "@/public/cad1325.png";
import banner1325 from "@/public/banner1325.png";
import blurRobot1325comp2020 from "@/public/robot1325comp2020blur.png";
import tweetCopilotLaptop from "@/public/tweetcopilotlaptop.png";
import iphoneTweet from "@/public/iphonetweet.png";
import functionalDesign from "@/public/functionalDesign.png";
import highLevelTweet from "@/public/highleveltweet.png";
import rocketrySpaceLogo from "@/public/rocketrySpaceLogo.png";
import rocketBlur from "@/public/rocketBlur.png";
import spaceportMacRocketIdle from "@/public/spaceportmacrocketidle.png";
import spaceportMacRocketLaunch from "@/public/spaceportMacRocketLaunch.png";

interface SelectedWorkProps {
  title: string;
  position: string | null;
  date: string;
  info: string[];
  skills: string[];
  website: string[];
  images: StaticImageData[];
}

const selectedWork: SelectedWorkProps[] = [
  {
    title: "IPEX",
    position: "Software Developer Intern",
    date: "May 2023—August 2023",
    info: [
      "Implemented file transfer service in C# using .NET for business-critical process reducing downtime from 14% to 2%.",
      "Reduced missed promises on API Gateway improving accuracy of item-vendor mapping by 183 basis points on ASP.NET.",
      "Planned migration of a real-time application from Microsoft SQL server to MongoDB for key business service.",
    ],
    skills: ["C#", ".NET", "Azure", "Microsoft SQL", "MongoDB"],
    website: ["https://ipexna.com", "Website"],
    images: [ipexLogo, apiGatewayeLogo, ipexMock, azure],
  },
  {
    title: "MeGPT",
    position: null,
    date: "July 2023—",
    info: [
      "MeGPT enables creators, brands, artists, publishers, agencies, and businesses of all sizes to create an AI clone of themselves, which they can share.",
    ],
    skills: ["React", "TypeScript", "Next.js", "Google Cloud", "Tailwind CSS"],
    website: ["https://megpt.xyz", "Website"],
    images: [megptBanner, megptMock, jaavinMeGPT, createMegppt],
  },
  {
    title: "FRC Team 1325",
    position: "Software Development Co-Lead",
    date: "September 2021—June 2022",
    info: [
      "Led the design, implementation, and testing of software systems in Java for a 120lb competitive robot.",
      "Innovated in autonomous programming using PID controllers, control systems, and computer vision.",
      "In this community robotics team previously sponsored by NASA, the robot has won many competitions and was awarded the Excellence in Engineering Award at the FIRST Robotics World Championship in Houston.",
    ],
    skills: ["Java", "C++", "Control Systems", "Computer Vision"],
    website: ["/team1325-engineering-notebook.pdf", "Engineering Notebook"],
    images: [province1325, banner1325, blurRobot1325comp2020, cad1325],
  },
  {
    title: "Tweet Copilot",
    position: null,
    date: "April 2023—May 2023",
    info: [
      "A social media platform that uses ChatGPT to keep your messages within the 280-character limit.",
    ],
    skills: ["React", "TypeScript", "Next.js", "MySQL", "Tailwind CSS"],
    website: ["https://github.com/UnloadingGnat/tweetcopilot", "Github"],
    images: [tweetCopilotLaptop, iphoneTweet, highLevelTweet, functionalDesign],
  },
  {
    title: "McMaster Rocketry",
    position: "Assistant Project Manager",
    date: "November 2022—",
    info: [
      "Coordinated between the software controls sub-team of 15 members and the project manager to drive successful rocket launch at Spaceport America in New Mexico.",
      "Orchestrated the team's timelines, coordinating tasks among a rocketry team of over 70 highly skilled members.",
    ],
    skills: ["Rust", "React", "TypeScript", "MongoDB"],
    website: ["https://www.macrocketry.ca/", "Website"],
    images: [
      rocketrySpaceLogo,
      spaceportMacRocketIdle,
      spaceportMacRocketLaunch,
      rocketBlur,
    ],
  },
];

export default function SelectedWork() {
  const galleryRef = useRef<HTMLDivElement[]>([]);

  const scrollLeft = (index: number) => {
    if (galleryRef.current[index]) {
      galleryRef.current[index].scrollLeft -= 500;
    }
  };

  const scrollRight = (index: number) => {
    if (galleryRef.current) {
      galleryRef.current[index].scrollLeft += 500;
    }
  };

  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-4 rounded-3xl">
        <div className="max-w-full pl-5 lg:px-8">
          <div className="mx-auto max-w-full lg:mx-0">
            <h2 className="text-3xl tracking-normal text-white md:text-4xl">
              Selected Work
            </h2>
            <p className="mt-16 text-2xl tracking-tight text-[#757575] md:text-3xl">
              2021—2023
            </p>
          </div>
        </div>
      </div>
      {selectedWork.map((work, index) => (
        <div key={index} className="flex flex-col gap-2 mb-1">
          <div className="flex flex-col lg:flex-row gap-2 justify-between">
            <div className="bg-[#222329] bg-opacity-80 basis-1/4  backdrop-blur-xl py-4 rounded-3xl sm:mt-0 w-full pl-5 lg:mx-0 min-h-[150px] flex flex-col justify-between">
              <h2 className="text-3xl text-white sm:text-4xl">{work.title}</h2>
              <div className="flex flex-col">
                {work.position && (
                  <p className="text-xl lg:text-2xl text-gray-300">
                    {work.position}
                  </p>
                )}
                <p className="text-lg text-[#757575]">{work.date}</p>
              </div>
            </div>
            <div className="bg-[#222329] bg-opacity-80 basis-1/2 backdrop-blur-xl py-4 rounded-3xl sm:mt-0 w-full pr-5 pl-5 lg:pr-3">
              <div className="text-lg text-[#999] flex flex-col gap-1">
                {work.info.map((infoLine, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-3 group"
                  >
                    <div>
                      <IconCircleFilled
                        width={12}
                        className="mt-0.5 group-hover:text-white "
                      />
                    </div>
                    {infoLine}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#222329] bg-opacity-80 basis-1/4 backdrop-blur-xl py-4 rounded-3xl sm:mt-0 w-full pl-5">
              <div className="text-lg text-[#54565E] flex flex-col gap-0">
                {work.skills.map((skillName, index) => (
                  <div
                    key={index}
                    className="flex flex-row hover:text-[#999] items-start gap-3 group"
                  >
                    <IconCircleFilled className="w-4 mt-0.5 group-hover:text-[#999]" />
                    {skillName}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 justify-between">
            <a
              href={work.website[0]}
              className="bg-[#3A416D] hover:bg-[#4D5691] transition-all ease-in-out bg-opacity-80 basis-1/4 group backdrop-blur-xl py-4 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 min-h-[65px] flex flex-col justify-between"
            >
              <div className="flex flex-row gap-3">
                <h3 className="text-xl ml-2 lg:text-xl xl:text-2xl text-gray-300">
                  {work.website[1]}
                </h3>
                <ExpandingArrow className="mt-1 -ml-2 h-5 w-5 text-gray-300" />
              </div>
            </a>
            <div className="bg-[#222329] hidden lg:block bg-opacity-80 basis-1/2 backdrop-blur-xl py-4 rounded-2xl sm:mt-0 w-full pr-5 pl-5 lg:pr-3">
              <div className="text-lg text-[#999] flex flex-col gap-1"></div>
            </div>
            <div className="bg-[#222329] hidden lg:block bg-opacity-80 basis-1/4 backdrop-blur-xl py-2 rounded-full sm:mt-0 w-full px-5">
              <div className="flex flex-row gap-3 justify-between  w-full">
                <button
                  aria-label="scroll-gallery-left"
                  onClick={() => scrollLeft(index)}
                  className="bg-[#393A41] hover:bg-[#4C4D56] transition-all ease-in-out bg-opacity-80 basis-1/4 group backdrop-blur-xl py-6 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 flex flex-row justify-start items-center"
                >
                  <ExpandingArrow className="-ml-2 h-5 w-5 text-gray-300 rotate-180" />
                </button>
                <button
                  aria-label="scroll-gallery-right"
                  onClick={() => scrollRight(index)}
                  className="bg-[#393A41] hover:bg-[#4C4D56] transition-all ease-in-out bg-opacity-80 basis-1/4 group backdrop-blur-xl py-6 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 flex flex-row justify-end items-center"
                >
                  <ExpandingArrow className="-ml-8 h-5 w-5 text-gray-300" />
                </button>
              </div>
            </div>
          </div>
          <div
            ref={(el) => {
              galleryRef.current[index] = el as HTMLDivElement;
            }}
            className=" mt-1 flex flex-row w-full gap-5 px-10 pl-2 overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {work.images.map((image, index) => (
              <div
                key={index}
                className="aspect-[16/9] w-[90%] shrink-0 pointer-events-none select-none snap-start snap-always rounded-xl bg-white sm:w-[44%] md:w-[30%]"
              >
                <Image
                  src={image}
                  placeholder="blur"
                  alt="Image related to selected work"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
