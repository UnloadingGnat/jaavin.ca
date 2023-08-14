"use client";

import { useScroll } from "framer-motion";
import Navbar from "@/components/home/Navbar";
import MotionHeader from "@/components/home/MotionHeader";

export default function PageScroll() {
  const { scrollY } = useScroll();
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <MotionHeader value={scrollY} />
        <Navbar footer={true} />
      </div>
    </>
  );
}
