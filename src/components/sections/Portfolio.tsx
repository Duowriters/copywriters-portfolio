"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-divider max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-16">
        <span className="text-blue-500 font-medium">
          Portfolio
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Copywriting Samples
        </h2>

        <p className="mt-6 max-w-2xl mx-auto opacity-70">
          Spec projects created to showcase my copywriting,
          messaging strategy, and conversion-focused thinking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.4,
            }}
            className="
              glass
              rounded-3xl
              p-8
              transition-all
              duration-300
              hover:shadow-xl
            "
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-sm opacity-70">
              {project.category}
            </span>

            <h3 className="text-2xl font-bold mt-5">
              {project.title}
            </h3>

            <p className="mt-4 opacity-70 leading-7">
              {project.description}
            </p>

            <Link
              href={`/samples/${project.slug}`}
              className="
                inline-flex
                items-center
                mt-6
                text-blue-500
                font-medium
                hover:underline
              "
            >
              View Sample →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
