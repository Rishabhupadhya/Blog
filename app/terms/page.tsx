import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Techies Journal",
  description: "Terms and Conditions for using Techies Journal - Read our terms of service, usage guidelines, and legal agreements.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24 text-[#1C1C1C]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <span className="text-eyebrow text-[#9A9A9A] mb-4 block">
            Legal
          </span>
          <h1 className="text-page-title font-bold text-[#1C1C1C] mb-8 leading-tight tracking-tight">
            Terms & Conditions
          </h1>

          <div className="flex items-center gap-4 text-meta text-[#6B6B6B] mb-12 italic">
            <span>Effective Date: January 28, 2026</span>
            <span className="text-[#E8E8E6]">•</span>
            <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <div className="h-px w-full bg-[#E8E8E6] mb-14" />

          <div className="prose prose-neutral max-w-none 
            prose-p:text-[#1C1C1C] prose-p:leading-[1.75] prose-p:mb-8
            prose-headings:text-[#1C1C1C] prose-headings:font-bold
            prose-a:text-[#1C1C1C] prose-a:underline prose-a:underline-offset-4
            prose-strong:text-[#1C1C1C]
            prose-li:text-[#1C1C1C] prose-li:leading-[1.75]">

            {/* Agreement to Terms */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">1. Agreement to Terms</h2>
              <p>
                Welcome to Techies Journal. By accessing or using our website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use our website. These Terms constitute a legally binding agreement between you and Techies Journal.
              </p>
            </section>

            {/* Use of Website */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">2. Use of Website</h2>
              <h3 className="text-lg font-bold text-[#1C1C1C] mb-4 mt-10">2.1 Permitted Use</h3>
              <p className="mb-4">You may use our website for lawful purposes only. You agree not to violate any applicable laws, infringe upon intellectual property, or engage in any harmful activity.</p>
              <ul className="list-disc pl-5 mb-8">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Engage in automated data collection without permission</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">3. Intellectual Property Rights</h2>
              <p>
                All content on Techies Journal, including articles, blog posts, code examples, and graphics, is the property of Techies Journal or its licensors and is protected by intellectual property laws.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">4. Disclaimers</h2>
              <p>
                Content on Techies Journal is for informational and educational purposes only. It does not constitute professional advice. Use content at your own risk. The website and content are provided "AS IS" without warranties of any kind.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Techies Journal shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or content.
              </p>
            </section>

            {/* Contact */}
            <section className="mt-24 pt-16 border-t border-[#E8E8E6]">
              <h2 className="text-section-header mb-8">6. Contact Information</h2>
              <div className="bg-white border border-[#E8E8E6] rounded-sm p-10">
                <p className="text-[#1C1C1C] mb-4">For questions about these Terms, please contact us:</p>
                <p className="text-[#1C1C1C]"><strong className="text-eyebrow mr-2">Email</strong> <a href="mailto:rishabh.292002@gmail.com" className="hover:text-[#6B6B6B] transition-colors decoration-dotted underline underline-offset-4">rishabh.292002@gmail.com</a></p>
              </div>
            </section>

            <div className="mt-16 p-8 bg-[#FAFAF9] border border-[#E8E8E6] rounded-sm italic text-sm text-[#6B6B6B]">
              <p>
                <strong>Important:</strong> By using Techies Journal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
