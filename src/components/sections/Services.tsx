"use client";

import { motion } from "framer-motion";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="section-divider max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-16">
        <span className="text-blue-500 font-medium">
          Services
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Copywriting Services
          That Drive Results
        </h2>

        <p className="mt-6 max-w-2xl mx-auto opacity-70">
          Strategic copy designed to increase
          conversions, strengthen positioning,
          and grow revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
  glass
  rounded-3xl
  p-8
  transition-all
  duration-300
  hover:-translate-y-2
  hover:shadow-xl
  hover:border-blue-500/20
"
            >
              <Icon
                className="mb-6 text-blue-500"
                size={36}
              />

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="opacity-70">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
