export const metadata = {
  title: "Privacy Policy | Techies Journal",
  description: "Privacy Policy for Techies Journal - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-28 max-w-4xl mx-auto bg-gradient-to-b from-black via-black to-cyan-950">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Privacy Policy
      </h1>

      <p className="text-gray-400 mb-12">
        <strong>Effective Date:</strong> January 28, 2026<br />
        <strong>Last Updated:</strong> {new Date().toDateString()}
      </p>

      <div className="space-y-10 text-gray-300 leading-relaxed">
        
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Introduction</h2>
          <p>
            Welcome to Techies Journal ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and your rights as a visitor to our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">2.1 Automatically Collected Information</h3>
          <p className="mb-3">When you visit our website, we automatically collect certain information about your device and browsing behavior, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>IP address and general location (city/country level)</li>
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website or source</li>
            <li>Date and time of your visit</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">2.2 Information You Provide</h3>
          <p className="mb-3">We may collect information you voluntarily provide when you:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>Subscribe to our newsletter (email address)</li>
            <li>Submit comments or contact forms (name, email, message content)</li>
            <li>Participate in surveys or feedback requests</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies, web beacons, and similar technologies to enhance your experience and gather analytics data. See our <a href="/cookies" className="text-cyan-400 hover:underline">Cookie Policy</a> for detailed information.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. How We Use Your Information</h2>
          <p className="mb-3">We use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>To provide, maintain, and improve our website and content</li>
            <li>To analyze user behavior and optimize user experience</li>
            <li>To send newsletters and updates (with your consent)</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To detect, prevent, and address technical issues or security threats</li>
            <li>To comply with legal obligations and enforce our terms</li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Third-Party Services</h2>
          <p className="mb-3">We may use third-party services for analytics and functionality, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
            <li><strong>Vercel Analytics:</strong> For performance monitoring and optimization</li>
            <li><strong>Social Media Platforms:</strong> For content sharing functionality</li>
          </ul>
          <p className="mt-3">
            These services may collect information governed by their own privacy policies. We encourage you to review their privacy practices.
          </p>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Information Sharing and Disclosure</h2>
          <p className="mb-3">We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li><strong>With Service Providers:</strong> Third-party vendors who help us operate our website (hosting, analytics, email services)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Analytics data is typically retained for 26 months.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Your Privacy Rights</h2>
          <p className="mb-3">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
            <li><strong>Data Portability:</strong> Request your data in a portable format</li>
            <li><strong>Object:</strong> Object to processing of your personal information</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact us at <a href="mailto:rishabh.292002@gmail.com" className="text-cyan-400 hover:underline">rishabh.292002@gmail.com</a>
          </p>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will delete it.
          </p>
        </section>

        {/* International Users */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. By using our website, you consent to the transfer of your information to these countries.
          </p>
        </section>

        {/* Do Not Track */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">11. Do Not Track Signals</h2>
          <p>
            Some browsers include a "Do Not Track" (DNT) feature. Our website does not currently respond to DNT signals, but you can manage cookies through your browser settings.
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">13. Contact Us</h2>
          <p className="mb-3">If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 space-y-2">
            <p><strong>Email:</strong> <a href="mailto:rishabh.292002@gmail.com" className="text-cyan-400 hover:underline">rishabh.292002@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://rishabhupadhyay.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://rishabhupadhyay.vercel.app/</a></p>
          </div>
        </section>

      </div>
    </main>
  );
}
