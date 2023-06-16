import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";

function SkillCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <div className="flex">
        <button className="text-gray-500 mt-3 lg:hidden" onClick={scrollLeft}>
          <IconChevronLeft stroke={2} size={25} />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth border-x-2 mt-2 border-opacity-60 border-gray-700 lg:border-hidden "
        >
          <button className="mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl">
            Frontend Dev
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button className="mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl ">
            Backend Dev
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button className="mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl">
            Cloud Ops
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button className="mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl">
            Database
          </button>
          <p className="mt-2 text-lg mx-2 tracking-tight text-[#999] sm:text-3xl">
            /
          </p>
          <button className="mt-2 text-lg snap-start snap-always whitespace-nowrap hover:underline underline-offset-1 tracking-tight text-[#999] sm:text-3xl">
            System Design
          </button>
        </div>
        <button className="text-gray-500 mt-3 lg:hidden" onClick={scrollRight}>
          <IconChevronRight stroke={2} size={25} />
        </button>
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
