"use client";

import React from "react";
import { PhoneCall, Calendar, ShieldCheck, Clock, Mail } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

interface ContactSectionProps {
  onOpenInspectionModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInspectionModal }) => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E5E7EB] shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/10 text-xs font-mono text-[#F97316] font-bold">
                <Clock className="w-3.5 h-3.5" />
                Free Inspection & Consultation
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
                Ready to Protect Your Home?
              </h2>

              <p className="text-base text-[#6B7280] max-w-xl leading-relaxed">
                Schedule your free roof inspection and receive expert recommendations with no obligation.
              </p>

              {/* Direct Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href="tel:18005557864"
                  className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] hover:border-[#F97316] transition-all group flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 flex items-center justify-center text-[#F97316] group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#6B7280] block uppercase">Direct Hotline</span>
                    <span className="text-sm font-bold text-[#121212] font-mono">(800) 555-SUMMIT</span>
                  </div>
                </a>

                <a
                  href="mailto:info@summitroofing.com"
                  className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] hover:border-[#F97316] transition-all group flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 flex items-center justify-center text-[#F97316] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#6B7280] block uppercase">Email Contact</span>
                    <span className="text-sm font-bold text-[#121212] font-mono">info@summitroofing.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full bg-[#F8F8F5] p-8 rounded-3xl border border-[#E5E7EB] text-center space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F97316]/15 flex items-center justify-center mx-auto text-[#F97316]">
                  <Calendar className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#121212]">Book Your Free Audit</h3>
                  <p className="text-xs text-[#6B7280] font-mono mt-1">Honest recommendations with zero obligation</p>
                </div>

                <div className="space-y-3">
                  <MagneticButton
                    onClick={onOpenInspectionModal}
                    className="w-full py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm shadow-md transition-all"
                  >
                    Schedule Inspection
                  </MagneticButton>

                  <a
                    href="tel:18005557864"
                    className="block w-full py-3.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#F97316] text-[#121212] font-semibold text-sm transition-colors"
                  >
                    Call Today
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#6B7280]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Licensed, Insured & Guarantee Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
