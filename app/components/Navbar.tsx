"use client";

import { useState } from "react";

const navItems = [
  { label: "Migrate", href: "/migrate" },
  { label: "Work", href: "/work" },
  { label: "Study", href: "/study" },
  { label: "Visit", href: "/visit" },
  { label: "Countries", href: "/countries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* Top bar — hidden on very small screens */}
      <div className="bg-slate-50 border-b border-slate-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6 text-xs text-slate-600 overflow-hidden">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden md:inline">+91-9910931384 · 8920409936 · 0129 411 6107</span>
              <span className="md:hidden">+91-9910931384</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              admin@joggliders.com
            </span>
          </div>
          <a href="/contact" className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
            Contact Us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-stretch justify-between md:justify-start">
          {/* Logo */}
          <a href="/" className="flex items-center py-1.5 pr-6 border-r border-slate-100 mr-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="JOGgliders — We're Here to Get you There"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-stretch">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap text-slate-700 border-transparent hover:text-blue-600 hover:border-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile: Contact + Hamburger */}
          <div className="flex items-center gap-3 ml-auto md:hidden py-3">
            <a href="/contact" className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-colors sm:hidden">
              Contact
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-sm font-semibold text-slate-700 hover:text-blue-600 border-b border-slate-50 last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
