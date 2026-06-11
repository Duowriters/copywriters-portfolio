"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section 
    id="booking"
    className="section-divider max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 md:p-16 text-center"
      >
        <span className="text-blue-500 font-medium">
          Let&apos;s Connect 
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Discuss Your Project
        </h2>

        <p className="mt-6 opacity-70 max-w-2xl mx-auto">
          Tell us about your business, project,
          or copywriting needs, and let&apos;s see 
          how we can help.
        </p>

        <div className="mt-10">
          <a
  href="#contact"
  className="
    group
    inline-flex
    items-center
    gap-2
    rounded-2xl
    bg-linear-to-r
    from-blue-600
    to-cyan-500
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
  "
>
  Contact Us

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
        </div>
      </motion.div>
    </section>
  );
}
