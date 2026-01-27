"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-32">
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Rishabh Blogs
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Writing about system design, backend engineering, cloud,
              DevOps, and building scalable products.
            </p>
          </div>

          {/* COMMUNITIES */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 mb-5">
              COMMUNITIES
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                System Design
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Backend Engineering
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Cloud & DevOps
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                AI & ML
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a
                  href="https://rishabhupadhyay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  About Me
                </a>
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Blog
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Projects
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 mb-5">
              USEFUL LINKS
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Cookies
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-12" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEGAL */}
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Rishabh Upadhyay. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Rishabhupadhya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/rishabh-upadhyay-880294220"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
