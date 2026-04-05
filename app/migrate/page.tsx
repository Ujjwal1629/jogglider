"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CounsellingForm from "../components/CounsellingForm";

const destinations = [
  {
    country: "Canada",
    flag: "🇨🇦",
    points: "67 minimum points",
    processing: "6–8 months",
    cost: "CAD 4,500",
    programs: ["Express Entry", "Provincial Nominee Program (PNP)", "Family Sponsorship", "Business Immigration"],
    benefits: ["World-class public healthcare", "Family sponsorship rights", "Work & study anywhere", "Pathway to citizenship"],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    points: "65 minimum points",
    processing: "6–8 months",
    cost: "AUD 4,700",
    programs: ["Skilled Independent (Subclass 189)", "Skilled Nominated (Subclass 190)", "Skilled Work Regional (Subclass 491)", "Employer Sponsored"],
    benefits: ["Medicare healthcare access", "Home purchase eligibility", "Student loans available", "5-year visa validity"],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    points: "EU Blue Card eligible",
    processing: "1–3 months",
    cost: "€100–€300",
    programs: ["EU Blue Card", "Job Seeker Visa", "Skilled Worker Visa", "Family Reunion"],
    benefits: ["Zero income tax zones available", "Strong social security", "Gateway to all EU countries", "Free education for children"],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    points: "70 points required",
    processing: "3–8 weeks",
    cost: "GBP 1,408",
    programs: ["Skilled Worker Visa", "Global Talent Visa", "Innovator Founder Visa", "Family Visa"],
    benefits: ["NHS healthcare access", "World-class education system", "Multicultural environment", "Pathway to ILR & citizenship"],
  },
];

const prCategories = [
  {
    title: "Skilled Immigration",
    desc: "Points-based assessment for professionals under age 46. The most popular pathway to permanent residency worldwide.",
    icon: "🎓",
  },
  {
    title: "Employer-Based",
    desc: "Full-time employment offer from a foreign employer. Very popular in Canada, Australia, UK, and Germany.",
    icon: "💼",
  },
  {
    title: "State / Province Sponsorship",
    desc: "Get nominated by a state or province based on your occupation. Converts to PR and eventually citizenship.",
    icon: "🏛️",
  },
  {
    title: "Family Migration",
    desc: "Spouse, children, and in some cases parents can be sponsored by a citizen or PR holder.",
    icon: "👨‍👩‍👧",
  },
  {
    title: "Investment Migration",
    desc: "Gain PR through financial investment ranging from $50,000 to $500,000+ depending on the country.",
    icon: "📈",
  },
];

const steps = [
  { step: "01", title: "Enquiry & Consultation", desc: "Initial consultation where we understand your goals, background, and preferred destination." },
  { step: "02", title: "Eligibility Assessment", desc: "We evaluate your profile against the points system and immigration requirements of your target country." },
  { step: "03", title: "Documentation", desc: "Complete preparation of all required documents — education, work experience, language tests, police clearance." },
  { step: "04", title: "Application Filing", desc: "We prepare and submit your immigration application with precision to maximise your chances of approval." },
  { step: "05", title: "Post-Approval Support", desc: "Guidance on landing requirements, registration, healthcare, banking, and settling in your new country." },
];

