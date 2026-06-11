"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  "About",
  "Services",
  "Portfolio",
  "Contact",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="glass mt-4 rounded-2xl px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            DuoWriters
          </div>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400 transition"
              >
                {link}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </nav>
        {mobileOpen && (
  <div className="md:hidden mt-4 border-t border-white/10 pt-4">
    <div className="flex flex-col gap-4">

      <a
        href="#about"
        onClick={() => setMobileOpen(false)}
      >
        About
      </a>

      <a
        href="#services"
        onClick={() => setMobileOpen(false)}
      >
        Services
      </a>

      <a
        href="#portfolio"
        onClick={() => setMobileOpen(false)}
      >
        Portfolio
      </a>

      <a
        href="#contact"
        onClick={() => setMobileOpen(false)}
      >
        Contact
      </a>

    </div>
  </div>
)}
        <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="md:hidden p-2"
  aria-label="Toggle menu"
>
  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
</button>
      </div>
    </header>
  );
}
