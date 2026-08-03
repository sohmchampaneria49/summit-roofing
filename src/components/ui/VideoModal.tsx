"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX, ShieldCheck, Award } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isMuted, setIsMuted] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl glass-panel border border-white/10 bg-[#0B0F14]/90 shadow-2xl"
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-[#121820]/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF7A00]/20 flex items-center justify-center border border-[#FF7A00]/40">
                  <Award className="w-4 h-4 text-[#FF7A00]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight">
                    The Summit Story: Master Craftsmen & Architectural Integrity
                  </h3>
                  <p className="text-xs text-zinc-400">Cinematic 4K Architectural Documentary</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Toggle Sound"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black">
              {/* High Definition Ambient Canvas Video Reel */}
              <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&rel=0&modestbranding=1`}
                title="Summit Roofing Story Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Footer Specifications */}
            <div className="p-4 md:p-6 bg-[#0B0F14] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7A00]" />
                <span>50-Year Non-Prorated Structural Guarantee Certified</span>
              </div>
              <p>Filmed on location at private Aspen & Malibu luxury estates.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