export default function MigratePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}

      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-gradient-to-br from-violet-700 to-indigo-800 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-violet-200 text-sm font-semibold uppercase tracking-widest mb-3">Permanent Residency</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Build Your Future<br />Abroad — Permanently
              </h1>
              <p className="text-violet-200 text-base leading-relaxed mb-8">
                Migrate to Canada, Australia, Germany, or the UK with expert PR guidance. JOGgliders handles every step of your immigration journey — from eligibility assessment to your visa stamp.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-white text-violet-700 font-bold px-8 py-3.5 rounded-xl hover:bg-violet-50 transition-colors text-sm shadow-lg"
                >
                  Get Free Counselling →
                </button>
                <div className="flex items-center gap-2 text-violet-200 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  98% Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { v: "281M+", l: "Global Migrants Worldwide" },
              { v: "18M+", l: "Indians Living Abroad" },
              { v: "6–8 Months", l: "Avg. PR Processing" },
              { v: "Since 2016", l: "Trusted in Faridabad" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-white font-bold text-xl">{s.v}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What is PR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-2">Understanding PR</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Permanent Residency?</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Permanent Residency (PR) allows you to live, work, and study indefinitely in another country while retaining your Indian citizenship. As a PR holder you enjoy most rights of a citizen — without giving up your Indian passport.
                </p>
                <p>
                  PR holders gain access to public healthcare, can sponsor family members, start a business, purchase property, and after meeting residency requirements, apply for citizenship.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Live Indefinitely", desc: "Right to reside in the country permanently" },
                { title: "Work Anywhere", desc: "Work for any employer without restrictions" },
                { title: "Healthcare & Benefits", desc: "Full access to public healthcare and social security" },
                { title: "Path to Citizenship", desc: "Become a citizen after meeting residency requirements" },
              ].map((b) => (
                <div key={b.title} className="bg-violet-50 rounded-xl p-3 sm:p-4 border border-violet-100">
                  <h4 className="text-slate-900 font-bold text-sm mb-1">{b.title}</h4>
                  <p className="text-slate-500 text-xs">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PR Categories */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-2">Pathways</p>
              <h2 className="text-3xl font-bold text-slate-900">Types of PR Pathways</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {prCategories.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="text-slate-900 font-bold text-sm mb-2">{c.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="text-center mb-10">
            <p className="text-violet-600 text-xs font-bold uppercase tracking-widest mb-2">Top Destinations</p>
            <h2 className="text-3xl font-bold text-slate-900">Where Can You Migrate?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {destinations.map((d) => (
              <div key={d.country} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{d.flag}</span>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">{d.country}</h3>
                    <div className="flex gap-3 mt-1 flex-wrap">
                      <span className="text-xs text-violet-600 font-semibold bg-violet-50 px-2 py-0.5 rounded-full">{d.points}</span>
                      <span className="text-xs text-slate-500">{d.processing}</span>
                      <span className="text-xs text-slate-500">Approx. {d.cost}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Programs</p>
                    <ul className="space-y-1">
                      {d.programs.map((p) => (
                        <li key={p} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Benefits</p>
                    <ul className="space-y-1">
                      {d.benefits.map((b) => (
                        <li key={b} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-slate-900 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-2">How It Works</p>
              <h2 className="text-3xl font-bold text-white">Your Immigration Journey</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{s.step}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5 sm:p-8">
              <h3 className="text-slate-900 font-bold text-lg mb-4">General Eligibility Requirements</h3>
              <ul className="space-y-3">
                {[
                  "3+ years of relevant work experience",
                  "Bachelor's degree or equivalent qualification",
                  "English language proficiency (IELTS/PTE/TOEFL)",
                  "Valid passport with minimum 1 year validity",
                  "Police Clearance Certificate (PCC)",
                  "Medical examination by approved physician",
                  "Proof of funds / financial statements",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-slate-900 font-bold text-lg mb-2">Not sure if you qualify?</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Every profile is unique. Our immigration consultants will assess your specific situation and recommend the best pathway for you — completely free of charge.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Free profile evaluation", "Personalised pathway recommendation", "Honest, no-pressure advice"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => setShowForm(true)} className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                Get Free Counselling →
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-violet-700 py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Start your migration journey today</h2>
            <p className="text-violet-200 text-sm mb-7">Talk to a certified immigration consultant — free, no obligation.</p>
            <button onClick={() => setShowForm(true)} className="bg-white text-violet-700 font-bold px-10 py-3.5 rounded-xl hover:bg-violet-50 transition-colors text-sm shadow-lg">
              Get Free Counselling →
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
