import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] sm:pt-[108px] min-h-screen bg-slate-50">
        <div className="bg-blue-600 py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="text-blue-100 mt-3 text-sm">Last updated: January 2024</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-8 prose prose-slate max-w-none">
            <div className="space-y-8 text-sm text-slate-600 leading-relaxed">

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">1. Introduction</h2>
                <p>JOGgliders (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">2. Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Name, email address, and phone number</li>
                  <li>Passport and identity documents (for visa processing)</li>
                  <li>Educational and employment records</li>
                  <li>Financial information where required for visa applications</li>
                  <li>Communications between you and our team</li>
                </ul>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Provide immigration and visa consultation services</li>
                  <li>Prepare and submit visa applications on your behalf</li>
                  <li>Communicate with you about your case</li>
                  <li>Send relevant updates about immigration policies</li>
                  <li>Improve our services and website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">4. Information Sharing</h2>
                <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Government immigration authorities as required for visa applications</li>
                  <li>Partner institutions (universities, employers) with your explicit consent</li>
                  <li>Service providers who assist us in operating our business, under confidentiality agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">5. Data Security</h2>
                <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All sensitive documents are stored securely and accessed only by authorised staff.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">6. Data Retention</h2>
                <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">7. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time. To exercise these rights, contact us at admin@joggliders.com.</p>
              </section>

              <section>
                <h2 className="text-slate-900 font-bold text-lg mb-3">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="mt-3 space-y-1">
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
