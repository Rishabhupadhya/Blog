import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Privacy Policy | Techies Journal",
  description: "Privacy Policy for Techies Journal - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F9F9F8] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-[#555555] mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex items-center gap-4 text-xs font-medium text-[#555555] mb-12 italic">
            <span>Effective Date: January 28, 2026</span>
            <span className="opacity-20">•</span>
            <span>Last Updated: {new Date().toDateString()}</span>
          </div>

          <div className="h-px w-full bg-[#E5E5E1] mb-12" />

          <div className="prose prose-slate max-w-none text-[#1A1A1A] leading-relaxed">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. Introduction</h2>
              <p>
                Welcome to Techies Journal ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and your rights as a visitor to our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 mt-6">2.1 Automatically Collected Information</h3>
              <p className="mb-3">When you visit our website, we automatically collect certain information about your device and browsing behavior, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and general location (city/country level)</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Date and time of your visit</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 mt-8">2.2 Information You Provide</h3>
              <p className="mb-3">We may collect information you voluntarily provide when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Subscribe to our newsletter (email address)</li>
                <li>Submit comments or contact forms (name, email, message content)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 mt-8">2.3 Cookies</h3>
              <p>
                We use cookies to enhance your experience. See our <Link href="/cookies" className="text-[#334155] underline decoration-[#334155]/30 hover:decoration-[#334155]">Cookie Policy</Link> for detailed information.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our website and content</li>
                <li>To analyze user behavior and optimize user experience</li>
                <li>To respond to your inquiries and provide customer support</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">4. Third-Party Services</h2>
              <p>We may use third-party services including Google Analytics and Vercel Analytics for performance monitoring. These services may collect information governed by their own privacy policies.</p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">5. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">6. Your Privacy Rights</h2>
              <p>
                You may request access to, correction, or deletion of your personal information. To exercise these rights, contact us at <a href="mailto:rishabh.292002@gmail.com" className="text-[#334155] underline decoration-[#334155]/30 hover:decoration-[#334155]">rishabh.292002@gmail.com</a>
              </p>
            </section>

            {/* Contact */}
            <section className="mt-16 pt-12 border-t border-[#E5E5E1]">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">7. Contact Us</h2>
              <div className="bg-white border border-[#E5E5E1] rounded-sm p-8 space-y-4">
                <p><strong>Email:</strong> <a href="mailto:rishabh.292002@gmail.com" className="hover:underline">rishabh.292002@gmail.com</a></p>
                <p><strong>Portfolio:</strong> <a href="https://rishabhupadhyay.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">rishabhupadhyay.vercel.app</a></p>
              </div>
            </section>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

import Link from "next/link";
