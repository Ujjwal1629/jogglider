"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CounsellingForm from "../components/CounsellingForm";

const destinations = [
  {
    country: "USA",
    students: "337,630 Indian students",
    tuition: "$30,000 – $50,000/year",
    flag: "🇺🇸",
    highlight: "World's top universities — MIT, Harvard, Stanford",
  },
  {
    country: "Canada",
    students: "427,000 Indian students",
    tuition: "$7,000 – $50,000/year",
    flag: "🇨🇦",
    highlight: "Post-study work permit up to 3 years (PGWP)",
  },
  {
    country: "United Kingdom",
    students: "1-year Master's programs",
    tuition: "Avg. £39,788/year",
    flag: "🇬🇧",
    highlight: "2-year Graduate Route visa after studies",
  },
  {
    country: "Germany",
    students: "Free public university education",
    tuition: "Only €300–€400/semester",
    flag: "🇩🇪",
    highlight: "18-month job seeker visa after graduation",
  },
  {
    country: "Australia",
    students: "78.5% employment within 4–6 months",
    tuition: "AUD 20,000–45,000/year",
    flag: "🇦🇺",
    highlight: "Post-Study Work visa up to 4 years",
  },
];

const courses = [
  { name: "Data Science & Analytics", range: "$21,389 – $74,540/year" },
  { name: "Computer Science & IT", range: "$15,000 – $80,000/year" },
  { name: "Business & Management", range: "$10,000 – $88,300/year" },
  { name: "Engineering & Technology", range: "$12,000 – $75,000/year" },
  { name: "Healthcare & Medicine", range: "$15,000 – $90,000/year" },
  { name: "Artificial Intelligence & ML", range: "$18,000 – $80,000/year" },
  { name: "Cybersecurity", range: "$14,000 – $70,000/year" },
];

const scholarships = [
  { name: "Fulbright-Nehru Fellowship", country: "USA" },
  { name: "Chevening Scholarships", country: "UK" },
  { name: "DAAD Scholarships", country: "Germany" },
  { name: "Erasmus Mundus Joint Masters", country: "Europe" },
  { name: "Australia Awards Scholarships", country: "Australia" },
];

const steps = [
  { step: "01", title: "Profile Evaluation", desc: "We assess your academic background, test scores, budget, and career goals to create a personalised roadmap." },
  { step: "02", title: "University Shortlisting", desc: "We recommend the best-fit universities and courses based on your profile and chances of admission." },
  { step: "03", title: "Application Preparation", desc: "End-to-end support with SOP, LOR, applications, and all documentation requirements." },
  { step: "04", title: "Test Preparation", desc: "Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and German language tests." },
  { step: "05", title: "Visa Application", desc: "Complete visa filing support, document review, and interview preparation to maximise approval chances." },
];

export default function StudyPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}

      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-amber-100 text-sm font-semibold uppercase tracking-widest mb-3">Study Abroad</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Your Dream University<br />Awaits You
              </h1>
              <p className="text-amber-100 text-base leading-relaxed mb-8">
                Study at top universities across the USA, UK, Canada, Australia, and Germany. Expert guidance from application to visa approval — JOGgliders has helped thousands of students fulfil their study abroad dream.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-amber-600 font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-amber-50 transition-colors text-sm shadow-lg"
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
              { v: "50,000+", l: "Students Helped" },
              { v: "500+", l: "Partner Universities" },
              { v: "20+", l: "Destinations" },
              { v: "98%", l: "Visa Success Rate" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-white font-bold text-xl">{s.v}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Destinations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="text-center mb-10">
            <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">Where to Study</p>
            <h2 className="text-3xl font-bold text-slate-900">Top Study Destinations</h2>
            <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">Choose from the world's most sought-after study destinations for Indian students.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((d) => (
              <div key={d.country} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{d.flag}</span>
                  <h3 className="text-slate-900 font-bold text-lg">{d.country}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {d.students}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {d.tuition}
                  </div>
                </div>
                <p className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">{d.highlight}</p>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-amber-500 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <p className="text-white font-bold text-lg mb-2">Not sure where to study?</p>
              <p className="text-amber-100 text-sm mb-4">Talk to our experts and find the right destination for you.</p>
              <button onClick={() => setShowForm(true)} className="bg-white text-amber-600 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-colors">
                Free Counselling
              </button>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">What to Study</p>
              <h2 className="text-3xl font-bold text-slate-900">Most In-Demand Courses</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((c) => (
                <div key={c.name} className="bg-white rounded-xl border border-slate-100 px-5 py-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    <span className="text-slate-800 font-semibold text-sm">{c.name}</span>
                  </div>
                  <span className="text-xs text-slate-400 ml-3 text-right">{c.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scholarships */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">Funding Your Education</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Scholarships Available</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Don't let finances stop your dream. There are numerous scholarships available for Indian students. Our counsellors help you identify and apply for the right scholarships based on your profile.
              </p>
              <div className="space-y-3">
                {scholarships.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-slate-800 font-semibold text-sm">{s.name}</span>
                      <span className="text-slate-400 text-xs ml-2">({s.country})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 sm:p-8 text-center">
              <p className="text-3xl font-bold text-amber-600 mb-2">₹20 – 66 Lakh</p>
              <p className="text-slate-600 text-sm mb-4">Average annual cost of studying abroad (tuition + living)</p>
              <p className="text-slate-500 text-xs mb-6">Costs vary by country and lifestyle. Our counsellors help you plan your budget and find maximum funding.</p>
              <button onClick={() => setShowForm(true)} className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl text-sm transition-colors">
                Plan My Budget — Free
              </button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-slate-900 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">How It Works</p>
              <h2 className="text-3xl font-bold text-white">Our 5-Step Process</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{s.step}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-500 py-6 sm:py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to study abroad?</h2>
            <p className="text-amber-100 text-sm mb-7">Get a free profile evaluation and personalised university recommendations from our experts.</p>
            <button onClick={() => setShowForm(true)} className="bg-white text-amber-600 font-bold px-6 sm:px-10 py-3 sm:py-3.5 rounded-xl hover:bg-amber-50 transition-colors text-sm shadow-lg">
              Get Free Counselling →
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
