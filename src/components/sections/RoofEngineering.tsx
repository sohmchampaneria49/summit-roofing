"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ShieldCheck, Cpu, Wind, Thermometer, Sparkles, ChevronRight } from "lucide-react";

interface LayerDetail {
  id: number;

  startFrame: number;
  endFrame: number;

  name: string;
  category: string;
  description: string;

  specs: string;
  windRating: string;
  lifespan: string;
  efficiency: string;

  icon?: React.ReactNode;
  color?: string;

  stats?: {
    label: string;
    value: string;
  }[];
}

const engineeringLayers: LayerDetail[] = [
  {
    
    id: 1,
    startFrame: 0,
    endFrame: 59,
    name: "Architectural Shingles",
    category: "Primary Defense Layer",
    specs: "Multi-Layered Laminated Fiberglass & Heavy Asphalt Matrix",
    windRating: "Up to 130 MPH",
    lifespan: "30 - 50 Years",
    efficiency: "Class A Fire Rating",
    description: "High-density architectural shingles engineered for dimensional depth, maximum wind uplift protection, and long-term weather resistance.",
  },
  {
    id: 2,
    startFrame: 60,
endFrame: 110,
    name: "Waterproof Underlayment",
    category: "Secondary Protection",
    specs: "High-Temp Synthetic Polymer Slip-Resistant Barrier",
    windRating: "Tear-Resistant Grid",
    lifespan: "50 Years",
    efficiency: "100% Water Resistant",
    description: "Advanced synthetic underlayment providing a continuous secondary water barrier beneath shingles to prevent moisture penetration.",
  },
  {
    id: 3,
    startFrame: 110,
endFrame: 130,
    name: "Ice & Water Shield",
    category: "Critical Junction Membrane",
    specs: "Self-Adhered Rubberized Asphalt Waterproof Membrane",
    windRating: "Severe Weather Rated",
    lifespan: "Lifetime Bond",
    efficiency: "Self-Sealing Fastener Seals",
    description: "Seals around fasteners to protect roof valleys, eaves, and eaves troughs from ice dams and wind-driven rain infiltration.",
  },
 
  {
    id: 4,
    startFrame: 140,
endFrame: 299,
    name: "Precision Metal Flashing",
    category: "Custom Edge Detailing",
    specs: "Heavy-Gauge Galvanized Steel / Architectural Solid Copper",
    windRating: "Precision Formed",
    lifespan: "50+ Years",
    efficiency: "Watertight Seal",
    description: "Custom-formed metal flashing installed along wall intersections, chimneys, and roof edges to redirect water flow safely.",
  },
];

export const RoofEngineering: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerDetail>(engineeringLayers[0]);
const [currentFrame, setCurrentFrame] = useState(0);
useEffect(() => {

  const images: HTMLImageElement[] = [];

  for (let i = 1; i <= 300; i++) {

    const img = new Image();

    img.src = `/frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

    images.push(img);

  }

  imageCache.current = images;

}, []);

const imageCache = useRef<HTMLImageElement[]>([]);
const animationRef = useRef<number>();

const animateFrames = (start: number, end: number) => {

  cancelAnimationFrame(animationRef.current!);

  let frame = currentFrame;

  const direction = frame < end ? 1 : -1;

  const animate = () => {

    frame += direction;

    setCurrentFrame(frame);

    if (
      (direction > 0 && frame < end) ||
      (direction < 0 && frame > end)
    ) {

      animationRef.current = requestAnimationFrame(animate);

    }

  };

  animationRef.current = requestAnimationFrame(animate);

};
  return (
    <section id="engineering" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <Cpu className="w-3.5 h-3.5" />
            Structural Engineering
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            Roof Engineering. <br />
            <span className="text-[#6B7280]">Deconstructed Layer by Layer.</span>
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed pt-2">
            Every Summit Roofing system is built using carefully engineered layers that work together to improve ventilation, prevent moisture intrusion, and provide long-term structural protection.
          </p>
        </div>

        {/* Interactive Layer Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Layer Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {engineeringLayers.map((layer) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => {
  setActiveLayer(layer);

  animateFrames(layer.startFrame, layer.endFrame);
}}
                  className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-white border-2 border-[#F97316] shadow-lg shadow-[#F97316]/10"
                      : "bg-white/60 border border-[#E5E7EB] hover:border-[#D1D5DB] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                        isSelected ? "bg-[#F97316] text-white" : "bg-[#F8F8F5] text-[#6B7280] group-hover:text-[#121212]"
                      }`}
                    >
                      0{layer.id}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#6B7280] block">{layer.category}</span>
                      <h4
                        className={`text-base font-bold transition-colors ${
                          isSelected ? "text-[#121212]" : "text-[#4B5563] group-hover:text-[#121212]"
                        }`}
                      >
                        {layer.name}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? "text-[#F97316] translate-x-1" : "text-gray-300 group-hover:text-gray-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Spec Display Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E5E7EB] shadow-md relative overflow-hidden">
              {/* Interactive Layer Visual */}
              <img
    src={`/frames/ezgif-frame-${String(currentFrame + 1).padStart(3, "0")}.jpg`}
    className="w-full h-full object-cover rounded-2xl"
    draggable={false}
/>

              {/* Dynamic Layer Specs */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLayer.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                    <div>
                      <span className="text-xs font-mono text-[#F97316] uppercase font-bold tracking-wider">
                        {activeLayer.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#121212] mt-1">
                        {activeLayer.name}
                      </h3>
                      <p className="text-xs text-[#F97316] font-mono mt-2">
  Frames: {activeLayer.startFrame} - {activeLayer.endFrame}
</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#F97316]/10 text-xs font-mono text-[#F97316] font-bold">
                      Layer 0{activeLayer.id} Selected
                    </div>
                  </div>

                  <p className="text-base text-[#4B5563] leading-relaxed">{activeLayer.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB]">
                      <div className="flex items-center gap-2 text-[#6B7280] text-xs mb-1">
                        <Wind className="w-3.5 h-3.5 text-[#F97316]" /> Wind Resistance
                      </div>
                      <span className="font-display font-extrabold text-[#121212] text-base">
                        {activeLayer.windRating}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB]">
                      <div className="flex items-center gap-2 text-[#6B7280] text-xs mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" /> Expected Lifespan
                      </div>
                      <span className="font-display font-extrabold text-[#121212] text-base">
                        {activeLayer.lifespan}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB]">
                      <div className="flex items-center gap-2 text-[#6B7280] text-xs mb-1">
                        <Thermometer className="w-3.5 h-3.5 text-[#F97316]" /> Performance
                      </div>
                      <span className="font-display font-extrabold text-[#121212] text-base">
                        {activeLayer.efficiency}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
