"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section 
    id="hero"
    className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div
  className="
    absolute
    inset-0
    -z-30
    bg-linear-to-b
    from-blue-50
    via-transparent
    to-transparent
    dark:hidden
  "
/>

  <motion.div
  animate={{
    y: [0, -40, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-20
    left-10
    h-72
    w-72
    rounded-full
    bg-blue-200/50
    dark:bg-blue-500/20
    blur-3xl
    animate-pulse
  "
/>
  <div
    className="
      absolute
      bottom-10
      right-10
      h-96
      w-96
      rounded-full
      bg-cyan-200/50
      dark:bg-cyan-500/20
      blur-3xl
      animate-pulse
    "
  />

</div>

      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Clear Messaging.
          <br />
          <span className="gradient-text">
            Persuasive Copy.
          </span>
        </motion.h1>

        <p className="mt-8 text-xl opacity-70">
          Helping business communicate clearly
          through persuasive,
          conversion-focused copywriting.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
  <Button
  onClick={() =>
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  View Portfolio
</Button>

  <Button
  variant="secondary"
  onClick={() =>
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Book Discovery Call
</Button>
</div>
<div className="grid grid-cols-3 gap-8 mt-20">
  <div
  className="
    absolute
    inset-0
    -z-20
    opacity-30
    dark:hidden
    bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)]
    bg-size-[60px_60px]
  "
/>

<div
  className="
    absolute
    inset-0
    -z-20
    hidden
    dark:block
    opacity-20
    bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
    bg-size-[60px_60px]
  "
/>
  <div>
  <h3 className="text-3xl font-bold">
    Website Copy
  </h3>
  <p className="opacity-60">
    Clear messaging that converts visitors.
  </p>
</div>

<div>
  <h3 className="text-3xl font-bold">
    Email Marketing
  </h3>
  <p className="opacity-60">
    Emails designed to engage and sell.
  </p>
</div>

<div>
  <h3 className="text-3xl font-bold">
    Brand Messaging
  </h3>
  <p className="opacity-60">
    Consistent voice and positioning.
  </p>
</div>
</div>
      </div>
    </section>
  );
}
