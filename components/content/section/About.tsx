import ExpandingArrow from "@/components/shared/expanding-arrow";

export default function About() {
  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-4 rounded-3xl">
        <div className="max-w-full pl-5 lg:px-8">
          <div className="mx-auto max-w-full lg:mx-0">
            <h2 className="text-3xl tracking-normal text-white md:text-4xl">
              About
            </h2>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="mt-16 text-3xl tracking-normal text-[#999] md:text-4xl">
                Jaavin
              </p>
              <p className="mt-0 md:mt-16 text-3xl tracking-normal text-[#54565E] md:text-4xl">
                pronounced &apos;jaah—vin&apos;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-4 rounded-3xl">
        <div className="max-w-full pl-5 lg:px-8">
          <div className="mx-auto max-w-full lg:mx-0">
            <p className="mt-2 text-lg tracking-normal text-white sm:text-3xl">
              I own a computer. Currently based in Canada. Previously lived /
              worked / studied in Toronto, Oakville, and Hamilton. Likes tech,
              swimming, volunteering, coffee, robotics, and rockets.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-4 rounded-3xl">
        <div className="max-w-full pl-5 lg:px-8">
          <div className="mx-auto max-w-full lg:mx-0">
            <p className="mt-24 text-3xl tracking-normal text-white md:text-4xl">
              Want me to build you something cool?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 justify-between">
        <a
          href="mailto:hi@jaavin.ca"
          className="bg-[#3A416D] hover:bg-[#4D5691] transition-all ease-in-out bg-opacity-80 basis-1/4 group backdrop-blur-xl py-4 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 min-h-[65px] flex flex-col justify-between"
        >
          <div className="flex flex-row gap-3">
            <h3 className="text-xl tracking-wide ml-2 lg:text-xl xl:text-2xl text-gray-300">
              hi@jaavin.ca
            </h3>
            <ExpandingArrow className="mt-1 -ml-2 h-5 w-5 text-gray-300" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jaavin/"
          className="bg-[#393A41] hover:bg-[#4C4D56] bg-opacity-80 basis-1/4 group backdrop-blur-xl py-4 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 min-h-[65px] flex flex-col justify-between"
        >
          <div className="flex flex-row gap-3">
            <h3 className="text-xl ml-2 lg:text-xl xl:text-2xl text-gray-300">
              Linkedin
            </h3>
            <ExpandingArrow className="mt-1 -ml-2 h-5 w-5 text-gray-300" />
          </div>
        </a>
        <a
          href="https://github.com/UnloadingGnat"
          className="bg-[#393A41] hover:bg-[#4C4D56] bg-opacity-80 basis-1/4 group backdrop-blur-xl py-4 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 min-h-[65px] flex flex-col justify-between"
        >
          <div className="flex flex-row gap-3">
            <h3 className="text-xl ml-2 lg:text-xl xl:text-2xl text-gray-300">
              Github
            </h3>
            <ExpandingArrow className="mt-1 -ml-2 h-5 w-5 text-gray-300" />
          </div>
        </a>
        <a
          href="/JaavinMohanakumarResume.pdf"
          className="bg-[#393A41] hover:bg-[#4C4D56] bg-opacity-80 basis-1/4 group backdrop-blur-xl py-4 rounded-full sm:mt-0 w-full pl-5 lg:mx-0 min-h-[65px] flex flex-col justify-between"
        >
          <div className="flex flex-row gap-3">
            <h3 className="text-xl ml-2 lg:text-xl xl:text-2xl text-gray-300">
              Resume
            </h3>
            <ExpandingArrow className="mt-1 -ml-2 h-5 w-5 text-gray-300" />
          </div>
        </a>
      </div>
    </>
  );
}
