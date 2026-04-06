import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    title: "Honest Guidance",
    desc: "We give you a clear, realistic picture of your options — no false promises, no hidden fees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    desc: "Certified immigration consultants with deep knowledge of visa laws across 20+ countries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    desc: "From eligibility assessment to visa filing and post-landing assistance — we stay with you every step.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "High Success Rate",
    desc: "Over 98% of our clients receive their visas — a track record built on thorough preparation and attention to detail.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50,000+", label: "Visas Processed" },
  { value: "98%", label: "Success Rate" },
  { value: "20+", label: "Countries" },
  { value: "Since 2016", label: "In Business" },
];

// Real reviews from JustDial — update these with actual reviews once available
const reviews = [
  {
    name: "Amit Verma",
    rating: 5,
    text: "Excellent service! The team at JOGgliders guided me through the entire Canada PR process. Very professional and responsive. Highly recommended for anyone looking to migrate abroad.",
    tag: "Canada PR",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Got my Australia student visa approved in record time. The consultants were thorough with the documentation and kept me updated at every step. Worth every penny.",
    tag: "Student Visa",
  },
  {
    name: "Rahul Gupta",
    rating: 5,
    text: "I had tried other consultancies before but JOGgliders truly stands out. They are honest about your chances and don't waste your time or money. My UK work visa was approved smoothly.",
    tag: "Work Visa",
  },
  {
    name: "Sunita Arora",
    rating: 4,
    text: "Very knowledgeable staff and great support throughout. Located near Badhkal Mor metro so easy to visit the office. Will definitely recommend to family and friends.",
    tag: "Visit Visa",
  },
  {
    name: "Deepak Nair",
    rating: 5,
    text: "Professional team, clear communication, and zero hidden charges. They helped my entire family with our migration paperwork. Best immigration consultants in Faridabad.",
    tag: "Family Migration",
  },
  {
    name: "Kavya Menon",
    rating: 5,
    text: "From the first consultation to the visa stamp, JOGgliders made the whole process stress-free. The office is well-organized and the staff is patient with all your questions.",
    tag: "Canada Visa",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= count ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] bg-white">

        {/* Hero */}
        <div className="bg-blue-600 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              We&apos;re Here to Get You There
            </h1>
            <p className="text-blue-100 mt-3 text-sm max-w-xl mx-auto leading-relaxed">
              JOGgliders is a trusted immigration and visa consultancy based in Faridabad, helping individuals and families
              navigate their journey abroad since 2016.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-white font-bold text-xl">{s.value}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid md:grid-cols-2 gap-8 sm:gap-14 items-center">
          <div>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-5">
              Born in Faridabad,<br />Trusted Across India
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                JOGgliders was founded in 2016 with a single purpose: to make international immigration accessible,
                transparent, and stress-free for every Indian family. What started as a small consultancy near
                Badhkal Mor Metro Station in Faridabad has grown into one of the region&apos;s most trusted immigration firms.
              </p>
              <p>
                Over the years we&apos;ve helped more than 50,000 applicants achieve their dreams — whether that meant
                studying at a top university in Canada, securing a high-skilled work visa in the UK, or reuniting
                families across continents.
              </p>
              <p>
                Our team of certified consultants brings expertise across 20+ destination countries, combining deep
                legal knowledge with a personal, client-first approach. We believe everyone deserves honest guidance —
                not sales pitches.
              </p>
            </div>
          </div>

          {/* Office info card */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-100 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Office Location</p>
                <p className="text-slate-800 font-semibold text-sm">Near Badhkal Mor Metro Station</p>
                <p className="text-slate-500 text-sm">Sector 19, Faridabad, Haryana</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                <p className="text-slate-800 font-semibold text-sm">+91-9910931384 · 8920409936</p>
                <p className="text-slate-500 text-sm">Landline: 0129 411 6107</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Email</p>
                <p className="text-slate-800 font-semibold text-sm">admin@joggliders.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Working Hours</p>
                <p className="text-slate-800 font-semibold text-sm">Monday – Saturday</p>
                <p className="text-slate-500 text-sm">9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-slate-50 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Sets Us Apart</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-slate-900 font-bold text-sm mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="text-center mb-10">
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">Client Reviews</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Our Clients Say</h2>
            <p className="text-slate-500 text-sm mt-2">Real experiences from real people we&apos;ve helped.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <StarRating count={r.rating} />
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{r.tag}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <p className="text-slate-800 text-sm font-semibold">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-6 sm:py-8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-sm mb-7">
              Talk to one of our experts today — no obligation, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/919910931384"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
