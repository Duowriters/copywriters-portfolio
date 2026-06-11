"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section className="section-divider max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <span className="text-blue-500 font-medium">
          Writing Samples
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Sample Copy Projects
        </h2>

        <p className="mt-6 max-w-2xl mx-auto opacity-70">
          Examples of the type of copywriting Projects
          We create for businesses and brands.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            className="glass rounded-3xl overflow-hidden"
          >
            <div className="h-48 bg-linear-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
  <span className="text-lg font-semibold opacity-70">
    {post.category}
  </span>
</div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-sm opacity-70 mb-4">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-semibold">
                {post.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
