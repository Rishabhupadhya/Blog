export const metadata = {
  title: "Cookie Policy | Techies Journal",
  description: "Learn about how Techies Journal uses cookies and tracking technologies to improve your browsing experience.",
};

export default function Cookies() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-24 sm:py-28 max-w-4xl mx-auto bg-gradient-to-b from-black via-black to-cyan-950 w-full overflow-hidden">
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 break-words">
        Cookie Policy
      </h1>

      <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 break-words">
        <strong>Effective Date:</strong> January 28, 2026<br />
        <strong>Last Updated:</strong> {new Date().toDateString()}
      </p>

      <div className="space-y-8 sm:space-y-10 text-sm sm:text-base text-gray-300 leading-relaxed break-words">
        
        {/* Introduction */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4 break-words">1. What Are Cookies?</h2>
          <p className="break-words">
            Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, analyze how you use the site, and provide a better user experience. Cookies may be set by the website you visit ("first-party cookies") or by third-party services ("third-party cookies").
          </p>
        </section>

        {/* How We Use Cookies */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4 break-words">2. How Techies Journal Uses Cookies</h2>
          <p className="mb-4 break-words">
            We use cookies and similar tracking technologies to enhance your experience on our website, understand user behavior, and improve our content. Below are the main categories of cookies we use:
          </p>

          {/* Essential Cookies */}
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.1 Essential Cookies (Required)</h3>
            <p className="mb-3">
              These cookies are necessary for the website to function properly. They enable core functionality such as page navigation, access to secure areas, and basic operations.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Examples:</strong> Session management, security, load balancing
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.2 Analytics and Performance Cookies</h3>
            <p className="mb-3">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve content quality and user experience.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              <strong>Services Used:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm text-gray-400">
              <li>Google Analytics - Tracks page views, session duration, bounce rate, user demographics</li>
              <li>Vercel Analytics - Monitors website performance and load times</li>
            </ul>
            <p className="text-sm text-gray-400 mt-2">
              <strong>Data Collected:</strong> Page visits, time on site, device type, browser, location (city/country), referral source
            </p>
          </div>

          {/* Functional Cookies */}
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.3 Functional Cookies</h3>
            <p className="mb-3">
              These cookies allow the website to remember choices you make (such as theme preferences, font size, or language) to provide enhanced, personalized features.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Examples:</strong> User preferences, saved settings, recently viewed articles
            </p>
          </div>

          {/* Targeting Cookies */}
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.4 Targeting and Advertising Cookies (If Applicable)</h3>
            <p className="mb-3">
              We do not currently use advertising cookies. However, if we implement ads or sponsored content in the future, we will update this policy and notify users. These cookies would track your browsing habits to display relevant advertisements.
            </p>
          </div>

          {/* Social Media Cookies */}
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">2.5 Social Media Cookies</h3>
            <p className="mb-3">
              When you share content via social media buttons (Twitter, LinkedIn, Facebook), those platforms may set cookies to track interactions. We do not control these cookies; they are governed by the respective social media platform's privacy policy.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Platforms:</strong> LinkedIn, GitHub, Twitter/X
            </p>
          </div>
        </section>

        {/* Cookie Lifespan */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Cookie Lifespan</h2>
          <p className="mb-3">Cookies can be classified by how long they remain on your device:</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Session Cookies (Temporary)</h3>
              <p className="text-gray-400">
                These cookies are deleted automatically when you close your browser. They help maintain your session as you navigate between pages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Persistent Cookies (Long-term)</h3>
              <p className="text-gray-400">
                These cookies remain on your device for a set period (ranging from days to years) or until you manually delete them. They remember your preferences for future visits.
              </p>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Third-Party Cookies</h2>
          <p className="mb-3">
            Some cookies are placed by third-party services that appear on our pages. We do not control these cookies or the data collected. Third-party services may include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Privacy Policy</a></li>
            <li><strong>Vercel:</strong> <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Privacy Policy</a></li>
            <li><strong>Social Media Platforms:</strong> Twitter, LinkedIn, GitHub (refer to their respective privacy policies)</li>
          </ul>
        </section>

        {/* Managing Cookies */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. How to Manage and Delete Cookies</h2>
          
          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.1 Browser Settings</h3>
          <p className="mb-3">
            You can control and manage cookies through your browser settings. Most browsers allow you to block, delete, or be notified before a cookie is stored. Here are guides for popular browsers:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mb-6">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Microsoft Edge</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.2 Opt-Out Tools</h3>
          <p className="mb-3">You can opt out of specific tracking services:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
            <li><strong>Do Not Track:</strong> Enable "Do Not Track" in your browser settings (note: not all websites honor this signal)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-200 mb-3 mt-6">5.3 Impact of Blocking Cookies</h3>
          <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 text-yellow-200">
            <p className="text-sm">
              <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website. Some features may not function properly, and we may not be able to remember your preferences.
            </p>
          </div>
        </section>

        {/* Your Consent */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Your Consent</h2>
          <p>
            By using Techies Journal, you consent to the use of cookies as described in this Cookie Policy. If you do not agree, please adjust your browser settings or discontinue use of the website.
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. We will post the updated policy on this page with a revised "Last Updated" date. Please review periodically.
          </p>
        </section>

        {/* More Information */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">8. More Information</h2>
          <p className="mb-3">
            For more information about cookies and online privacy, visit:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
            <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">AllAboutCookies.org</a></li>
            <li><a href="https://cookiepedia.co.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Cookiepedia</a></li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">9. Contact Us</h2>
          <p className="mb-3">If you have questions about our use of cookies, please contact us:</p>
          <div className="bg-black/40 border border-gray-800 rounded-lg p-6 space-y-2">
            <p><strong>Email:</strong> <a href="mailto:rishabh.292002@gmail.com" className="text-cyan-400 hover:underline">rishabh.292002@gmail.com</a></p>
            <p><strong>Website:</strong> <a href="https://rishabhupadhyay.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://rishabhupadhyay.vercel.app/</a></p>
          </div>
        </section>

      </div>
    </main>
  );
}
