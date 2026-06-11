"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-16">
        <span className="text-blue-500 font-medium">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          What Clients Say
        </h2>

        <p className="mt-6 max-w-2xl mx-auto opacity-70">
          Trusted by brands looking to improve
          conversions, engagement, and revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <p className="opacity-80 leading-7">
              &ldquo;{testimonial.feedback}&rdquo;
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-semibold">
                {testimonial.name}
              </h4>

              <p className="opacity-60">
                {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
