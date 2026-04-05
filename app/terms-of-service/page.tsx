import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-slate-50">
        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
            <p className="text-blue-100 mt-3 text-sm">Last updated: January 2024</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-8">
            <div className="space-y-8 text-sm text-slate-600 leading-relaxed">

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">1. Acceptance of Terms</h2>
                <p>By engaging JOGgliders&apos; services or using our website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">2. Services</h2>
                <p>JOGgliders provides immigration and visa consultancy services. Our services include profile assessment, documentation assistance, application preparation, and liaison with immigration authorities. The specific services to be provided will be agreed upon in a written engagement letter or service agreement.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">3. No Guarantee of Outcome</h2>
                <p>While we strive for the highest standards in every application, JOGgliders cannot guarantee visa approval or immigration outcomes. All final decisions rest solely with the relevant immigration authorities. We are not liable for any loss arising from an application refusal.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">4. Client Responsibilities</h2>
                <p>You are responsible for providing accurate, complete, and truthful information and documents. Any misrepresentation or omission may result in visa refusal or legal consequences. JOGgliders will not be held responsible for outcomes arising from incorrect information supplied by the client.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">5. Fees and Payment</h2>
                <p>Our fees are communicated prior to engagement. Fees paid for services rendered are non-refundable unless otherwise specified in your service agreement. Government visa fees are separate and non-refundable regardless of outcome.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">6. Confidentiality</h2>
                <p>All client information is treated as strictly confidential. We will not disclose your personal or case information to any third party without your consent, except where required by law or as necessary to process your immigration application.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">7. Intellectual Property</h2>
                <p>All content on the JOGgliders website — including text, images, logos, and guides — is the property of JOGgliders and may not be reproduced without written permission.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">8. Limitation of Liability</h2>
                <p>JOGgliders&apos; liability in connection with any service shall be limited to the fees paid for that specific service. We are not liable for indirect, incidental, or consequential damages.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">9. Governing Law</h2>
                <p>These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Faridabad, Haryana.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">10. Contact</h2>
                <div className="space-y-1">
                  <p><span className="font-semibold text-slate-800">JOGgliders</span></p>
                  <p>Near Badhkal Mor Metro Station, Sector 19, Faridabad, Haryana</p>
                  <p>Email: admin@joggliders.com</p>
                  <p>Phone: +91-9910931384</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
