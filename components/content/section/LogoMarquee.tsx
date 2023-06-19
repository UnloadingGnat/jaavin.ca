import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LogoMarquee() {
  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-3 rounded-3xl">
        <Marquee pauseOnHover={true} speed={110}>
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
