const links = {
  Services: [
    { label: "Migration Visa", href: "/migrate" },
    { label: "Student Visa", href: "/study" },
    { label: "Work Visa", href: "/work" },
    { label: "Visitor Visa", href: "/visit" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Countries", href: "/countries" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1f30] text-slate-400 pt-10 pb-0 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-transparent.png" alt="JOGgliders" className="h-20 w-auto object-contain mb-3" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              Trusted immigration & visa consultancy helping people build their future abroad since 2016.
            </p>

            <div className="mt-4 space-y-1 text-xs text-slate-500">
              <p>+91-9910931384 &middot; 8920409936</p>
              <p>0129-411-6107 (Landline)</p>
              <p>admin@joggliders.com</p>
            </div>

            <div className="flex gap-2.5 mt-4">
              <a href="#" aria-label="Twitter"
                className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn"
                className="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">{heading}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-slate-400 text-xs hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} JOGgliders. All rights reserved.</p>
          <p>Sector 19, Faridabad, Haryana — Near Badhkal Mor Metro</p>
        </div>
      </div>
    </footer>
  );
}
