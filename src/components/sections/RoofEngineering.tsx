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
const animationRef = useRef<number | null>(null);
const animateFrames = (start: number, end: number) => {

if (animationRef.current !== null) {
  cancelAnimationFrame(animationRef.current);
}
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
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
