"use client";

import React from "react";
import { Shield, ArrowUp, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0F14] text-zinc-400 py-16 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#F97316]" />
              </div>
              <span className="font-display text-2xl font-extrabold text-white tracking-tight">
                Summit <span className="text-[#F97316]">Roofing</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Premium residential and commercial roofing solutions engineered for durability, performance, and timeless design.
            </p>
            <div className="text-xs font-mono text-zinc-500">
              © {new Date().getFullYear()} Summit Roofing Inc. All Rights Reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block">
              Roofing Solutions
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#engineering" className="hover:text-white transition-colors">Roof Engineering</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Architectural Shingles</a></li>
              <li><a href="#materials" className="hover:text-white transition-colors">Standing Seam Metal</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Roof Repair & Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Storm Damage Restoration</a></li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block">
              Service Regions
            </span>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#F97316]" /> Aspen & Snowmass, CO</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#F97316]" /> Malibu & Palisades, CA</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#F97316]" /> Greenwich & New Canaan, CT</li>
            </ul>
          </div>

          {/* Certification */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block">
              Quality Certification
            </span>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-[11px] font-mono text-zinc-400">
              <div className="text-white font-bold">50-YEAR STRUCTURAL WARRANTY</div>
              <div>Licensed & Insured Contractors</div>
              <div>Class A Fire & Wind Certified</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>Built with Next.js 15, Canvas Sequence, GSAP & Tailwind CSS.</div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors border border-white/10"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#F97316]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
