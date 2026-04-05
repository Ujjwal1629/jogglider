"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "What services does JOGgliders offer?",
    a: "JOGgliders offers end-to-end immigration and visa services including migration visas (PR), work visas, student visas, visitor visas, spouse & family visas, and PR & citizenship guidance for 20+ countries.",
  },
  {
    q: "How do I know which visa or immigration pathway is right for me?",
    a: "Our consultants will assess your profile — education, work experience, language proficiency, and goals — and recommend the most suitable pathway. You can start with our free eligibility check online or book a consultation at our Faridabad office.",
  },
  {
    q: "How long does the visa process take?",
    a: "Processing times vary by country and visa type. Visitor visas can take 2–6 weeks; work and student visas typically take 4–12 weeks; PR applications can take several months. We give you a realistic timeline upfront before you begin.",
  },
  {
    q: "What are your fees?",
    a: "Our fees depend on the service type and complexity of your case. We are fully transparent — all charges are communicated clearly before you engage with us. There are no hidden fees. Contact us for a personalised quote.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No ethical immigration consultancy can guarantee approval — that decision rests with the immigration authorities. However, our 98% success rate reflects the quality of our preparation and the attention we give to every application.",
  },
  {
    q: "Can I visit your office?",
    a: "Yes. Our office is located near Badhkal Mor Metro Station, Sector 19, Faridabad, Haryana. We are open Monday to Saturday, 9 AM – 6 PM. You can also call us at +91-9910931384 or email admin@joggliders.com.",
  },
  {
    q: "What documents do I need to start?",
    a: "The required documents vary by visa type, but generally include your passport, educational certificates, work experience letters, bank statements, and photographs. After your initial consultation, we provide a complete personalised checklist.",
  },
  {
    q: "Do you assist with post-visa/post-landing support?",
    a: "Yes. We offer guidance on post-landing requirements such as address registration, SIN/NIN applications, opening bank accounts, and settling in — so you're supported even after your visa is approved.",
  },
  {
    q: "What if my visa application is rejected?",
    a: "If your application is rejected, we analyse the refusal reason and advise you on whether to appeal, reapply, or explore an alternative pathway. We support you through every outcome.",
  },
  {
    q: "How do I get started?",
    a: "You can start by taking our free eligibility check on the website, or by contacting us directly via phone, email, or WhatsApp. Our team will get back to you within 24 hours.",
  },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-slate-50">
        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Got Questions?</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h1>
            <p className="text-blue-100 mt-3 text-sm max-w-lg mx-auto">
              Answers to the most common questions about our services and the immigration process.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-slate-900 font-semibold text-sm">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-slate-800 font-semibold mb-1">Still have questions?</p>
            <p className="text-slate-500 text-sm mb-4">Our team is here to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
