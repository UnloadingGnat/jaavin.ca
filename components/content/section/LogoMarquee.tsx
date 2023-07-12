import Image from "next/image";
import Marquee from "react-fast-marquee";
import { isMobile } from "react-device-detect";

export default function LogoMarquee() {
  const pauseHover = () => !isMobile;
  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-3 rounded-3xl">
        <div className="h-[100px]">
          <Marquee pauseOnHover={pauseHover()} speed={150}>
            <Image
              src="/Ipex-logo.svg"
              alt="Ipex Logo"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/logo1325.svg"
              alt="Team 1325 Logo"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/maclogofinal.svg"
              alt="McMaster Logo"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/macrocket-logo.svg"
              alt="MacRocketry Logo"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/macailogo.svg"
              alt="macAI Logo"
              width={100}
              height={100}
              className="w-full"
            />
          </Marquee>
        </div>
      </div>
    </>
  );
}
