import { IconCircleFilled } from "@tabler/icons-react";

export default function SelectedWork() {
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
      <div className="flex flex-col lg:flex-row gap-2 justify-between">
        <div className="bg-[#222329] bg-opacity-80 basis-1/4  backdrop-blur-xl py-4 rounded-3xl sm:mt-0 w-full max-w-2xl pl-5 lg:mx-0 min-h-[150px] flex flex-col justify-between">
          <h2 className="text-3xl text-white sm:text-4xl">IPEX</h2>
          <div className="flex flex-col">
            <p className="text-xl lg:text-2xl text-gray-300">
              Software Developer Intern
            </p>
            <p className="text-lg text-[#757575]">May 2023—August 2023</p>
          </div>
        </div>
        <div className="bg-[#222329] bg-opacity-80 basis-1/2 backdrop-blur-xl py-4 rounded-3xl sm:mt-0 w-full pl-5">
          <div className="text-lg text-[#999] flex flex-col gap-1">
            <div className="flex flex-row items-start gap-3 group">
              <IconCircleFilled className="w-4 mt-0.5 group-hover:text-white " />
              Implemented file transfer service for business-critical process
              reducing downtime from 14% to 2%.
            </div>
            <div className="flex flex-row items-start gap-3 group">
              <IconCircleFilled className="w-4 mt-0.5 group-hover:text-white " />
              Reduced latency and missed promises on API Gateway by 50% by
              implementing a caching layer.
            </div>
            <div className="flex flex-row items-start gap-3 group">
              <IconCircleFilled className="w-4 mt-0.5 group-hover:text-white " />
              Planned migration from Microsoft SQL server to MongoDB for key
              business service.
            </div>
          </div>
        </div>
        <div className="bg-[#222329] bg-opacity-80 basis-1/4 backdrop-blur-xl py-4 rounded-3xl sm:mt-0 w-full pl-5">
          <div className="text-lg text-[#999] flex flex-col gap-1">
            <div className="flex flex-row items-start gap-3 group">
              <IconCircleFilled className="w-4 mt-0.5 group-hover:text-white " />
              C# .NET Core
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
