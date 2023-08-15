import { motion, MotionValue, useTransform } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Content from "@/components/content/Content";
import { Gradient} from "@/components/shared/Gradient";


const gradient = new Gradient();

export default function MotionHeader(props: { value: MotionValue<number> }) {
  const MAX_GRADIENT_COLOURS = 5;


  const [height, setHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const getRandomGradientColour = () => {
    return Math.floor(Math.random() * MAX_GRADIENT_COLOURS) + 1;
  };

  const currentColorIndex = getRandomGradientColour();

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
    gradient.initGradient("#gradient-canvas");
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
            <canvas id="gradient-canvas" data-transition-in className={`absolute inset-[0.5px] opacity-100 gradient-colour-${currentColorIndex}`}></canvas>
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
