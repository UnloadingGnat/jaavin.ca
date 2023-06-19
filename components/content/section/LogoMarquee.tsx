import Image from "next/image";
import Marquee from "react-fast-marquee";
import { isMobile } from "react-device-detect";

export default function LogoMarquee() {
  const pauseHover = () => !isMobile;
  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-3 rounded-3xl">
        <Marquee pauseOnHover={pauseHover()} speed={110}>
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
          <Image
            src="/Ipex-logo.svg"
            alt="I Build Cool Things"
            width={100}
            height={100}
            className="w-full"
          />
        </Marquee>
      </div>
    </>
  );
}
