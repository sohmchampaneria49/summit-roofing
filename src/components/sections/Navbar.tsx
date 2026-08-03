"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X, ArrowUpRight, Calendar, PhoneCall } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

interface NavbarProps {
  onOpenInspectionModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInspectionModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Engineering", href: "#engineering" },
    { name: "Materials", href: "#materials" },
    { name: "Services", href: "#services" },
    { name: "Transformation", href: "#before-after" },
    { name: "Process", href: "#process" },
    { name: "Coverage", href: "#coverage" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm text-[#121212]"
            : "py-6 bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                  scrolled
                    ? "bg-[#F8F8F5] border-[#E5E7EB] group-hover:border-[#F97316]"
                    : "bg-white/10 border-white/15 group-hover:border-[#F97316]"
                }`}
              >
                <Shield className="w-5 h-5 text-[#F97316]" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-display text-xl font-extrabold tracking-tight transition-colors ${
                    scrolled ? "text-[#121212]" : "text-white"
                  }`}
                >
                  Summit <span className="text-[#F97316]">Roofing</span>
                </span>
                <span
                  className={`text-[10px] tracking-wider uppercase font-mono transition-colors -mt-1 ${
                    scrolled ? "text-[#6B7280]" : "text-zinc-400"
                  }`}
                >
                  Architectural Precision
                </span>
              </div>
            </a>

            {/* Desktop Center Status Badge */}
            <div
              className={`hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-md text-xs font-mono transition-colors ${
                scrolled
                  ? "bg-[#F8F8F5] border-[#E5E7EB] text-[#6B7280]"
                  : "bg-white/10 border-white/15 text-zinc-300"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-[#F97316] animate-pulse" />
              <span>Priority Schedule Active</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 group ${
                    scrolled ? "text-[#4B5563] hover:text-[#121212]" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <MagneticButton
                onClick={onOpenInspectionModal}
                className="px-5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Inspection
                </span>
              </MagneticButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition-colors ${
                scrolled
                  ? "bg-white border-[#E5E7EB] text-[#121212]"
                  : "bg-white/10 border-white/15 text-white"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#F8F8F5]/98 backdrop-blur-2xl pt-28 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-2xl font-display font-bold text-[#121212] hover:text-[#F97316] flex items-center justify-between border-b border-[#E5E7EB] pb-3"
                  >
                    {link.name}
                    <ArrowUpRight className="w-5 h-5 text-[#6B7280]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#E5E7EB]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInspectionModal?.();
                }}
                className="w-full py-4 rounded-xl bg-[#F97316] text-white font-bold text-base flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-5 h-5" />
                Book Free Inspection
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
