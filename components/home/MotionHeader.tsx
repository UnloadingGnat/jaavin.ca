import { motion, MotionValue, useTransform } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Content from "@/components/content/Content";
import { Gradient } from "@/components/shared/Gradient";
import {isMobile} from "react-device-detect";

const gradient = new Gradient();

export default function MotionHeader({
  scrollValue,
}: {
  scrollValue: MotionValue<number>;
}) {
  const MAX_GRADIENT_COLOURS = 5;

  const [height, setHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const [currentColorIndex, setCurrentColorIndex] = useState(4);

  const cycleGradientColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex % MAX_GRADIENT_COLOURS) + 1);
    gradient.initGradient("#gradient-canvas");
  };

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

  useEffect(() => {
    if (!isMobile) {
      gradient.initGradient("#gradient-canvas");
      console.log("init gradient")
    }
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
        className="fixed w-screen -z-50 select-none"
        style={{ y: useTransformY(scrollValue) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Suspense fallback={null}>
          <div className="relative">
            <div className="absolute lg:hidden inset-2 animate-gradient opacity-100"></div>
            <canvas
              id="gradient-canvas"
              data-transition-in
              className={`absolute hidden lg:block opacity-100 top-1 overflow-hidden lg:inset-y-0.5 gradient-colour-${currentColorIndex}`}
            ></canvas>
            <div className="relative">
              <div>
                <Image
                  src="/motionheader.svg"
                  alt="I Build Cool Things"
                  width={500}
                  height={500}
                  priority={true}
                  onLoadingComplete={updateHeight}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Suspense>
      </motion.div>
      {/* TOP SPACER */}
      <div
        onClick={cycleGradientColor}
        className="bg-[#000] bg-opacity-0 select-none cursor-pointer"
        style={topSpacerStyles}
      ></div>
      <Content cycleFunc={cycleGradientColor} height={height} />
    </>
  );
}
