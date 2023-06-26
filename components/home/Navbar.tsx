import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";

export default function Navbar(props: { footer?: boolean }) {
  return (
    <>
      <div className="flex justify-between gap-6">
        <div className="flex justify-between gap-10">
          <h2 className="text-xl font-mono tracking-tight text-[#969696] pt-2 mb-2 ml-4">
            Jaavin Mohanakumar
          </h2>
          {props.footer ? (
            <h2 className="text-xl text-[#757575] font-mono tracking-tight pt-2 mb-2 ml-12 hidden lg:flex">
              Computer Engineering @{" "}
              <a
                href="https://www.mcmaster.ca/"
                className="hover:bg-[#969696] px-[2px] hover:no-underline hover:text-black cursor-pointer underline underline-offset-8 ml-2"
              >
                McMaster University
              </a>
            </h2>
          ) : (
            <h2 className="text-xl text-[#757575] font-mono tracking-tight pt-2 mb-2 ml-12 hidden lg:flex">
              Software Developer
            </h2>
          )}
        </div>
        <div className="flex justify-evenly gap-12 xl:gap-24 mr-16">
          <a
            href="https://www.google.com/"
            className="text-xl text-[#969696] hover:bg-[#969696] px-[2px] hover:no-underline hover:text-black font-mono cursor-pointer underline underline-offset-8 tracking-tight mt-2 mb-2 ml-2 lg:flex"
          >
            hi@jaavin.ca
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.google.com"
            className="text-xl text-[#969696] font-mono cursor-pointer tracking-tight mt-2 mb-2 ml-2 hidden lg:flex"
          >
            <IconBrandLinkedin size={32} />
          </a>
          <a
            aria-label="Github"
            href="https://www.google.com"
            className="text-xl text-[#969696] font-mono cursor-pointer tracking-tight mt-2 mb-2 ml-2 hidden lg:flex"
          >
            <IconBrandGithub size={32} />
          </a>
          <a
            aria-label="Resume"
            href="https://www.google.com/"
            className="text-xl text-[#969696] font-mono cursor-pointer tracking-tight mt-2 mb-2 ml-2 hidden md:flex"
          >
            <IconFileCv size={32} />
          </a>
        </div>
      </div>
    </>
  );
}
