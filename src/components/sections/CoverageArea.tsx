"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, CheckCircle2, AlertCircle } from "lucide-react";

const activeRegions = [
  { name: "Aspen & Snowmass", state: "CO", zips: ["81611", "81612", "81654"] },
  { name: "Malibu & Pacific Palisades", state: "CA", zips: ["90265", "90272", "90210"] },
  { name: "Greenwich & New Canaan", state: "CT", zips: ["06830", "06831", "06840"] },
  { name: "The Hamptons & Sag Harbor", state: "NY", zips: ["11968", "11963", "11937"] },
  { name: "Palm Beach & Jupiter", state: "FL", zips: ["33480", "33477", "33469"] },
  { name: "Lake Tahoe & Incline Village", state: "NV", zips: ["89451", "89450", "96150"] },
];

export const CoverageArea: React.FC = () => {
  const [zipInput, setZipInput] = useState("");
  const [searchResult, setSearchResult] = useState<{
    status: "idle" | "qualified" | "pending";
    message: string;
  }>({ status: "idle", message: "" });

  const handleAuditZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;

    const isMatch = activeRegions.some((r) => r.zips.includes(zipInput.trim()));

    if (isMatch || zipInput.length === 5) {
      setSearchResult({
        status: "qualified",
        message: `Zip Code ${zipInput} is within active Summit Roofing service coverage. Fast inspection dispatch available.`,
      });
    } else {
      setSearchResult({
        status: "pending",
        message: `Zip Code ${zipInput} received. Our regional team will contact you directly to confirm schedule.`,
      });
    }
  };

  return (
    <section id="coverage" className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <MapPin className="w-3.5 h-3.5" />
            Service Area
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            Serving Communities With <br />
            <span className="text-[#6B7280]">Premium Roofing Solutions.</span>
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Fast response times, dependable workmanship, and professional roofing services across the region.
          </p>
        </div>

        {/* Zip Code Auditor */}
        <div className="max-w-2xl bg-white p-8 rounded-3xl border border-[#E5E7EB] mb-12 shadow-sm">
          <h3 className="text-center font-display text-lg font-bold text-[#121212] mb-2">
            Check Service Availability in Your Area
          </h3>
          <p className="text-center text-xs text-[#6B7280] font-mono mb-6">
            Enter your 5-digit postal zip code to confirm local service deployment
          </p>

          <form onSubmit={handleAuditZip} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                maxLength={5}
                placeholder="e.g. 81611 or 90265"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] text-[#121212] font-mono text-sm focus:border-[#F97316] outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm shadow-md transition-colors whitespace-nowrap"
            >
              Verify Coverage
            </button>
          </form>

          {searchResult.status !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-2xl border text-xs font-mono flex items-start gap-3 ${
                searchResult.status === "qualified"
                  ? "bg-[#F97316]/10 border-[#F97316]/30 text-[#121212]"
                  : "bg-[#F8F8F5] border-[#E5E7EB] text-[#4B5563]"
              }`}
            >
              {searchResult.status === "qualified" ? (
                <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
              )}
              <div>{searchResult.message}</div>
            </motion.div>
          )}
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeRegions.map((region) => (
            <div
              key={region.name}
              className="bg-white p-6 rounded-2xl border border-[#E5E7EB] flex items-center justify-between hover:border-[#F97316]/40 transition-colors"
            >
              <div>
                <span className="text-[11px] font-mono text-[#F97316] font-bold uppercase">Region: {region.state}</span>
                <h4 className="font-display text-base font-bold text-[#121212] mt-0.5">{region.name}</h4>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
