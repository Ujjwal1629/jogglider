const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Speak with an expert to assess your eligibility and understand the best visa pathway for your goals.",
  },
  {
    number: "02",
    title: "Document Assistance",
    description: "We guide you through every form, checklist, and requirement — so nothing gets missed.",
  },
  {
    number: "03",
    title: "Visa Approval",
    description: "Submit your application with confidence. We track progress and keep you informed every step of the way.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-14 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-500 mb-3">Process</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">Up and running in three steps</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Our streamlined process takes the complexity out of immigration so you can focus on your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+2.5rem)] w-full h-px border-t border-dashed border-blue-200" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md shadow-blue-200">
                  {step.number}
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mt-5 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
