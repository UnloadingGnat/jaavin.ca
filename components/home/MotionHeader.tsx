import { motion, MotionValue, useTransform } from "framer-motion";
import { Suspense } from "react";
import Image from "next/image";

export default function MotionHeader(props: { value: MotionValue<number> }) {
  const useTransformY = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], [0, 1.07], {
      clamp: false,
    });
  };

  return (
    <>
      <motion.div
        className="relative w-screen -z-50"
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
      ;
    </>
  );
}
