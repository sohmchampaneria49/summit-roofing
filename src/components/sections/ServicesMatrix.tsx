"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Shield, AlertTriangle, Search, Home, Zap } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    id: "roof-repair",
    title: "Roof Repair",
    category: "Precision Maintenance",
    description: "Fast, reliable fixes for missing shingles, persistent roof leaks, flashing failures, and minor structural wear.",
    features: ["Leak diagnosis and sealing", "Shingle & tile replacement", "Flashing & ridge cap repair"],
    icon: Wrench,
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    category: "Complete System Installation",
    description: "Full tear-off and complete roof replacement engineered to withstand severe weather for decades to come.",
    features: ["Complete tear-off & deck audit", "Multi-layer weatherproofing", "50-year warranty options"],
    icon: Home,
  },
  {
    id: "storm-restoration",
    title: "Storm Damage Restoration",
    category: "Emergency & Insurance",
    description: "Comprehensive restoration following hail, heavy wind, ice dams, or falling debris, backed by insurance support.",
    features: ["Hail & wind impact recovery", "Insurance claim documentation", "Structural emergency stabilization"],
    icon: AlertTriangle,
  },
  {
    id: "roof-inspection",
    title: "Roof Inspection",
    category: "Comprehensive Audit",
    description: "Thorough multi-point roof evaluation with detailed digital photographic reports and structural health readouts.",
    features: ["Thermal moisture detection", "LiDAR drone measurements", "Honest structural health report"],
    icon: Search,
  },
  {
    id: "gutter-installation",
    title: "Gutter Installation",
    category: "Water Drainage Systems",
    description: "Custom seamless gutters and downspouts designed to channel heavy rainfall away from your foundation.",
    features: ["Seamless copper & aluminum", "Heavy-flow downspouts", "Gutter guard leaf protection"],
    icon: Shield,
  },
  {
    id: "emergency-roofing",
    title: "Emergency Roofing",
    category: "24/7 Rapid Response",
    description: "Round-the-clock emergency dispatch team equipped for immediate tarping and leak stabilization during severe storms.",
    features: ["24/7 Rapid dispatch team", "Immediate emergency tarping", "Rapid leak mitigation"],
    icon: Zap,
  },
];

export const ServicesMatrix: React.FC = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <Zap className="w-3.5 h-3.5" />
            Core Roofing Services
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            Craftsmanship Engineered <br />
            <span className="text-[#6B7280]">Without Compromise.</span>
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Whether repairing storm damage or installing an entirely new roofing system, every project receives the same attention to detail and commitment to quality.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="light-card rounded-3xl p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#F97316] group-hover:bg-[#F97316] transition-colors">
                      <Icon className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-[#6B7280]">0{idx + 1}</span>
                  </div>

                  <span className="text-xs font-mono text-[#F97316] uppercase font-bold tracking-wider block mb-1">
                    {service.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#121212] mb-3 group-hover:text-[#F97316] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E5E7EB]">
                  {service.features.map((feat, i) => (
                    <div key={i} className="text-xs text-[#4B5563] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
