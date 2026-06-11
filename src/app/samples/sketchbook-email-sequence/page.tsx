"use client";

import Link from "next/link";

export default function SketchbookEmailSequence() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/#portfolio"
        className="text-blue-500 hover:underline"
      >
        ← Back to Portfolio
      </Link>

      <div className="mt-8">
        <span className="text-blue-500 font-medium">
          Email Marketing
        </span>

        <h1 className="text-5xl font-bold mt-4">
          Sketchbook Welcome Email Sequence
        </h1>

        <p className="mt-4 opacity-70">
          Spec Project • 3-Email Onboarding & Conversion Sequence
        </p>
      </div>

      <div className="space-y-8 mt-12">

        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Email 1 — Welcome Email
          </h2>

          <div className="whitespace-pre-line leading-8">
{`Hey,

Every great artist starts with a single sketch.

The difference between an idea that stays in your head and a masterpiece that comes to life is simply getting started.

Welcome to Sketchbook — the place where imagination meets creation.

Whether you're a professional artist, a beginner exploring your creativity, or someone who simply enjoys doodling during a coffee break, Sketchbook gives you the tools to turn your thoughts into something real.

Here's what you'll get:

✓ Powerful sketching tools designed for every skill level
✓ A simple, intuitive creative experience
✓ The freedom to draw anytime, anywhere
✓ A space to experiment, learn, and improve with every sketch

And for a limited time, you'll receive up to 30% OFF when you log in and get started today.

Imagine where your creativity could take you in the next 30 days.

A new skill.
A new hobby.
A portfolio piece.
Or even the artwork you've always wanted to create but never started.

You don't need perfect talent.
You don't need years of experience.

You just need a place to begin.

Start creating today and turn your ideas into sketches you'll be proud of.

👉 Claim Your Discount & Start Sketching Now

See you inside,

The Sketchbook Team`}
          </div>
        </div>

        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Email 2 — Premium Upgrade Offer
          </h2>

          <div className="whitespace-pre-line leading-8">
{`Hi First Name,

Every great artwork starts with a simple idea.

Now it's time to give your creativity the tools it deserves.

For the next 72 hours, enjoy 40% OFF Sketchbook Premium with code CREATE40.

With Premium, you'll unlock:

✓ Premium brush collections
✓ Unlimited layers
✓ Cloud backup & sync
✓ Advanced export tools

More tools. Fewer limits. More room to create your best work.

Whether you're sketching for fun or working on your next masterpiece, Premium helps you stay focused on what matters most—creating.

⏰ Your exclusive 40% discount ends in 72 hours.

👉 Upgrade to Sketchbook Premium Now

Thank you for creating with us,

The Sketchbook Team

P.S. Your next favorite artwork could start today.`}
          </div>
        </div>

        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Email 3 — Final Reminder
          </h2>

          <div className="whitespace-pre-line leading-8">
{`Hi First Name,

Some sketches come together instantly.

Others take time before everything clicks.

If you've been thinking about upgrading, this is a quick reminder that your 40% off Sketchbook Premium offer expires tomorrow.

With Premium, you'll unlock:

✓ Premium brush collections
✓ Unlimited layers
✓ Cloud backup & sync
✓ Advanced export tools

More importantly, you'll have fewer limits between your ideas and your finished artwork.

Use code CREATE40 before tomorrow to claim your discount.

⏰ After tomorrow, this offer will no longer be available.

👉 Upgrade to Sketchbook Premium

Happy creating,

The Sketchbook Team

P.S. Your next favorite piece could start with a single stroke today.`}
          </div>
        </div>

      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/#booking"
          className="
            px-8
            py-4
            rounded-xl
            bg-blue-600
            hover:bg-blue-500
            transition
            text-white
            font-medium
          "
        >
          Book a Call
        </Link>
      </div>
    </main>
  );
}
