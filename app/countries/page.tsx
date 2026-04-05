import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const countries = [
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80&auto=format&fit=crop",
    desc: "A top choice for skilled workers, students, and families. Canada offers multiple immigration pathways including Express Entry, PNP, and more.",
    visas: ["PR Visa", "Express Entry", "Provincial Nominee", "Work Visa", "Student Visa", "Business Visa", "Visit Visa"],
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80&auto=format&fit=crop",
    desc: "Australia's points-based immigration system welcomes skilled professionals and students from around the world.",
    visas: ["Skilled Migration", "PR Visa", "Student Visa", "Work Visa", "Partner Visa", "Business Visa", "Visit Visa"],
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80&auto=format&fit=crop",
    desc: "The UK offers diverse visa options for skilled workers, students, and entrepreneurs looking to build a career in Europe.",
    visas: ["Skilled Worker Visa", "Student Visa", "Graduate Visa", "Spouse Visa", "Innovator Visa", "Business Visa", "Visit Visa"],
  },
  {
    name: "United States",
    image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80&auto=format&fit=crop",
    desc: "The US is home to world-class universities and employers. Navigate complex US immigration with our expert guidance.",
    visas: ["H-1B Visa", "Green Card", "Student Visa (F-1)", "L-1 Visa", "O-1 Visa", "EB-5 Investor", "B-1/B-2 Visit"],
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80&auto=format&fit=crop",
    desc: "Germany is Europe's largest economy and actively recruits skilled workers from India through the EU Blue Card and job seeker visas.",
    visas: ["Job Seeker Visa", "Work Visa", "EU Blue Card", "Student Visa", "Business Visa", "Family Reunion", "Visit Visa"],
  },
  {
    name: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop",
    desc: "The UAE is a global hub for business and employment. Benefit from zero income tax and a thriving expat community.",
    visas: ["Work Visa", "Golden Visa", "Business Visa", "Student Visa", "Freelance Visa", "Spouse Visa", "Visit Visa"],
  },
];

export default function CountriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-slate-50">
        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Destinations</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Countries We Cover</h1>
            <p className="text-blue-100 mt-3 text-sm max-w-lg mx-auto">
              Expert immigration guidance for 20+ destinations worldwide. Find your country and explore available visa options.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-5 sm:space-y-6">
          {countries.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} className="w-full md:w-56 h-44 sm:h-48 md:h-auto object-cover flex-shrink-0" />
              <div className="p-4 sm:p-6 flex flex-col justify-center flex-1">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{c.name}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.visas.map((v) => (
                    <span key={v} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{v}</span>
                  ))}
                </div>
                <a href="/contact" className="mt-4 inline-block text-sm font-bold text-blue-600 hover:underline">
                  Enquire about {c.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
