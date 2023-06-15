"use client";


import {useScroll} from "framer-motion";
import Link from "next/link";
import {IconBrandGithub, IconBrandLinkedin, IconFileCv} from "@tabler/icons-react";
import Navbar from "@/components/home/Navbar";

export default function PageScroll() {
  const { scrollY} = useScroll()
  return (
    <>
      <Navbar />
    </>
  );
}