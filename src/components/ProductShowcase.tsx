"use client"

import Image from "next/image";
import appScreen from "../assets/images/app-screen.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-4xl sm:text-5xl font-bold tracking-tighter">Easy-to-navigate experience</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70 mt-5">Easy-to-navigate experience designed to enhance your LinkedIn Week journey</p>
        </div>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image src={appScreen} alt="The product screenshort" className="mt-14 mx-auto" ref={appImageRef} />
        </motion.div>
      </div>
    </div>
  )
}