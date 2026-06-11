"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  const form = e.currentTarget;

  const data = new FormData(form);

  const response = await fetch(
    "https://formspree.io/f/xykajjgy",
    {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.ok) {
    setSubmitted(true);
    form.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  }
}

  return (
    <section
      id="contact"
      className="section-divider max-w-5xl mx-auto px-6 py-32"
    >
      <div className="text-center mb-16">
        <span className="text-blue-500 font-medium">
          Contact
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Let&apos;s Build Something That Converts
        </h2>

        <p className="mt-6 opacity-70">
          Tell us about your project and goals.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-8 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-transparent border border-white/10"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-4 rounded-xl bg-transparent border border-white/10"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="p-4 rounded-xl bg-transparent border border-white/10"
          />

          <select
          name="projectType"
  className="
    w-full
    p-4
    rounded-xl
    border
    border-white/10
    bg-slate-800
    text-white
  "
>
            <option value="">Project Type</option>
<option value="Ad-copy">Ad Copy</option>
<option value="website-copy">Website Copy</option>
<option value="sales-page">Sales Page</option>
<option value="email-marketing">Email Marketing</option>
<option value="brand-messaging">Brand Messaging</option>
          </select>
        </div>

     <select
     name="budget"
  className="
    w-full
    p-4
    rounded-xl
    border
    border-white/10
    bg-slate-800
    text-white
  "
>
          <option value="">Budget Range</option>
<option value="45-85">$45 - $85</option>
<option value="85-150">$85 - $150</option>
<option value="150-250">$150 - $250</option>
<option value="250-plus">$250+</option>
        </select>

        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your project..."
          className="w-full p-4 rounded-xl bg-transparent border border-white/10"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
        >
          Send Inquiry
        </button>

        {submitted && (
          <div className="p-4 rounded-xl border border-green-500/30 text-green-500">
            Thank you! Your inquiry has been received.
          </div>
        )}
      </form>
    </section>
  );
}
