"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number; // How much of the element should be visible before animating (0-1)
}

const ScrollAnimation = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
  className = "",
  viewportAmount = 0.3,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: viewportAmount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === "fade-up" ? 50 : 0,
      x:
        animation === "slide-left"
          ? -50
          : animation === "slide-right"
            ? 50
            : 0,
      scale: animation === "zoom-in" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
