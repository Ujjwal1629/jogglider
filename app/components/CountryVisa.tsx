"use client";

import { useState } from "react";

// Slug maps: display label → URL slug
const countrySlugMap: Record<string, string> = {
  "Canada": "canada",
  "Australia": "australia",
  "United Kingdom": "united-kingdom",
  "United States": "united-states",
  "Germany": "germany",
  "UAE": "uae",
};

const visaSlugMap: Record<string, string> = {
  "PR Visa": "pr-visa",
  "Work Visa": "work-visa",
  "Student Visa": "student-visa",
  "Express Entry": "express-entry",
  "PNP": "pnp",
  "Business Visa": "business-visa",
  "Visit Visa": "visit-visa",
  "Digital Nomad Visa": "digital-nomad-visa",
  "Skilled Migration": "skilled-migration",
  "Partner Visa": "partner-visa",
  "Skilled Worker Visa": "skilled-worker-visa",
  "Graduate Visa": "graduate-visa",
  "Spouse Visa": "spouse-visa",
  "Innovator Visa": "innovator-visa",
  "H-1B Visa": "h1b-visa",
  "Green Card": "green-card",
  "L-1 Visa": "l1-visa",
  "O-1 Visa": "o1-visa",
  "EB-5 Investor": "eb5-investor",
  "B-1/B-2 Visit": "b1b2-visit",
  "Job Seeker Visa": "job-seeker-visa",
  "EU Blue Card": "eu-blue-card",
  "Family Reunion": "family-reunion",
  "Golden Visa": "golden-visa",
  "Freelance Permit": "freelance-permit",
};

function getVisaUrl(countryName: string, visaLabel: string): string {
  const cSlug = countrySlugMap[countryName] ?? countryName.toLowerCase().replace(/ /g, "-");
  const vSlug = visaSlugMap[visaLabel] ?? visaLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `/visa/${cSlug}/${vSlug}`;
}

const countries = [
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80&auto=format&fit=crop",
    color: "from-red-900/80",
    visas: ["PR Visa", "Work Visa", "Student Visa", "Express Entry", "PNP", "Business Visa", "Visit Visa", "Digital Nomad Visa"],
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80&auto=format&fit=crop",
    color: "from-yellow-900/80",
    visas: ["PR Visa", "Skilled Migration", "Student Visa", "Work Visa", "Partner Visa", "Business Visa", "Visit Visa"],
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80&auto=format&fit=crop",
    color: "from-blue-900/80",
    visas: ["Skilled Worker Visa", "Student Visa", "Graduate Visa", "Spouse Visa", "Business Visa", "Innovator Visa", "Visit Visa"],
  },
  {
    name: "United States",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&q=80&auto=format&fit=crop",
    color: "from-blue-900/80",
    visas: ["H-1B Visa", "Green Card", "Student Visa", "L-1 Visa", "O-1 Visa", "EB-5 Investor", "B-1/B-2 Visit"],
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80&auto=format&fit=crop",
    color: "from-slate-900/80",
    visas: ["Job Seeker Visa", "Work Visa", "Student Visa", "EU Blue Card", "Business Visa", "Family Reunion", "Visit Visa"],
  },
  {
    name: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop",
    color: "from-emerald-900/80",
    visas: ["Work Visa", "Golden Visa", "Business Visa", "Student Visa", "Freelance Permit", "Spouse Visa", "Visit Visa"],
  },
];

export default function CountryVisa() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="countries" className="bg-white py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">

          {/* Left */}
          <div className="lg:w-56 flex-shrink-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Destinations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">Popular<br />Visa</h2>
            <div className="w-10 h-1 bg-blue-600 rounded mb-4" />
            <p className="text-slate-500 text-sm leading-relaxed">
              JOGgliders offers expert guidance and support that increases your chances of visa success.
            </p>
          </div>

          {/* Country grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {countries.map((country) => {
              const isActive = activeCard === country.name;
              return (
                <div
                  key={country.name}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md cursor-pointer group"
                  onClick={() => setActiveCard(isActive ? null : country.name)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={country.image}
                    alt={country.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                  />

                  {/* Default overlay — hidden when active */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${country.color} via-black/30 to-transparent transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <p className="text-white font-bold text-sm sm:text-base tracking-wide uppercase drop-shadow">{country.name}</p>
                      <div className="w-6 h-0.5 bg-blue-400 mt-1 rounded" />
                    </div>
                  </div>

                  {/* Visa list overlay */}
                  <div className={`absolute inset-0 bg-blue-700/95 backdrop-blur-sm flex flex-col justify-center px-3 sm:px-5 py-3 sm:py-4 transition-all duration-300 ${isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"}`}>
                    <p className="text-white font-bold text-xs tracking-widest uppercase mb-2 border-b border-white/20 pb-2">{country.name}</p>
                    <ul className="space-y-1 sm:space-y-1.5 overflow-y-auto max-h-[160px] sm:max-h-none">
                      {country.visas.map((visa) => (
                        <li key={visa}>
                          <a
                            href={getVisaUrl(country.name, visa)}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 sm:gap-2 text-blue-100 hover:text-white text-[11px] sm:text-xs font-medium transition-colors w-full"
                          >
                            <svg className="w-3 h-3 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                            {visa}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
