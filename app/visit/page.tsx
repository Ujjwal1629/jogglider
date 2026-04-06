"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CounsellingForm from "../components/CounsellingForm";

const visaTypes = [
  {
    country: "United States",
    flag: "🇺🇸",
    fee: "USD 160",
    processing: "3–5 weeks",
    type: "B-1/B-2 Visa",
    validity: "Up to 10 years, 180 days/visit",
    requirements: ["Valid passport", "DS-160 form", "Proof of ties to India", "Bank statements", "Invitation letter (if applicable)"],
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    fee: "CAD 100",
    processing: "Several days to weeks",
    type: "Temporary Resident Visa",
    validity: "Up to 10 years or passport validity",
    requirements: ["Valid passport", "IMM 5257 form", "Proof of funds", "Travel itinerary", "Letter of invitation (if applicable)"],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    fee: "GBP 89",
    processing: "Within 3 weeks",
    type: "Standard Visitor Visa",
    validity: "6 months per visit",
    requirements: ["Valid passport", "Online application", "Bank statements (6 months)", "Proof of accommodation", "Return flight booking"],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    fee: "AUD 135",
    processing: "Up to 20 days",
    type: "Visitor Visa (Subclass 600)",
    validity: "3, 6 or 12 months",
    requirements: ["Valid passport", "ImmiAccount application", "Proof of funds", "Health insurance", "Travel itinerary"],
  },
  {
    country: "Schengen Area",
    flag: "🇪🇺",
    fee: "EUR 80",
    processing: "15 working days",
    type: "Schengen Visa (Type C)",
    validity: "Up to 90 days in 180-day period",
    requirements: ["Valid passport", "Travel insurance (€30,000 min)", "Bank statements", "Hotel bookings", "Flight itinerary"],
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    fee: "AED 250–500",
    processing: "3–5 working days",
    type: "Tourist / Visit Visa",
    validity: "30 or 90 days",
    requirements: ["Valid passport", "Passport-size photos", "Bank statements", "Hotel booking", "Return flight ticket"],
  },
];

const schengenCountries = [
  "Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland",
  "France", "Germany", "Greece", "Hungary", "Iceland", "Italy",
  "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands",
  "Norway", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
];

const documents = [
  "Completed visa application form",
  "Valid passport (minimum 6 months validity beyond travel dates)",
  "Recent passport-size photographs",
  "Travel insurance covering the entire trip",
  "Proof of sufficient funds (bank statements)",
  "Confirmed accommodation / hotel booking",
  "Return flight booking confirmation",
  "Invitation letter (if visiting family or friends)",
  "Marriage / birth certificates (if applicable)",
  "Employment letter / leave approval",
];

export default function VisitPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}

      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-green-100 text-sm font-semibold uppercase tracking-widest mb-3">Visit & Tourist Visa</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Explore the World<br />Without the Stress
              </h1>
              <p className="text-green-100 text-base leading-relaxed mb-8">
                Planning to visit family, travel for tourism, or attend a business meeting abroad? JOGgliders handles your visit visa documentation and application so you can focus on your trip.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-green-700 font-bold px-8 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm shadow-lg"
              >
                Get Free Counselling →
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { v: "26+", l: "Schengen Countries" },
              { v: "10 Yrs", l: "US Visa Validity" },
              { v: "3 Weeks", l: "Avg. Processing Time" },
              { v: "98%", l: "Approval Success Rate" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-white font-bold text-xl">{s.v}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What is a Visit Visa */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div>
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Understanding Visit Visas</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Visitor vs Tourist Visa</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  A <strong className="text-slate-800">Visitor Visa</strong> is for temporary travel purposes — visiting family, attending events, or medical treatment. A <strong className="text-slate-800">Tourist Visa</strong> is specifically for leisure, sightseeing, and recreational travel.
                </p>
                <p>
                  Both are temporary travel documents with limited validity. Holders cannot engage in employment, formal education, or business activities abroad.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "✈️", title: "Tourism & Sightseeing", desc: "Explore new destinations for leisure and recreation" },
                { icon: "👨‍👩‍👧", title: "Family Visits", desc: "Visit relatives and loved ones living abroad" },
                { icon: "💼", title: "Business Meetings", desc: "Attend conferences, meetings, and trade events" },
                { icon: "🏥", title: "Medical Treatment", desc: "Travel for specialised medical care abroad" },
              ].map((b) => (
                <div key={b.title} className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">{b.title}</h4>
                  <p className="text-slate-500 text-xs">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa by Country */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Destination Guide</p>
              <h2 className="text-3xl font-bold text-slate-900">Visa Details by Country</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visaTypes.map((v) => (
                <div key={v.country} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{v.flag}</span>
                    <div>
                      <h3 className="text-slate-900 font-bold">{v.country}</h3>
                      <span className="text-xs text-green-600 font-semibold">{v.type}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-slate-50 rounded-lg p-2">
                      <p className="text-slate-400 font-semibold mb-0.5">Fee</p>
                      <p className="text-slate-800 font-bold">{v.fee}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2">
                      <p className="text-slate-400 font-semibold mb-0.5">Processing</p>
                      <p className="text-slate-800 font-bold">{v.processing}</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-lg font-semibold mb-3">Validity: {v.validity}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Key Requirements</p>
                  <ul className="space-y-1">
                    {v.requirements.map((r) => (
                      <li key={r} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 mt-1" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents & Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            <div>
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Checklist</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Documents Required</h2>
              <div className="space-y-2.5">
                {documents.map((d) => (
                  <div key={d} className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-slate-700">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Application Steps</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Apply</h2>
              </div>
              {[
                { step: "01", title: "Locate the Embassy or Consulate", desc: "Identify the correct embassy or consulate of your destination country in India." },
                { step: "02", title: "Submit Documentation", desc: "Gather and submit all required documents as per the country's specific checklist." },
                { step: "03", title: "Pay Visa Fees", desc: "Pay the applicable visa fee — fees vary by country and visa type." },
                { step: "04", title: "Attend Visa Interview", desc: "Some countries require an in-person interview at the consulate. We prepare you fully." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{s.step}</div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-slate-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
              <button onClick={() => setShowForm(true)} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-sm mt-4">
                Get Free Counselling →
              </button>
            </div>
          </div>
        </section>

        {/* Schengen */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-2">Europe</p>
              <h2 className="text-3xl font-bold text-slate-900">Schengen Visa — 26 Countries in One</h2>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
                One Schengen visa gives you access to 26 European countries. Apply at the embassy of your primary destination or first point of entry.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {schengenCountries.map((c) => (
                <span key={c} className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-600 py-6 sm:py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Planning a trip abroad?</h2>
            <p className="text-green-100 text-sm mb-7">Let our visa experts handle the paperwork so you can focus on your journey.</p>
            <button onClick={() => setShowForm(true)} className="bg-white text-green-700 font-bold px-10 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-sm shadow-lg">
              Get Free Counselling →
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
