"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CounsellingForm from "../components/CounsellingForm";

const destinations = [
  {
    country: "Canada",
    flag: "🇨🇦",
    vacancies: "1+ million jobs",
    salary: "Avg. CAD 72,000/year",
    processing: "1–27 weeks",
    fee: "CAD 155",
    topJobs: ["Engineering – CAD 125,541", "Healthcare – CAD 126,495", "IT – CAD 121,688"],
    visas: ["LMIA Work Permit", "Intra-Company Transfer", "Post-Grad Work Permit", "Open Work Permit"],
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    vacancies: "800,000+ jobs",
    salary: "Avg. AUD 84,831/year",
    processing: "2–4 months",
    fee: "AUD 2,645–5,755",
    topJobs: ["IT – AUD 81,000–149,023", "Engineering – AUD 87,000–180,000", "Healthcare – AUD 73,000–160,000"],
    visas: ["Temporary Skill Shortage (TSS)", "Employer Nomination (ENS)", "Skilled Work Regional", "Working Holiday"],
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    vacancies: "880,000+ jobs",
    salary: "Avg. €51,000/year",
    processing: "1–3 months",
    fee: "€56–100",
    topJobs: ["Engineering – €58,380", "IT – €43,396", "Transportation – €35,652"],
    visas: ["EU Blue Card", "Skilled Worker Visa", "Job Seeker Visa", "ICT Permit"],
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    vacancies: "13 million+ jobs",
    salary: "Avg. £682/week",
    processing: "3 weeks–3 months",
    fee: "GBP 610–1,408",
    topJobs: ["Engineering – £43,511", "IT – £35,000", "Nursing – £39,371"],
    visas: ["Skilled Worker Visa", "Health & Care Worker", "Global Talent Visa", "Graduate Visa"],
  },
  {
    country: "United States",
    flag: "🇺🇸",
    vacancies: "12 million+ jobs",
    salary: "IT Avg. $130,040/year",
    processing: "3–5 months",
    fee: "USD 460",
    topJobs: ["Healthcare – $135,687", "IT – $130,040", "Engineering – $100,937"],
    visas: ["H-1B Skilled Worker", "L-1 Intracompany", "O-1 Extraordinary Ability", "EB Green Card"],
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    vacancies: "418,500+ jobs/year",
    salary: "Avg. 191,807 AED/year",
    processing: "~15 days",
    fee: "AED 300–600",
    topJobs: ["Finance & Banking", "Technology", "Hospitality & Tourism"],
    visas: ["Employment Visa", "Golden Visa", "Freelance Permit", "Business Visa"],
  },
];

const benefits = [
  { title: "5x Income Potential", desc: "Working abroad can multiply your earnings significantly compared to equivalent roles in India." },
  { title: "World-Class Healthcare", desc: "Access top-tier healthcare systems in countries like Canada, UK, Germany, and Australia." },
  { title: "Powerful Passport", desc: "Long-term residency opens doors to stronger travel documents and visa-free access." },
  { title: "Career Growth", desc: "Expand your professional network globally and fast-track your career in international companies." },
  { title: "PR Pathway", desc: "Many work visas convert to Permanent Residency, giving you long-term security abroad." },
  { title: "Family Benefits", desc: "Bring your spouse and children as dependents, giving them access to education and healthcare." },
];

