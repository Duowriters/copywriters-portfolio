"use client";

import { motion } from "framer-motion";
import SkillBar from "@/components/ui/SkillBar";

const skills = [
  "Website Copywriting",
  "Sales Pages",
  "Email Marketing",
  "SEO Copywriting",
  "Brand Messaging",
  "Landing Pages",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-divider max-w-7xl mx-auto px-6 py-32"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 font-medium">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Building persuasive copy that helps
            businesses communicate clearly and
            connect with their audience.
          </h2>

          <p className="mt-6 opacity-70 leading-8">
            We&apos;re  a freelance copywriters focused on
            Ad copy,website copy, landing pages, Email
            marketing, and brand messaging. I enjoy
            studing customer psychology,
            marketing strategy, and Conversion
            principles to create copy that is clear,
            engaging, and action-oriented.
          </p>

          <p className="mt-4 opacity-70 leading-8">
            Our goal is simple: help businesses
            present thier value effectively through
            messaging that builds trust and
            encourages action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">
            Areas of Focus
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 rounded-xl border border-white/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
  <div className="glass rounded-2xl p-6">
    <h3 className="font-semibold mb-2">
      Conversion Copywriting
    </h3>
    <p className="opacity-70 text-sm">
      Messaging designed to increase leads,
      sales, and customer action.
    </p>
  </div>

  <div className="glass rounded-2xl p-6">
    <h3 className="font-semibold mb-2">
      Brand Positioning
    </h3>
    <p className="opacity-70 text-sm">
      Create a distinct voice that
      separates your brand from competitors.
    </p>
  </div>

  <div className="glass rounded-2xl p-6">
    <h3 className="font-semibold mb-2">
      Email Marketing
    </h3>
    <p className="opacity-70 text-sm">
      Campaigns that nurture prospects
      and drive revenue.
    </p>
  </div>
</div>
<div className="mt-16 max-w-2xl mx-auto space-y-6">
  <SkillBar
    label="Conversion Copywriting"
    value={85}
  />

  <SkillBar
    label="Landing Pages"
    value={82}
  />

  <SkillBar
    label="Email Marketing"
    value={80}
  />

  <SkillBar
    label="Brand Messaging"
    value={84}
  />
</div>
    </section>
  );
}
