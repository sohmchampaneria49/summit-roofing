"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin, Building } from "lucide-react";

interface TestimonialItem {
  id: string;
  client: string;
  location: string;
  roofType: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: "review-1",
    client: "Robert Vance",
    location: "Aspen, CO",
    roofType: "Natural Slate Restoration",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    quote: "Summit Roofing replaced our entire roof after severe storm damage. Their crew was prompt, professional, and kept our property spotless throughout the installation.",
    rating: 5,
  },
  {
    id: "review-2",
    client: "Sarah Jenkins",
    location: "Malibu, CA",
    roofType: "Standing Seam Metal",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    quote: "The quality of work and level of communication from Summit Roofing surpassed all expectations. Honest pricing and outstanding craftsmanship.",
    rating: 5,
  },
  {
    id: "review-3",
    client: "David Sterling",
    location: "Greenwich, CT",
    roofType: "Architectural Asphalt Shingle",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    quote: "From the initial inspection to the final walk-through, Summit treated our home with incredible care. I highly recommend them to any homeowner.",
    rating: 5,
  },
];

export const TestimonialsPortfolio: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-28 sm:py-36 bg-[#F8F8F5] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-mono text-[#F97316]">
            <Building className="w-3.5 h-3.5" />
            Client Reviews
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight">
            Trusted by Homeowners <br />
            <span className="text-[#6B7280]">Who Expect More.</span>
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            Clients choose Summit Roofing because quality, communication, and craftsmanship remain our highest priorities.
          </p>
        </div>

        {/* Featured Review Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-sm">
          {/* Image */}
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md">
            <img
              src={testimonials[activeIdx].image}
              alt={testimonials[activeIdx].client}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-xl">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                {testimonials[activeIdx].location}
              </span>
              <span className="text-[#F97316] font-bold">{testimonials[activeIdx].roofType}</span>
            </div>
          </div>

          {/* Quote Details */}
          <div className="lg:col-span-6 space-y-6">
            <Quote className="w-10 h-10 text-[#F97316]/30" />

            <div className="flex items-center gap-1 text-[#F97316]">
              {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F97316]" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-[#121212] font-medium leading-relaxed italic">
              "{testimonials[activeIdx].quote}"
            </blockquote>

            <div className="pt-2">
              <h4 className="font-bold text-[#121212] text-base">{testimonials[activeIdx].client}</h4>
              <p className="text-xs text-[#6B7280] font-mono">Homeowner • Verified Client</p>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2 pt-4 border-t border-[#E5E7EB]">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIdx === idx ? "bg-[#F97316] w-8" : "bg-[#E5E7EB] w-2.5 hover:bg-gray-400"
                  }`}
                  aria-label={`View review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
