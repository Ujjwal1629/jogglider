"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sendEnquiryEmail } from "../lib/sendEmail";

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Mobile",
    lines: ["+91-9910931384", "8920409936"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Landline",
    lines: ["0129 411 6107"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    lines: ["admin@joggliders.com"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Office",
    lines: ["Faridabad, Haryana, India"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const message =
      `JOGgliders — New Enquiry\n` +
      `━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name:    ${form.firstName} ${form.lastName}\n` +
      `Phone:   ${form.phone}\n` +
      `Email:   ${form.email}\n` +
      `Service: ${form.interest || "Not specified"}\n` +
      (form.message ? `Message: ${form.message}\n` : "") +
      `\n━━━━━━━━━━━━━━━━━━━━\n` +
      `Received via joggliders.com`;

    // Send email silently in background
    sendEnquiryEmail({ ...form, destination: "Not specified" }).catch(() => {});

    // Open WhatsApp
    window.open(`https://wa.me/919910931384?text=${encodeURIComponent(message)}`, "_blank");
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-slate-50">

        {/* Hero band */}
        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Contact JOGgliders</h1>
            <p className="text-blue-100 mt-3 text-sm max-w-lg mx-auto">
              Our immigration experts are ready to help you plan your journey. Reach out through any channel below.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">

            {/* Left — contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Our Contact Details</h2>
                {/* <p className="text-slate-500 text-sm">We&apos;re available Monday–Saturday, 9 AM – 6 PM IST.</p> */}
              </div>

              <div className="space-y-4">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{c.label}</p>
                      {c.lines.map((line) => (
                        <p key={line} className="text-slate-800 font-semibold text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919910931384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-xl px-6 py-4 shadow-sm"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
                </svg>
                <div>
                  <p className="font-bold text-sm">Chat on WhatsApp</p>
                  <p className="text-green-100 text-xs">Typically replies within minutes</p>
                </div>
              </a>
            </div>

            {/* Right — enquiry form */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Send an Enquiry</h2>
              <p className="text-slate-500 text-sm mb-6">Fill in the form and your details will be sent to us instantly via WhatsApp.</p>

              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name *</label>
                      <input required name="firstName" type="text" placeholder="Rahul" value={form.firstName} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name *</label>
                      <input required name="lastName" type="text" placeholder="Sharma" value={form.lastName} onChange={handleChange}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                    <input required name="email" type="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                    <input required name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Interested In</label>
                    <select name="interest" value={form.interest} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="">Select a service</option>
                      <option>Immigration / Migration</option>
                      <option>Work Visa</option>
                      <option>Student Visa</option>
                      <option>Visit / Tourist Visa</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your situation..." value={form.message} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p className="text-center text-xs text-slate-400">We respect your privacy. Your information is never shared.</p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sent to WhatsApp!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Your enquiry has been sent to our team. We&apos;ll get back to you shortly!<br />
                    For urgent queries, call <span className="font-semibold text-blue-600">+91-9910931384</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
