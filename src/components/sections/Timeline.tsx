"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileText, Wrench, ShieldCheck, Sparkles } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Comprehensive Roof Inspection",
    description: "Every project begins with a complete roof assessment to evaluate deck health, ventilation, and moisture barrier integrity.",
    icon: Search,
  },
  {
    number: "02",
    title: "Transparent Proposal",
    description: "Detailed recommendations and honest pricing with complete material breakdowns and clear project timelines.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Expert Installation",
    description: "Installed by experienced roofing professionals adhering strictly to architectural specifications and manufacturer guidelines.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Final Quality Inspection",
    description: "Every project is carefully inspected before completion to ensure flawless craftsmanship and issue long-term warranty protection.",
    icon: ShieldCheck,
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Process
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            The Summit Method. <br />
            <span className="text-[#6B7280]">From Inspection to Lifetime Protection.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="light-card rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#F97316]">{item.number}</span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#F97316]" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#121212] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
