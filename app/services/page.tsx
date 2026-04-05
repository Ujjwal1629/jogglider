import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Migration Visa",
    description: "Permanent residency pathways for top destinations including Canada, Australia, and Germany. We assess your profile and recommend the best immigration route for your situation.",
    details: ["Profile Assessment", "Document Preparation", "Application Filing", "Post-Landing Support"],
  },
  {
    title: "Student Visa",
    description: "Study abroad in the UK, Canada, Australia & more with expert application support. We help you choose the right institution and handle all visa paperwork.",
    details: ["University Selection", "SOP Assistance", "Visa Documentation", "Pre-Departure Guidance"],
  },
  {
    title: "Work Visa",
    description: "Employment-based visas with expert documentation and end-to-end assistance. We work with both employers and individuals to ensure smooth processing.",
    details: ["Job Offer Assistance", "LMIA Support", "Visa Filing", "Extension & Renewals"],
  },
  {
    title: "Visitor Visa",
    description: "Tourism and business travel made simple with hassle-free application processing. Increase your approval chances with properly prepared documentation.",
    details: ["Itinerary Planning", "Document Checklist", "Application Review", "Interview Preparation"],
  },
  {
    title: "Spouse & Family Visa",
    description: "Reunite with your loved ones abroad through dependent and family reunion visa pathways. We handle the paperwork so you can focus on what matters.",
    details: ["Spousal Sponsorship", "Dependent Visas", "Family Reunification", "Documentation Support"],
  },
  {
    title: "PR & Citizenship",
    description: "Long-term settlement and citizenship guidance for a secure future abroad. Navigate complex immigration laws with expert guidance every step of the way.",
    details: ["PR Applications", "Citizenship Pathways", "Naturalisation Support", "Legal Consultation"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-slate-50">
        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Our Services</h1>
            <p className="text-blue-100 mt-3 text-sm max-w-lg mx-auto">
              End-to-end immigration and visa services — from your first consultation to visa approval and beyond.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
                <h2 className="text-slate-900 font-bold text-lg mb-2">{s.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{s.description}</p>
                <ul className="space-y-2 border-t border-slate-100 pt-4">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="mt-5 block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors">
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Not sure which service you need?</h2>
            <p className="text-blue-100 text-sm mb-6">Take our free eligibility check and we'll point you in the right direction.</p>
            <a href="/eligibility-check" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
              Free Eligibility Check
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
