import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Cookie Policy | Techies Journal",
  description: "Learn about how Techies Journal uses cookies and tracking technologies to improve your browsing experience.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-[#F9F9F8] pt-32 pb-24 text-[#1A1A1A]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-bold uppercase tracking-widest text-[#555555] mb-4 block">
            Technical
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
            Cookie Policy
          </h1>

          <div className="flex items-center gap-4 text-xs font-medium text-[#555555] mb-12 italic">
            <span>Effective Date: January 28, 2026</span>
            <span className="opacity-20">•</span>
            <span>Last Updated: {new Date().toDateString()}</span>
          </div>

          <div className="h-px w-full bg-[#E5E5E1] mb-12" />

          <div className="prose prose-slate max-w-none text-[#1A1A1A] leading-relaxed">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device that help websites remember your preferences and analyze usage. They may be "first-party" (set by us) or "third-party" (set by others).
              </p>
            </section>

            <section className="mb-12 text-[#1A1A1A]">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">2. Usage at Techies Journal</h2>
              <p className="mb-6">
                We use cookies sparingly to monitor site performance and enhance your experience.
              </p>

              <div className="bg-white border border-[#E5E5E1] rounded-sm p-8 mb-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">2.1 Essential Cookies</h3>
                <p className="text-sm opacity-80">Required for basic site functionality and security.</p>
              </div>

              <div className="bg-white border border-[#E5E5E1] rounded-sm p-8 mb-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">2.2 Analytics Cookies</h3>
                <p className="text-sm opacity-80 mb-3">
                  We use Google Analytics and Vercel Analytics to understand how visitors engage with our content. All data is anonymous.
                </p>
                <ul className="text-xs space-y-1 list-disc list-inside opacity-70">
                  <li>Tracks page views and session duration</li>
                  <li>Monitors site performance</li>
                  <li>Records city/country level location</li>
                </ul>
              </div>

              <div className="bg-white border border-[#E5E5E1] rounded-sm p-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">2.3 Social Media Cookies</h3>
                <p className="text-sm opacity-80">
                  Third-party platforms (LinkedIn, GitHub) may set cookies if you use their sharing features or embedded content.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">3. Managing and Deleting Cookies</h2>
              <p className="mb-4">
                You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies entirely.
              </p>
              <p className="text-sm italic text-[#555555]">
                Note: Disabling cookies may slightly alter your reading experience.
              </p>
            </section>

            <section className="mt-16 pt-12 border-t border-[#E5E5E1]">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">4. Contact</h2>
              <div className="bg-white border border-[#E5E5E1] rounded-sm p-8 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:rishabh.292002@gmail.com" className="hover:underline">rishabh.292002@gmail.com</a></p>
                <p><strong>Perspective:</strong> <a href="https://rishabhupadhyay.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a></p>
              </div>
            </section>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
