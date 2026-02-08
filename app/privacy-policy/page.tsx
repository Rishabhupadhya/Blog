import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Techies Journal",
  description: "Privacy Policy for Techies Journal - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <span className="text-eyebrow text-[#9A9A9A] mb-4 block">
            Legal
          </span>
          <h1 className="text-page-title font-bold text-[#1C1C1C] mb-8 leading-tight tracking-tight">
            Privacy Policy
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

            {/* Introduction */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">1. Introduction</h2>
              <p>
                Welcome to Techies Journal ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and your rights as a visitor to our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">2. Information We Collect</h2>

              <h3 className="text-lg font-bold text-[#1C1C1C] mb-4 mt-10">2.1 Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we automatically collect certain information about your device and browsing behavior, including:</p>
              <ul className="list-disc pl-5 mb-8">
                <li>IP address and general location (city/country level)</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Date and time of your visit</li>
              </ul>

              <h3 className="text-lg font-bold text-[#1C1C1C] mb-4 mt-10">2.2 Information You Provide</h3>
              <p className="mb-4">We may collect information you voluntarily provide when you subscribe to our newsletter (email address) or submit contact forms.</p>

              <h3 className="text-lg font-bold text-[#1C1C1C] mb-4 mt-10">2.3 Cookies</h3>
              <p>
                We use cookies to enhance your experience. See our <Link href="/cookies">Cookie Policy</Link> for detailed information.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5">
                <li>To provide, maintain, and improve our website and content</li>
                <li>To analyze user behavior and optimize user experience</li>
                <li>To respond to your inquiries and provide customer support</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-16">
              <h2 className="text-section-header mb-6">4. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure.
              </p>
            </section>

            {/* Contact */}
            <section className="mt-24 pt-16 border-t border-[#E8E8E6]">
              <h2 className="text-section-header mb-8">5. Contact Us</h2>
              <div className="bg-white border border-[#E8E8E6] rounded-sm p-10 space-y-6">
                <p className="text-[#1C1C1C]"><strong className="text-eyebrow mr-2">Email</strong> <a href="mailto:rishabh.292002@gmail.com" className="hover:text-[#6B6B6B] transition-colors decoration-dotted underline underline-offset-4">rishabh.292002@gmail.com</a></p>
                <p className="text-[#1C1C1C]"><strong className="text-eyebrow mr-2">Portfolio</strong> <a href="https://rishabhupadhyay.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6B6B6B] transition-colors decoration-dotted underline underline-offset-4">rishabhupadhyay.vercel.app</a></p>
              </div>
            </section>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
