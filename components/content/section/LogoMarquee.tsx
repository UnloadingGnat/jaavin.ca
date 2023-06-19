import Image from "next/image";

export default function LogoMarquee() {
  return (
    <>
      <div className="bg-[#222329] bg-opacity-80 backdrop-blur-xl py-3 rounded-3xl">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />{" "}
          </div>

          <div className="animate-marquee whitespace-nowrap flex">
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
            <Image
              src="/motionheader.svg"
              alt="I Build Cool Things"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
