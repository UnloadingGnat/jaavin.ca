import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin, IconFileCv} from "@tabler/icons-react";


export default function Navbar() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-between gap-6">
          <div className="flex justify-between gap-16">
            <Link href="/" className="text-xl font-mono tracking-tight text-[#868892] pt-2 mb-2 ml-4">
              Jaavin Mohanakumar
            </Link>
            <h2 className="text-xl text-[#54565E] font-mono tracking-tight pt-2 mb-2 ml-12 hidden lg:flex">
              Software Developer
            </h2>
          </div>
          <div className="flex justify-evenly gap-12 xl:gap-24 mr-16">
            <a className="text-xl text-[#868892] hover:bg-[#868892] hover:no-underline hover:text-black font-mono cursor-pointer underline underline-offset-4 tracking-tight mt-2 mb-2 ml-2 lg:flex">
              hi@jaavin.ca
            </a>
            <a className="text-xl text-[#868892] font-mono cursor-pointer tracking-tight mt-2 mb-2 ml-2 hidden lg:flex">
              <IconBrandLinkedin size={32} />
            </a>
            <a className="text-xl text-[#868892] font-mono cursor-pointer tracking-tight mt-2 mb-2 ml-2 hidden lg:flex">
              <IconBrandGithub size={32} />
            </a>
            <a className="text-xl text-[#868892] font-mono cursor-pointer tracking-tight mt-2 mb-2 ml-2 hidden md:flex">
              <IconFileCv size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );

}