"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sliders, Sparkles, ArrowLeftRight } from "lucide-react";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      if (percent < 0) percent = 0;
      if (percent > 100) percent = 100;
      setSliderPosition(percent);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <Sliders className="w-3.5 h-3.5" />
            Visual Comparison
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            Witness the Transformation.
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Drag the slider to compare the difference premium craftsmanship makes.
          </p>
        </div>

        {/* Interactive Image Drag Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] max-h-[620px] rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl select-none cursor-ew-resize bg-white"
        >
          {/* AFTER IMAGE */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
              alt="After: Summit Premium Roofing Replacement"
              className="w-full h-full object-cover filter brightness-105"
            />
            <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E7EB] text-xs font-mono font-bold text-[#121212] flex items-center gap-2 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              AFTER: Summit Roof System Replacement
            </div>
          </div>

          {/* BEFORE IMAGE */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
              alt="Before: Damaged Shingle Roof"
              className="w-full h-full object-cover filter brightness-75 grayscale shrink-0"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
            />
            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white shadow-sm">
              BEFORE: Weathered Compromised Shingles
            </div>
          </div>

          {/* SLIDER HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#F97316] cursor-ew-resize z-20 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#F97316] text-[#121212] flex items-center justify-center shadow-lg">
              <ArrowLeftRight className="w-4 h-4 text-[#F97316]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
