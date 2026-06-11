"use client";

import { motion } from "framer-motion";
import { results } from "@/data/results";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedCounter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div ref={ref}>
      {isInView ? (
        <CountUp
          end={value}
          duration={2}
          prefix={prefix}
          suffix={suffix}
        />
      ) : (
        0
      )}
    </div>
  );
}

export default function Results() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-16">
        <span className="text-blue-500 font-medium">
          Results
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Numbers That Matter
        </h2>

        <p className="mt-6 max-w-2xl mx-auto opacity-70">
          Strategic copywriting focused on measurable business outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {results.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            className="glass rounded-3xl p-8 text-center"
          >
          <h3 className="text-5xl font-bold text-blue-500">
  <AnimatedCounter
    value={stat.value}
    prefix={stat.prefix}
    suffix={stat.suffix}
  />
</h3>

            <p className="mt-4 opacity-70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
