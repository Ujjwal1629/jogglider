const testimonials = [
  {
    quote: "JOGgliders made our Canada PR process completely stress-free. Their team handled everything and kept us updated throughout.",
    name: "Ravi M.",
    location: "Bangalore, India",
    initials: "RM",
    visa: "Canada PR",
  },
  {
    quote: "Got my UK student visa approved in just 3 weeks. The team was incredibly helpful, professional, and always responsive.",
    name: "Sneha T.",
    location: "Hyderabad, India",
    initials: "ST",
    visa: "UK Student Visa",
  },
  {
    quote: "Professional, transparent, and fast. I highly recommend JOGgliders to anyone navigating the work visa process abroad.",
    name: "Omar K.",
    location: "Dubai, UAE",
    initials: "OK",
    visa: "Work Visa",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Testimonials</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">Trusted by people worldwide</h2>
          <p className="text-slate-500 mt-4">Real stories from clients who achieved their immigration goals with JOGgliders.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-7 flex flex-col justify-between">
              <div>
                <p className="text-3xl sm:text-5xl text-blue-200 font-serif leading-none">&ldquo;</p>
                <p className="text-slate-700 text-sm leading-relaxed mt-2">{t.quote}</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location} &middot; {t.visa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
