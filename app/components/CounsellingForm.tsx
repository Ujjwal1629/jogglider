"use client";

import { useState } from "react";
import { sendEnquiryEmail } from "../lib/sendEmail";

export default function CounsellingForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    interest: "Study Abroad",
    destination: "Canada",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const message =
      `JOGgliders — New Counselling Request\n` +
      `━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name:        ${form.firstName} ${form.lastName}\n` +
      `Phone:       ${form.phone}\n` +
      `Email:       ${form.email}\n` +
      `Service:     ${form.interest}\n` +
      `Destination: ${form.destination}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Received via JOGgliders.com`;

    // Send email silently in background
    sendEnquiryEmail({ ...form }).catch(() => {});

    // Open WhatsApp
    window.open(`https://wa.me/919910931384?text=${encodeURIComponent(message)}`, "_blank");
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-4 sm:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1">Free Consultation</p>
              <h2 className="text-2xl font-bold text-slate-900">Get Free Counselling</h2>
              <p className="text-slate-500 text-sm mt-1">Our experts will call you back within 24 hours.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name *</label>
                  <input
                    required name="firstName" type="text" placeholder="Rahul"
                    value={form.firstName} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name *</label>
                  <input
                    required name="lastName" type="text" placeholder="Sharma"
                    value={form.lastName} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                <input
                  required name="phone" type="tel" placeholder="+91 98765 43210"
                  value={form.phone} onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                <input
                  required name="email" type="email" placeholder="rahul@example.com"
                  value={form.email} onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Interested In</label>
                <select
                  name="interest" value={form.interest} onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>Study Abroad</option>
                  <option>Work Visa</option>
                  <option>Migrate / PR</option>
                  <option>Visit / Tourist Visa</option>
                  <option>Spouse & Family Visa</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Preferred Destination</label>
                <select
                  name="destination" value={form.destination} onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Germany</option>
                  <option>UAE</option>
                  <option>Not decided yet</option>
                </select>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
                </svg>
                Send via WhatsApp
              </button>
              <p className="text-center text-xs text-slate-400">No spam. Your information is kept private.</p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.893 0C5.352 0 0 5.373 0 11.94c0 2.104.549 4.075 1.504 5.786L0 24l6.418-1.676C8.04 23.297 9.935 23.88 11.893 23.88c6.541 0 11.893-5.373 11.893-11.94S18.434 0 11.893 0zm0 21.797c-1.798 0-3.47-.487-4.907-1.33l-.352-.21-3.648.952.977-3.553-.232-.366A9.813 9.813 0 012.083 11.94c0-5.44 4.394-9.857 9.81-9.857 5.415 0 9.81 4.417 9.81 9.857s-4.395 9.857-9.81 9.857z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Sent to WhatsApp!</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Your details have been sent to our team on WhatsApp. We&apos;ll get back to you shortly!<br />
              For urgent queries, call <span className="font-semibold text-blue-600">+91-9910931384</span>.
            </p>
            <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2.5 rounded-xl transition-colors text-sm">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
