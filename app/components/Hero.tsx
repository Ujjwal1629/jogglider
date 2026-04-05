"use client";

import { useEffect, useState } from "react";
import CounsellingForm from "./CounsellingForm";

const pathways = [
  { label: "Study", href: "/study", bg: "bg-amber-400 hover:bg-amber-500", text: "text-white" },
  { label: "Migrate", href: "/migrate", bg: "bg-violet-600 hover:bg-violet-700", text: "text-white" },
  { label: "Work", href: "/work", bg: "bg-cyan-500 hover:bg-cyan-600", text: "text-white" },
  { label: "Visit", href: "/visit", bg: "bg-green-500 hover:bg-green-600", text: "text-white" },
];

const slides = [
  {
    country: "Canada",
    city: "Toronto, Ontario",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80&auto=format&fit=crop",
  },
  {
    country: "Australia",
    city: "Sydney, NSW",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80&auto=format&fit=crop",
  },
  {
    country: "United Kingdom",
    city: "London, England",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80&auto=format&fit=crop",
  },
  {
    country: "United States",
    city: "New York City",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-[60px] sm:pt-[108px]">
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
      <div className="flex flex-col md:flex-row min-h-[480px] md:min-h-[520px]">

        {/* Left — sliding country images */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] md:min-h-[520px] overflow-hidden bg-slate-900">

          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={slide.country}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.country}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />

          {/* Country label */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs sm:text-sm font-semibold">{slides[current].country}</span>
              <span className="text-white/60 text-xs hidden sm:inline">· {slides[current].city}</span>
            </div>
          </div>

          {/* Headline */}
          <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 z-20 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 drop-shadow-lg">
              Your Journey to a<br />
              <span className="text-cyan-300">{slides[current].country}</span><br />
              Starts Here
            </h1>
            <p className="text-white/80 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xs">
              Expert immigration & visa consultancy trusted by 50,000+ applicants.
            </p>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-14 sm:bottom-16 right-4 sm:right-6 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* WhatsApp chat bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm px-4 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
            </svg>
            <span className="text-white text-xs sm:text-sm font-medium">Have Questions? Chat with us</span>
            <span className="text-green-300 font-bold text-xs sm:text-sm ml-auto sm:ml-0">+91-9910931384</span>
          </div>
        </div>

        {/* Right — Action panel */}
        <div className="w-full md:w-[380px] lg:w-[420px] bg-white flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12 border-l border-slate-100 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-6 sm:mb-8">
            What can we do<br />for you today?
          </h2>

          {/* 2x2 pathway buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6 sm:mb-8">
            {pathways.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className={`${p.bg} ${p.text} rounded-xl py-4 sm:py-5 text-center text-base sm:text-lg font-bold tracking-wide transition-colors shadow-sm`}
              >
                {p.label}
              </a>
            ))}
          </div>

          {/* Free counselling */}
          <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-slate-100">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-slate-600 text-sm font-medium">Don&apos;t know what to do?</p>
              <button onClick={() => setShowForm(true)} className="text-blue-600 font-bold text-sm hover:underline">
                Get free Counselling →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
