/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white">
      {/* Top big section */}
      <div
        className="relative text-center px-6 md:px-8 py-12"
        style={{
          backgroundColor: "#6b1812",
          // subtle dotted texture on top of the red
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-4xl font-light mb-3"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            An Independent Scientology Global Community
          </h2>

          <p className="text-xs md:text-sm opacity-90 max-w-2xl mx-auto">
            AOGP International is accessible in more than 18 countries virtually around the world.
          </p>

        </div>
      </div>

      {/* Bottom thin bar */}
      <div className="w-full" style={{ backgroundColor: "#4b0e0c" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left links */}
          <div className="flex items-center gap-3 text-xs text-white/90">
            <a
              href="mailto:reverendqs@gmail.com"
              className="hover:underline-offset-2 hover:text-white transition-colors"
            >
            Contact
            </a>
            <span className="opacity-60">|</span>
            <a
              href="#"
              className="hover:underline-offset-2 hover:text-white transition-colors"
            >
              Legal
            </a>
            <span className="opacity-60">|</span>
            <a
              href="#"
              className="hover:underline-offset-2 hover:text-white transition-colors"
            >
              Privacy
            </a>
          </div>

          {/* Center copyright: on small screens move below */}
          <div className="text-xs text-white/90 order-last md:order-0 md:text-center w-full md:w-auto md:flex-1">
            © {new Date().getFullYear()} AOGP International International Community
          </div>

          {/* Right social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <FaFacebookF size={12} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <FaInstagram size={12} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <FaTwitter size={12} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <FaYoutube size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
