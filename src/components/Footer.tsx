"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF9] border-t border-[#E8E8E6] mt-32">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

          {/* BRAND */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-lg font-bold text-[#1C1C1C] mb-6 tracking-tight">
              Techies Journal
            </h2>
            <p className="text-[#6B6B6B] text-sm leading-[1.7] max-w-xs">
              A collection of technical essays on systems, backend architecture, and the craft of engineering.
            </p>
          </div>

          {/* COMMUNITIES */}
          <div>
            <h4 className="text-eyebrow text-[#9A9A9A] mb-6">
              Sections
            </h4>
            <ul className="space-y-3.5 text-[#6B6B6B] text-sm">
              <li>
                <Link href="/technology" prefetch={true} className="hover:text-[#1C1C1C] transition-colors duration-150">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/system-design" prefetch={true} className="hover:text-[#1C1C1C] transition-colors duration-150">
                  System Design
                </Link>
              </li>
              <li>
                <Link href="/backend-engineering" prefetch={true} className="hover:text-[#1C1C1C] transition-colors duration-150">
                  Backend Engineering
                </Link>
              </li>
              <li>
                <Link href="/cloud-devops" prefetch={true} className="hover:text-[#1C1C1C] transition-colors duration-150">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/ai-ml" prefetch={true} className="hover:text-[#1C1C1C] transition-colors duration-150">
                  AI & ML
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-eyebrow text-[#9A9A9A] mb-6">
              Connect
            </h4>
            <ul className="space-y-3.5 text-[#6B6B6B] text-sm">
              <li>
                <a
                  href="https://rishabhupadhyay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1C1C1C] transition-colors duration-150"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="mailto:rishabh.292002@gmail.com"
                  className="hover:text-[#1C1C1C] transition-colors duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-eyebrow text-[#9A9A9A] mb-6">
              Presence
            </h4>
            <div className="flex gap-5 text-[#6B6B6B]">
              <a
                href="https://github.com/Rishabhupadhya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C1C1C] transition-colors duration-150"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/rishabh-upadhyay-880294220"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1C1C1C] transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:rishabh.292002@gmail.com"
                className="hover:text-[#1C1C1C] transition-colors duration-150"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-[#E8E8E6]">
          <p className="text-[#9A9A9A] text-meta">
            © {new Date().getFullYear()} Techies Journal. Handcrafted for readability.
          </p>
          <div className="flex gap-8 text-eyebrow text-[#6B6B6B]">
            <Link href="/privacy-policy" className="hover:text-[#1C1C1C] transition-colors duration-150">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1C1C1C] transition-colors duration-150">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
