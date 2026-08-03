"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const Spotlight: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Ambient Radial Glow */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] opacity-25 hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          width: 450,
          height: 450,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.05) 60%, transparent 80%)",
        }}
      />

      {/* Pointer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#F97316] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          boxShadow: "0 0 10px rgba(249, 115, 22, 0.6)",
        }}
      />
    </div>
  );
};
