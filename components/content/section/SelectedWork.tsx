import { IconCircleFilled } from "@tabler/icons-react";
import ExpandingArrow from "@/components/shared/expanding-arrow";
import Image from "next/image";
import { useRef } from "react";

interface SelectedWorkProps {
  title: string;
  position: string | null;
  date: string;
  info: string[];
  skills: string[];
  website: string[];
}

const selectedWork: SelectedWorkProps[] = [
  {
    title: "IPEX",
    position: "Software Developer Intern",
    date: "May 2023—August 2023",
    info: [
      "Implemented file transfer service in C# using .NET for business-critical process reducing downtime from 14% to 2%.",
      "Reduced missed promises on API Gateway improving accuracy of item-vendor mapping by 183 basis points. (Update...)",
      "Planned migration from Microsoft SQL server to MongoDB for key business service.",
    ],
    skills: ["C#", ".NET", "Azure", "Microsoft SQL", "MongoDB"],
    website: ["https://ipexna.com", "Website"],
  },
  {
    title: "MeGPT",
    position: null,
    date: "May 2023—August 2023",
    info: [
      "Implemented file transfer service in C# using .NET for business-critical process reducing downtime from 14% to 2%.",
      "Reduced missed promises on API Gateway improving accuracy of item-vendor mapping by 183 basis points. (Update...)",
      "Planned migration from Microsoft SQL server to MongoDB for key business service.",
    ],
    skills: ["C#", ".NET", "Azure", "Microsoft SQL", "MongoDB"],
    website: ["https://ipexna.com", "Website"],
  },
  {
    title: "FRC Team 1325",
    position: "Software Development Co-Lead",
    date: "May 2023—August 2023",
    info: [
      "Implemented file transfer service in C# using .NET for business-critical process reducing downtime from 14% to 2%.",
      "Reduced missed promises on API Gateway improving accuracy of item-vendor mapping by 183 basis points. (Update...)",
      "Planned migration from Microsoft SQL server to MongoDB for key business service.",
    ],
    skills: ["C#", ".NET", "Azure", "Microsoft SQL", "MongoDB"],
    website: ["https://ipexna.com", "Website"],
  },
  {
    title: "Tweet Copilot",
    position: null,
    date: "May 2023—August 2023",
    info: [
      "Implemented file transfer service in C# using .NET for business-critical process reducing downtime from 14% to 2%.",
      "Reduced missed promises on API Gateway improving accuracy of item-vendor mapping by 183 basis points. (Update...)",
      "Planned migration from Microsoft SQL server to MongoDB for key business service.",
    ],
    skills: ["C#", ".NET", "Azure", "Microsoft SQL", "MongoDB"],
    website: ["https://ipexna.com", "Website"],
  },
  {
    title: "McMaster Rocketry",
    position: "Assistant Project Manager",
    date: "May 2023—August 2023",
    info: [
      "Implemented file transfer service in C# using .NET for business-critical process reducing downtime from 14% to 2%.",
      "Reduced missed promises on API Gateway improving accuracy of item-vendor mapping by 183 basis points. (Update...)",
      "Planned migration from Microsoft SQL server to MongoDB for key business service.",
    ],
    skills: ["C#", ".NET", "Azure", "Microsoft SQL", "MongoDB"],
    website: ["https://ipexna.com", "Website"],
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
              className="bg-[#3A416D] bg-opacity-80 basis-1/4 group backdrop-blur-xl py-4 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 min-h-[65px] flex flex-col justify-between"
            >
              <div className="flex flex-row gap-3">
                <h3 className="text-xl ml-2 lg:text-2xl text-gray-300">
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
                  className="bg-[#393A41] hover:bg-[#4C4D56] bg-opacity-80 basis-1/4 group backdrop-blur-xl py-6 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 flex flex-row justify-start items-center"
                >
                  <ExpandingArrow className="-ml-2 h-5 w-5 text-gray-300 rotate-180" />
                </button>
                <button
                  aria-label="scroll-gallery-right"
                  onClick={() => scrollRight(index)}
                  className="bg-[#393A41] hover:bg-[#4C4D56] bg-opacity-80 basis-1/4 group backdrop-blur-xl py-6 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 flex flex-row justify-end items-center"
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
            <div className="aspect-[16/9] w-[90%] shrink-0 pointer-events-none select-none snap-start snap-always rounded-xl bg-white sm:w-[44%] md:w-[30%]">
              <Image
                src="/ipexlogo.png"
                width={100}
                height={100}
                alt="image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-[16/9] w-[90%] shrink-0 pointer-events-none select-none snap-start snap-always rounded-xl bg-white sm:w-[44%] md:w-[30%]">
              <Image
                src="/screen.png"
                width={100}
                height={100}
                alt="image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-[16/9] w-[90%] shrink-0 pointer-events-none select-none snap-start snap-always rounded-xl bg-white sm:w-[44%] md:w-[30%]">
              <Image
                src="/screen.png"
                width={100}
                height={100}
                alt="image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-[16/9] w-[90%] shrink-0 pointer-events-none select-none snap-start snap-always rounded-xl bg-white sm:w-[44%] md:w-[30%]">
              <Image
                src="/screen.png"
                width={100}
                height={100}
                alt="image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-[16/9] w-[90%] shrink-0 pointer-events-none select-none snap-start snap-always rounded-xl bg-white sm:w-[44%] md:w-[30%]">
              <Image
                src="/screen.png"
                width={100}
                height={100}
                alt="image"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
