"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Spotlight } from "@/components/ui/Spotlight";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { RoofEngineering } from "@/components/sections/RoofEngineering";
import { MaterialsShowcase } from "@/components/sections/MaterialsShowcase";
import { ServicesMatrix } from "@/components/sections/ServicesMatrix";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { Timeline } from "@/components/sections/Timeline";
import { TestimonialsPortfolio } from "@/components/sections/TestimonialsPortfolio";
import { CoverageArea } from "@/components/sections/CoverageArea";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { InspectionModal } from "@/components/ui/InspectionModal";

export default function Home() {
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);

  const handleOpenInspectionModal = () => {
    setIsInspectionModalOpen(true);
  };

  const handleCloseInspectionModal = () => {
    setIsInspectionModalOpen(false);
  };

  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#0B0F14] text-white selection:bg-[#FF7A00] selection:text-[#0B0F14]">
        {/* Ambient Torch & Pointer Spotlight System */}
        <Spotlight />

        {/* Floating Navigation Header */}
        <Navbar onOpenInspectionModal={handleOpenInspectionModal} />

        {/* Hero Section (100vh Video Background, Line-by-Line Reveal, Dual Magnetic CTAs) */}
        <Hero onOpenInspectionModal={handleOpenInspectionModal} />

        {/* Roof Engineering & Interactive Layer Inspector */}
        <RoofEngineering />

        {/* Curated Materials Showcase */}
        <MaterialsShowcase />

        {/* Services Matrix */}
        <ServicesMatrix />

        {/* Before & After Split Visual Slider */}
        <BeforeAfterSlider />

        {/* The Summit Method Timeline */}
        <Timeline />

        {/* Private Estate Portfolio & Reviews */}
        <TestimonialsPortfolio />

        {/* Coverage Area & Zip Auditor */}
        <CoverageArea />

        {/* Contact & Direct Dispatch */}
        <ContactSection onOpenInspectionModal={handleOpenInspectionModal} />

        {/* Architectural Footer */}
        <Footer />

        {/* Global Multi-Step Inspection Calculation & Schedule Modal */}
        <InspectionModal
          isOpen={isInspectionModalOpen}
          onClose={handleCloseInspectionModal}
        />
      </main>
    </SmoothScrollProvider>
  );
}
