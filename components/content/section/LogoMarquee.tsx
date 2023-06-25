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
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/logo1325.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/maclogofinal.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/macrocket-logo.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/macblocklogo.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/macailogo.svg"
              alt="I Build Cool Things"
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
