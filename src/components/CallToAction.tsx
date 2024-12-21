"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      className="bg-black text-white py-[72px] sm:py-24 text-center overflow-x-clip"
      ref={containerRef}
      aria-labelledby="cta-title"
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src="/images/helix2.png" 
            alt="Decorative helix shape"
            className="absolute top-6 left-[calc(100%+36px)]"
            width={100}
            height={100}
            loading="lazy"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src="/images/emojistar.png" 
            alt="Decorative star emoji"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
            width={70}
            height={70}
            loading="lazy"
          />
        </motion.div>
        <h2 id="cta-title" className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
        LinkedIn Week is designed to track your growth, set meaningful goals, and celebrate your accomplishments.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
            aria-label="Enter your email address"
          />
          <button type="submit" className="bg-white text-black h-12 rounded-lg px-5">
          Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
