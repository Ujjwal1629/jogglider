"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import { getVisa } from "@/app/lib/visaData";
import CounsellingForm from "@/app/components/CounsellingForm";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const accentMap: Record<string, { bg: string; text: string; light: string; border: string; badge: string; badgeText: string }> = {
  red:     { bg: "bg-red-600",     text: "text-red-600",     light: "bg-red-50",     border: "border-red-200",  badge: "bg-red-100",     badgeText: "text-red-700"    },
  yellow:  { bg: "bg-yellow-500",  text: "text-yellow-600",  light: "bg-yellow-50",  border: "border-yellow-200", badge: "bg-yellow-100", badgeText: "text-yellow-700" },
  blue:    { bg: "bg-blue-600",    text: "text-blue-600",    light: "bg-blue-50",    border: "border-blue-200",  badge: "bg-blue-100",    badgeText: "text-blue-700"   },
  indigo:  { bg: "bg-indigo-600",  text: "text-indigo-600",  light: "bg-indigo-50",  border: "border-indigo-200", badge: "bg-indigo-100", badgeText: "text-indigo-700" },
  slate:   { bg: "bg-slate-700",   text: "text-slate-700",   light: "bg-slate-50",   border: "border-slate-200",  badge: "bg-slate-100",   badgeText: "text-slate-700"  },
  emerald: { bg: "bg-emerald-600", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100", badgeText: "text-emerald-700" },
};

export default function VisaPage({ params }: { params: Promise<{ country: string; visa: string }> }) {
  const { country, visa } = use(params);
  const detail = getVisa(country, visa);
  const [showForm, setShowForm] = useState(false);

  if (!detail) notFound();

  const accent = accentMap[detail.accentColor] ?? accentMap.blue;

  return (
    <>
      <Navbar />
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}

      {/* ── Hero Band ── */}
      <div className="relative min-h-[340px] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={detail.image}
          alt={detail.country}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-10 pt-20 sm:pt-36">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-xs mb-4 flex-wrap">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <a href="/#countries" className="hover:text-white transition-colors">Destinations</a>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/80">{detail.country}</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white">{detail.title}</span>
          </div>

          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${accent.badge} ${accent.badgeText} mb-3`}>
            {detail.country}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            {detail.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
            {detail.overview}
          </p>
        </div>
      </div>

      {/* ── Quick Stats Bar ── */}
      <div className={`${accent.bg} text-white`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-0.5">Processing Time</p>
            <p className="font-bold text-sm">{detail.processing}</p>
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-0.5">Approximate Fee</p>
            <p className="font-bold text-sm">{detail.fee}</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center">
            <button
              onClick={() => setShowForm(true)}
              className="w-full md:w-auto bg-white text-slate-900 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-white/90 transition-colors shadow-md"
            >
              Get Free Counselling →
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

          {/* Left — main sections */}
          <div className="lg:col-span-2 space-y-10">

            {/* Eligibility */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl ${accent.light} flex items-center justify-center`}>
                  <svg className={`w-5 h-5 ${accent.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-slate-900 font-bold text-lg">Eligibility Criteria</h2>
              </div>
              <ul className="space-y-3">
                {detail.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-0.5 w-5 h-5 rounded-full ${accent.light} ${accent.text} flex items-center justify-center flex-shrink-0 text-xs font-bold`}>
                      {i + 1}
                    </span>
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl ${accent.light} flex items-center justify-center`}>
                  <svg className={`w-5 h-5 ${accent.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-slate-900 font-bold text-lg">Required Documents</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {detail.documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <svg className={`w-4 h-4 ${accent.text} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-step process */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl ${accent.light} flex items-center justify-center`}>
                  <svg className={`w-5 h-5 ${accent.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-slate-900 font-bold text-lg">Application Process</h2>
              </div>
              <ol className="relative border-l-2 border-slate-100 ml-3 space-y-6">
                {detail.steps.map((step, i) => (
                  <li key={i} className="pl-6 relative">
                    <span className={`absolute -left-3.5 top-0 w-7 h-7 rounded-full ${accent.bg} text-white text-xs font-bold flex items-center justify-center shadow-sm`}>
                      {i + 1}
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Benefits */}
            <div className={`rounded-2xl p-8 ${accent.light} border ${accent.border}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                  <svg className={`w-5 h-5 ${accent.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-slate-900 font-bold text-lg">Key Benefits</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {detail.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm">
                    <svg className={`w-4 h-4 ${accent.text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">

            {/* CTA Card */}
            <div className={`${accent.bg} rounded-2xl p-6 text-white shadow-lg`}>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Need Expert Help?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Our certified immigration consultants will guide you through every step of your {detail.title} application.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl text-sm hover:bg-white/90 transition-colors"
              >
                Get Free Counselling →
              </button>
              <a
                href="https://wa.me/919910931384"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full flex items-center justify-center gap-2 border border-white/30 text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-900 text-sm mb-4">Contact Our Experts</h3>
              <div className="space-y-3">
                <a href="tel:+919910931384" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">+91-9910931384</span>
                </a>
                <a href="tel:+918920409936" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">+91-8920409936</span>
                </a>
                <a href="mailto:admin@joggliders.com" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">admin@joggliders.com</span>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-900 text-sm mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Monday – Saturday</span>
                  <span className="font-semibold text-slate-800">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-slate-500">Closed</span>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500`}>
                Badhkal Mor Metro Station, Sector 19, Faridabad, Haryana
              </div>
            </div>

            {/* Back Link */}
            <a
              href="/#countries"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All Destinations
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
