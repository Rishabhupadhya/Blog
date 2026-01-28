export const metadata = {
  title: "Terms & Conditions | Techies Journal",
  description: "Terms and Conditions for using Techies Journal - Read our terms of service, usage guidelines, and legal agreements.",
};

export default function Terms() {
  return (
    <main className="min-h-screen px-6 py-28 max-w-4xl mx-auto bg-gradient-to-b from-black via-black to-cyan-950">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Terms & Conditions
      </h1>

      <p className="text-gray-400 mb-12">
        <strong>Effective Date:</strong> January 28, 2026<br />
        <strong>Last Updated:</strong> {new Date().toDateString()}
      </p>

      <div className="space-y-10 text-gray-300 leading-relaxed">
        
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Agreement to Terms</h2>
          <p>
            Welcome to Techies Journal. By accessing or using our website, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use our website. These Terms constitute a legally binding agreement between you and Techies Journal.
          </p>
        </section>

        {/* Use of Website */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. Use of Website</h2>
          
          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">2.1 Permitted Use</h3>
          <p className="mb-3">You may use our website for lawful purposes only. You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights of others</li>
            <li>Transmit harmful code, viruses, or malware</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Engage in scraping, data mining, or automated data collection without permission</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Post spam, advertisements, or unsolicited content</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">2.2 Account Responsibility</h3>
          <p>
            If you create an account or subscribe to our services, you are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must notify us immediately of any unauthorized access.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">3.1 Our Content</h3>
          <p className="mb-3">
            All content on Techies Journal, including but not limited to articles, blog posts, code examples, graphics, logos, designs, and images, is the property of Techies Journal or its licensors and is protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">3.2 Limited License</h3>
          <p className="mb-3">We grant you a limited, non-exclusive, non-transferable license to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>View and read content for personal, non-commercial use</li>
            <li>Share links to our articles on social media</li>
            <li>Quote brief excerpts with proper attribution and a link back to the source</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">3.3 Prohibited Uses</h3>
          <p className="mb-3">You may NOT:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>Republish, reproduce, or redistribute content without written permission</li>
            <li>Modify, create derivative works, or reverse engineer our content</li>
            <li>Remove copyright notices or attributions</li>
            <li>Use content for commercial purposes without authorization</li>
            <li>Frame or mirror content on other websites</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">3.4 Code Examples</h3>
          <p>
            Code snippets and examples provided in our articles are offered for educational purposes. While you may use them in your own projects, we recommend reviewing and testing thoroughly. No warranty is provided for code examples.
          </p>
        </section>

        {/* User-Generated Content */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. User-Generated Content</h2>
          <p className="mb-3">
            If you submit comments, feedback, or other content to our website, you grant us a worldwide, non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and display such content. You represent that:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>You own or have rights to the content you submit</li>
            <li>Your content does not violate any third-party rights</li>
            <li>Your content is not defamatory, obscene, or illegal</li>
          </ul>
          <p className="mt-3">
            We reserve the right to remove any user-generated content at our sole discretion without notice.
          </p>
        </section>

        {/* Disclaimers */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. Disclaimers and Limitations</h2>
          
          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.1 No Professional Advice</h3>
          <p>
            Content on Techies Journal is for informational and educational purposes only. It does not constitute professional, legal, financial, or technical advice. You should consult qualified professionals for specific guidance related to your situation.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.2 Accuracy of Information</h3>
          <p>
            While we strive for accuracy, we make no warranties or representations regarding the completeness, accuracy, reliability, or timeliness of the content. Technology evolves rapidly, and information may become outdated. Use content at your own risk.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.3 Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites. Accessing third-party links is at your own risk.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.4 "AS IS" Basis</h3>
          <p className="mb-3">
            THE WEBSITE AND CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>Merchantability or fitness for a particular purpose</li>
            <li>Non-infringement of third-party rights</li>
            <li>Uninterrupted or error-free operation</li>
            <li>Security or absence of viruses</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Limitation of Liability</h2>
          <p className="mb-3">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECHIES JOURNAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>Loss of profits, data, or business opportunities</li>
            <li>System failures or security breaches</li>
            <li>Errors in content or code examples</li>
            <li>Actions taken based on information from our website</li>
          </ul>
          <p className="mt-3">
            Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.
          </p>
        </section>

        {/* Indemnification */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Techies Journal from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the website, violation of these Terms, or infringement of any third-party rights.
          </p>
        </section>

        {/* Changes and Termination */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. Changes and Termination</h2>
          
          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">8.1 Modifications to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the revised Terms.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">8.2 Modifications to Website</h3>
          <p>
            We may modify, suspend, or discontinue any aspect of the website at any time without notice or liability.
          </p>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">8.3 Termination</h3>
          <p>
            We reserve the right to terminate or suspend your access to the website at our sole discretion, without notice, for conduct that violates these Terms or is harmful to other users or our business.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Governing Law and Disputes</h2>
          <p className="mb-3">
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the website shall be resolved through:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li>Good faith negotiations between the parties</li>
            <li>Binding arbitration if negotiations fail</li>
            <li>Courts located in India if arbitration is not applicable</li>
          </ul>
        </section>

        {/* Severability */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">10. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        {/* Entire Agreement */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">11. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Techies Journal regarding your use of the website and supersede all prior agreements.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">12. Contact Information</h2>
          <p className="mb-3">For questions or concerns about these Terms, please contact us:</p>
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 space-y-2">
            <p><strong>Email:</strong> <a href="mailto:rishabh.292002@gmail.com" className="text-cyan-400 hover:underline">rishabh.292002@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://rishabhupadhyay.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://rishabhupadhyay.vercel.app/</a></p>
          </div>
        </section>

        <div className="mt-12 p-6 bg-cyan-950/20 border border-cyan-900/30 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong>Important:</strong> By using Techies Journal, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>

      </div>
    </main>
  );
}
