"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Sparkles, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "../ui/MagneticButton";
import { VideoModal } from "../ui/VideoModal";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  onOpenInspectionModal?: () => void;
}

const heroScenes = [
  {
    start: 0,
    end: 59,
    title: "Built to Protect.",
    accent: "Crafted to Last.",
    subtitle:
      "Premium roofing solutions engineered for modern homes."
  },
  {
    start: 60,
    end: 119,
    title: "Every Layer Matters.",
    accent: "Protection Starts Below.",
    subtitle:
      "Waterproof barriers, underlayment and precision installation."
  },
  {
    start: 120,
    end: 179,
    title: "Precision Installation.",
    accent: "Built for Every Storm.",
    subtitle:
      "Premium architectural shingles installed with expert craftsmanship."
  },
  {
    start: 180,
    end: 299,
    title: "Protection That Lasts.",
    accent: "Ready for Decades.",
    subtitle:
      "A roof engineered to protect your home for years to come."
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenInspectionModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<string[]>([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const currentScene = heroScenes.find(
  (scene) =>
    currentFrameIndex >= scene.start &&
    currentFrameIndex <= scene.end
);

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameObjRef = useRef({ frame: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  // 1. Dynamic Frame Detection
  useEffect(() => {
    async function loadFramePaths() {
      try {
        const res = await fetch("/api/frames");
        if (res.ok) {
          const data = await res.json();
          if (data.frames && data.frames.length > 0) {
            setFrames(data.frames);
            return;
          }
        }
      } catch (err) {
        console.warn("API route failed, using fallback detection:", err);
      }
      
      const fallbackFrames = Array.from({ length: 300 }, (_, i) => {
        const num = String(i + 1).padStart(3, "0");
        return `/frames/ezgif-frame-${num}.jpg`;
      });
      setFrames(fallbackFrames);
    }

    loadFramePaths();
  }, []);

  // 2. Preload frames
  useEffect(() => {
    if (frames.length === 0) return;

    imagesRef.current = new Array(frames.length).fill(null);
    let loadedCount = 0;
    const initialBatchSize = Math.min(15, frames.length);

    for (let i = 0; i < initialBatchSize; i++) {
      const img = new Image();
      img.src = frames[i];
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        if (loadedCount >= initialBatchSize) {
          setIsLoaded(true);
          renderCanvas(0);
        }
      };
    }

    for (let i = initialBatchSize; i < frames.length; i++) {
      const img = new Image();
      img.src = frames[i];
      img.onload = () => {
        imagesRef.current[i] = img;
      };
    }
  }, [frames]);

  // 3. Canvas Render Engine
  const renderCanvas = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const total = imagesRef.current.length;
      if (total === 0) return;

      const targetIdx = Math.max(0, Math.min(total - 1, Math.floor(index)));
      
      let img = imagesRef.current[targetIdx];
      if (!img) {
        for (let offset = 1; offset < total; offset++) {
          if (targetIdx - offset >= 0 && imagesRef.current[targetIdx - offset]) {
            img = imagesRef.current[targetIdx - offset];
            break;
          }
          if (targetIdx + offset < total && imagesRef.current[targetIdx + offset]) {
            img = imagesRef.current[targetIdx + offset];
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = width / height;
      let renderW = width;
      let renderH = height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderH = width / imgRatio;
        offsetY = (height - renderH) / 2;
      } else {
        renderW = height * imgRatio;
        offsetX = (width - renderW) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
      ctx.restore();
    },
    []
  );

  useEffect(() => {
    const handleResize = () => {
      renderCanvas(frameObjRef.current.frame);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderCanvas]);

  // 4. GSAP ScrollTrigger
  useEffect(() => {
    if (!isLoaded || frames.length === 0 || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(frameObjRef.current, {
        frame: frames.length - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 0.5,
          onUpdate: () => {
            const currentF = Math.round(frameObjRef.current.frame);
            setCurrentFrameIndex(currentF);

            if (animFrameIdRef.current) {
              cancelAnimationFrame(animFrameIdRef.current);
            }
            animFrameIdRef.current = requestAnimationFrame(() => {
              renderCanvas(currentF);
            });
          },
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isLoaded, frames, renderCanvas]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#0B0F14] overflow-hidden">
      {/* Apple-Style HTML5 Canvas */}
     <canvas
    ref={canvasRef}
    className="absolute inset-0 z-0 block w-full h-full object-cover pointer-events-none"
/>

      {/* Dark Overlay for Hero */}
<div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B0F14]/35 via-[#0B0F14]/15 to-transparent pointer-events-none" />      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,_transparent_0%,_#0B0F14_100%)] opacity-70 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-24 pb-12 text-center pointer-events-auto">
        
        {/* Top Badge */}
     
        {/* Center Content */}
<div className="flex flex-col items-center my-auto max-w-3xl w-full mx-auto">          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
          {currentScene?.title}
<br />
<span className="text-gradient-copper inline-block">
  {currentScene?.accent}
</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-10 text-balance"
          >
            Premium residential and commercial roofing solutions engineered for durability, performance, and timeless design. From emergency repairs to complete roof replacements, every project is built with precision and backed by lasting craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
          >
            <MagneticButton
              onClick={onOpenInspectionModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Free Inspection
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-colors"
            >
              <span className="flex items-center justify-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#F97316]/20 flex items-center justify-center border border-[#F97316]/50">
                  <Play className="w-3 h-3 text-[#F97316] fill-[#F97316] ml-0.5" />
                </div>
                Watch Our Story
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-3 pt-6 border-t border-white/10">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-zinc-400 text-xs font-mono tracking-wider cursor-pointer hover:text-white transition-colors"
            onClick={() => {
              document.getElementById("engineering")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Scroll to explore roof engineering</span>
            <ChevronDown className="w-4 h-4 text-[#F97316]" />
          </motion.div>
        </div>
      </div>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
};