export default function WorkPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}

      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-white">

        {/* Hero */}
        <div className="bg-gradient-to-br from-cyan-600 to-teal-700 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-cyan-100 text-sm font-semibold uppercase tracking-widest mb-3">Work Abroad</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Find Your Career<br />Across the World
              </h1>
              <p className="text-cyan-100 text-base leading-relaxed mb-8">
                Work in Canada, Australia, UK, Germany, UAE, and more. JOGgliders provides end-to-end work visa assistance — from job search support to visa filing — helping you land your dream international career.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-cyan-700 font-bold px-8 py-3.5 rounded-xl hover:bg-cyan-50 transition-colors text-sm shadow-lg"
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
              { v: "26M+", l: "Jobs Available Globally" },
              { v: "200K+", l: "Indian Work Visas (UK, 2024)" },
              { v: "5.4M+", l: "Indians in the US" },
              { v: "98%", l: "Visa Success Rate" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-white font-bold text-xl">{s.v}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Permit vs Work Visa */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
            <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-7">
              <h3 className="text-slate-900 font-bold text-lg mb-3">Work Permit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Permission to work in a specific job or for a specific employer, issued by the labour or immigration authority of the destination country. Typically required before or alongside a work visa.</p>
            </div>
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-7">
              <h3 className="text-slate-900 font-bold text-lg mb-3">Work Visa</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Entry clearance that allows you to live and work abroad legally, issued by the embassy or consulate of the destination country. Some visas are temporary (2–4 years), others lead directly to PR.</p>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2">Where to Work</p>
              <h2 className="text-3xl font-bold text-slate-900">Top Work Destinations</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((d) => (
                <div key={d.country} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{d.flag}</span>
                    <h3 className="text-slate-900 font-bold text-lg">{d.country}</h3>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {[
                      { label: "Vacancies", value: d.vacancies },
                      { label: "Avg. Salary", value: d.salary },
                      { label: "Processing", value: d.processing },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-xs">
                        <span className="text-slate-400 font-semibold">{item.label}</span>
                        <span className="text-slate-700 font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-4 mb-3">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Top Paying Jobs</p>
                    {d.topJobs.map((j) => (
                      <p key={j} className="text-xs text-slate-600 flex items-center gap-1.5 mb-1">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                        {j}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Visa Types</p>
                    <div className="flex flex-wrap gap-1.5">
                      {d.visas.map((v) => (
                        <span key={v} className="bg-cyan-50 text-cyan-700 text-xs px-2.5 py-1 rounded-full font-semibold">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="text-center mb-10">
            <p className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2">Why Work Abroad</p>
            <h2 className="text-3xl font-bold text-slate-900">Benefits of Working Overseas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex gap-4">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-sm mb-1">{b.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-start">
              <div>
                <p className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-2">What You Need</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Work Visa Requirements</h2>
                <ul className="space-y-3">
                  {[
                    "Valid job offer or employment contract",
                    "Relevant qualifications and certifications",
                    "Valid passport (minimum 6 months validity)",
                    "Language proficiency test (IELTS/PTE/TOEFL)",
                    "Medical examination by approved physician",
                    "Police Clearance Certificate (PCC)",
                    "Educational qualification assessment",
                    "Proof of funds / financial statements",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-8 shadow-sm">
                <h3 className="text-slate-900 font-bold text-lg mb-3">How JOGgliders Helps</h3>
                <div className="space-y-4">
                  {[
                    { title: "Resume & LinkedIn Optimisation", desc: "ATS-optimised resume and LinkedIn profile to get noticed by international employers." },
                    { title: "Job Application Support", desc: "Structured weekly job applications to portals across your target countries." },
                    { title: "Visa Documentation", desc: "Complete preparation and review of all visa documents before submission." },
                    { title: "Interview Preparation", desc: "Mock interviews and preparation for visa interviews at embassies/consulates." },
                  ].map((h) => (
                    <div key={h.title} className="flex gap-3">
                      <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-800 font-semibold text-sm">{h.title}</p>
                        <p className="text-slate-500 text-xs">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowForm(true)} className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                  Get Free Counselling →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-600 py-6 sm:py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to work abroad?</h2>
            <p className="text-cyan-100 text-sm mb-7">Speak to our work visa experts and get a free assessment of your profile today.</p>
            <button onClick={() => setShowForm(true)} className="bg-white text-cyan-700 font-bold px-10 py-3.5 rounded-xl hover:bg-cyan-50 transition-colors text-sm shadow-lg">
              Get Free Counselling →
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
