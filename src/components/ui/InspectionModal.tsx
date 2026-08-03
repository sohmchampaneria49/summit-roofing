"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import confetti from "canvas-confetti";

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Residential Home");
  const [roofMaterial, setRoofMaterial] = useState("Architectural Shingles");
  const [squareFootage, setSquareFootage] = useState("2,500 - 4,000 sq ft");
  const [zipCode, setZipCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F97316", "#121212", "#FB923C"],
      });
    }
  };

  const resetModal = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 border border-[#E5E7EB] shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F97316]/15 flex items-center justify-center border border-[#F97316]/30">
                <Calendar className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#121212] text-lg sm:text-xl">
                  Schedule Free Inspection
                </h3>
                <p className="text-xs text-[#6B7280] font-mono">Expert Roof Assessment & Estimate</p>
              </div>
            </div>
            <button
              onClick={resetModal}
              className="p-2 rounded-full bg-[#F8F8F5] hover:bg-gray-200 text-[#6B7280] hover:text-[#121212] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-2">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? "Property Details" : step === 2 ? "Material Preference" : "Contact Information"}</span>
              </div>

              <div className="w-full bg-[#F8F8F5] h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#F97316] h-full transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Residential Home", "Commercial Building", "Multi-Family Residence", "Historical Property"].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPropertyType(type)}
                          className={`p-3 rounded-2xl border text-left text-xs font-semibold transition-all ${
                            propertyType === type
                              ? "border-[#F97316] bg-[#F97316]/10 text-[#121212]"
                              : "border-[#E5E7EB] bg-[#F8F8F5] text-[#6B7280] hover:border-gray-300"
                          }`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>

                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] pt-2">
                    Estimated Square Footage
                  </label>
                  <select
                    value={squareFootage}
                    onChange={(e) => setSquareFootage(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] text-[#121212] text-sm focus:border-[#F97316] outline-none"
                  >
                    <option value="Under 2,500 sq ft">Under 2,500 sq ft</option>
                    <option value="2,500 - 4,000 sq ft">2,500 - 4,000 sq ft</option>
                    <option value="4,000 - 6,000 sq ft">4,000 - 6,000 sq ft</option>
                    <option value="6,000+ sq ft">6,000+ sq ft</option>
                  </select>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280]">
                    Material Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Architectural Shingles",
                      "Standing Seam Metal",
                      "Composite Roofing",
                      "Cedar Shake",
                      "Natural Slate",
                      "Undecided / Need Advice",
                    ].map((material) => (
                      <button
                        key={material}
                        type="button"
                        onClick={() => setRoofMaterial(material)}
                        className={`p-3 rounded-2xl border text-left text-xs font-semibold transition-all ${
                          roofMaterial === material
                            ? "border-[#F97316] bg-[#F97316]/10 text-[#121212]"
                            : "border-[#E5E7EB] bg-[#F8F8F5] text-[#6B7280] hover:border-gray-300"
                        }`}
                      >
                        {material}
                      </button>
                    ))}
                  </div>

                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] pt-2">
                    Property Postal Zip Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 81611 or 90265"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] text-[#121212] text-sm focus:border-[#F97316] outline-none"
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] text-[#121212] text-sm focus:border-[#F97316] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] text-[#121212] text-sm focus:border-[#F97316] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6B7280] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-2xl bg-[#F8F8F5] border border-[#E5E7EB] text-[#121212] text-sm focus:border-[#F97316] outline-none"
                    />
                  </div>
                </motion.div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl bg-[#F8F8F5] text-[#121212] text-xs font-semibold flex items-center gap-1 hover:bg-gray-200"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-[#F97316] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#EA580C] transition-colors shadow-md"
                >
                  {step === 3 ? "Confirm & Schedule Inspection" : "Continue"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F97316]/15 border border-[#F97316] text-[#F97316] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#121212]">Inspection Request Confirmed!</h4>
              <p className="text-sm text-[#4B5563] max-w-sm mx-auto">
                Thank you, <span className="text-[#F97316] font-semibold">{name || "Client"}</span>. We have received your request for <span className="text-[#121212] font-medium">{roofMaterial}</span> inspection.
              </p>
              <button
                onClick={resetModal}
                className="mt-4 px-8 py-3 rounded-full bg-[#F97316] text-white font-bold text-sm shadow-md"
              >
                Return to Site
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
