import {
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              DuoWriters
            </h3>

            <p className="opacity-70 mt-4">
              Strategic copywriting that turns
              attention into revenue.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <div className="space-y-2">
              <a href="#about" className="block opacity-70 hover:opacity-100">
                About
              </a>

              <a href="#services" className="block opacity-70 hover:opacity-100">
                Services
              </a>

              <a href="#portfolio" className="block opacity-70 hover:opacity-100">
                Portfolio
              </a>

              <a href="#contact" className="block opacity-70 hover:opacity-100">
                Contact
              </a>
            </div>
          </div>

          <div>
  <h4 className="font-semibold mb-4">
    Connect
  </h4>

  
  <div className="space-y-2">
    <a
      href="LinkedIn is Currenty Unavaialble"
      className="block opacity-70 hover:opacity-100 transition"
    >
      LinkedIn
    </a> 
    

    <a
      href="https://www.instagram.com/duowriters?igsh=NHR1amI4M2F4c24="
      className="block opacity-70 hover:opacity-100 transition"
    >
      Instagram
    </a>

    <a
      href="contact.duowriters@gmail.com"
      className="flex items-center gap-2 opacity-70 hover:opacity-100 transition"
    >
      <Mail size={16} />
      Email
    </a>
  </div>
</div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex justify-between items-center">

          <p className="opacity-60">
            © 2026 DuoWriters Portfolio.
            All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 opacity-70 hover:opacity-100"
          >
            <ArrowUp size={18} />
            Top
          </a>

        </div>

      </div>
    </footer>
  );
}
