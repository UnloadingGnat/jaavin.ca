import { motion, MotionValue, useTransform } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Content from "@/components/content/Content";

export default function MotionHeader(props: { value: MotionValue<number> }) {
  const [height, setHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const updateHeight = () => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight(); // Initial height update
    window.addEventListener("resize", updateHeight); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", updateHeight); // Cleanup event listener on unmount
    };
  }, []);

  const useTransformY = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], [0, 0.075], {
      clamp: false,
    });
  };

  const topSpacerStyles = {
    paddingTop: `${height}px`, // Adjust the top spacing based on the height state
  };

  return (
    <>
      <motion.div
        ref={elementRef}
        className="fixed w-screen -z-50"
        style={{ y: useTransformY(props.value) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Suspense fallback={null}>
          <div className="relative">
            <div className="absolute inset-2 animate-gradient opacity-100"></div>
            <div className="relative">
              <div>
                <Image
                  src="/motionheader.svg"
                  alt="I Build Cool Things"
                  width={500}
                  height={500}
                  priority={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Suspense>
      </motion.div>
      {/* TOP SPACER */}
      <div className="bg-[#000] bg-opacity-0" style={topSpacerStyles}></div>
      <Content height={height} />
    </>
  );
}
