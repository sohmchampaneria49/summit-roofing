"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, Award, Shield } from "lucide-react";

interface Material {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  warranty: string;
  lifespan: string;
  description: string;
  highlights: string[];
}

const materials: Material[] = [
  {
    id: "architectural-shingles",
    name: "Architectural Asphalt Shingles",
    subtitle: "High-grade fiberglass laminated shingles",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    warranty: "30 to 50 Year Limited Lifetime",
    lifespan: "30+ Years",
    description: "Versatile, durable, and highly weather-resistant. Architectural shingles offer rich shadow lines and exceptional wind protection for residential homes.",
    highlights: ["Class A fire safety certification", "130 MPH wind resistance", "Rich multi-layer dimensional texture"],
  },
  {
    id: "standing-seam",
    name: "Standing Seam Metal",
    subtitle: "Architectural steel and aluminum paneling",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    warranty: "50-Year Finish Warranty",
    lifespan: "50 to 70 Years",
    description: "Sleek, modern metal roofing with concealed fasteners. Superior energy efficiency, snow shedding capability, and extreme storm durability.",
    highlights: ["Concealed mechanical fasteners", "High solar heat deflection", "Zero exposed rubber washers"],
  },
  {
    id: "composite-roofing",
    name: "Composite Roofing",
    subtitle: "Advanced polymer and recycled slate matrix",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    warranty: "50-Year Non-Prorated Guarantee",
    lifespan: "50+ Years",
    description: "Engineered synthetic tiles that mimic natural slate and cedar shake with a fraction of the structural weight and Class 4 hail resistance.",
    highlights: ["Class 4 hail impact rating", "Lightweight structural load", "Authentic hand-molded texture"],
  },
  {
    id: "cedar-shake",
    name: "Cedar Shake",
    subtitle: "Hand-split western red cedar shingles",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    warranty: "30-Year Warranty",
    lifespan: "30 to 40 Years",
    description: "Natural wooden cedar shakes providing unmatched warmth, character, and natural insulating properties for coastal and mountain estates.",
    highlights: ["Hand-split natural wood grain", "Natural thermal insulation", "Fire-retardant treated options"],
  },
  {
    id: "natural-slate",
    name: "Natural Slate",
    subtitle: "Quarried natural stone tiles",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    warranty: "100-Year Structural Guarantee",
    lifespan: "100+ Years",
    description: "The pinnacle of roofing materials. Genuine quarried slate stone offers an unbeatable lifespan, zero moisture absorption, and timeless elegance.",
    highlights: ["Hand-quarried natural stone", "100+ Year lifespan rating", "Impervious to moisture and acid rain"],
  },
];

export const MaterialsShowcase: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);

  return (
    <section id="materials" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Materials
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            Materials Reserved for <br />
            <span className="text-[#6B7280]">Architectural Excellence.</span>
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Every roofing system is built using premium materials selected for exceptional durability, weather resistance, and timeless aesthetics.
          </p>
        </div>

        {/* Material Selector Buttons */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {materials.map((item) => {
            const isSelected = selectedMaterial.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedMaterial(item)}
                className={`px-6 py-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "bg-[#F97316] text-white shadow-md shadow-[#F97316]/20 font-bold scale-105"
                    : "bg-white text-[#4B5563] hover:text-[#121212] border border-[#E5E7EB] hover:border-[#D1D5DB]"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Material Preview Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMaterial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-sm"
          >
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md group">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#F97316] font-bold uppercase tracking-wider block mb-1">
                  Material Option
                </span>
                <h3 className="font-display text-3xl font-extrabold text-[#121212]">{selectedMaterial.name}</h3>
                <p className="text-sm font-mono text-[#6B7280] mt-1">{selectedMaterial.subtitle}</p>
              </div>

              <p className="text-base text-[#4B5563] leading-relaxed">{selectedMaterial.description}</p>

              <div className="space-y-2.5 pt-2">
                {selectedMaterial.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#121212]">
                    <div className="w-5 h-5 rounded-full bg-[#F97316]/15 flex items-center justify-center border border-[#F97316]/40 shrink-0">
                      <Check className="w-3 h-3 text-[#F97316]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB]">
                  <span className="text-xs font-mono text-[#6B7280] block uppercase">Warranty</span>
                  <span className="text-base font-bold text-[#F97316] mt-0.5 block">{selectedMaterial.warranty}</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB]">
                  <span className="text-xs font-mono text-[#6B7280] block uppercase">Expected Lifespan</span>
                  <span className="text-base font-bold text-[#121212] mt-0.5 block">{selectedMaterial.lifespan}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
