"use client";

import Link from "next/link";

export default function BusuuSample() {
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
          Product Description
        </span>

        <h1 className="text-5xl font-bold mt-4">
          Busuu App Product Description
        </h1>

        <p className="mt-4 opacity-70">
          Spec Project • Product Description
        </p>
      </div>

      <article className="glass rounded-3xl p-8 mt-12 space-y-8 leading-8">

        <div>
          <h2 className="text-3xl font-bold">
            Speak to the World in Their Language with Busuu
          </h2>

          <p className="mt-4 text-xl opacity-80">
            Your Personal Language Coach—Anytime, Anywhere
          </p>
        </div>

        <p>
          Imagine confidently speaking with people from different
          countries, traveling with ease, advancing your career,
          or connecting with new cultures—all in their native language.
        </p>

        <p>
          With Busuu, learning a new language is simpler,
          smarter, and more enjoyable than ever.
          As your everyday language-learning companion,
          Busuu helps you master real-world communication
          skills while building the confidence to use them
          from day one.
        </p>

        <div>
          <h2 className="text-2xl font-bold">
            Learn 14+ Languages at Your Own Pace
          </h2>

          <p className="mt-4">
            Whether you&apos;re dreaming of speaking Spanish,
            Japanese, French, Italian, German, Korean,
            Chinese, Dutch, Russian, or many other global
            languages, Busuu gives you everything you need
            to succeed.
          </p>

          <p className="mt-4">
            Learn whenever and wherever it suits you—at home,
            during your commute, or while traveling.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Why Millions Choose Busuu
          </h2>

          <ul className="mt-6 space-y-4">
            <li>
              ✅ Beginner-Friendly Lessons
            </li>

            <li>
              ✅ Learn at the Right Pace
            </li>

            <li>
              ✅ Learn in a Language You Understand
            </li>

            <li>
              ✅ Study Anywhere, Anytime
            </li>

            <li>
              ✅ Practice Real-Life Conversations
            </li>

            <li>
              ✅ Learn with Native Speakers and Experts
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            More Than Vocabulary—Build Real Confidence
          </h2>

          <p className="mt-4">
            Learning a language isn&apos;t just about memorizing
            words. It&apos;s about gaining the confidence to
            communicate, connect, and express yourself naturally.
          </p>

          <p className="mt-4">
            Busuu helps you progress from basic verbs and
            phrases to meaningful conversations through
            interactive exercises, speaking practice,
            and real-world learning experiences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Stay Connected to Real Language and Culture
          </h2>

          <p className="mt-4">
            Language is constantly evolving—and so is Busuu.
          </p>

          <p className="mt-4">
            Discover regularly updated lessons, engaging
            videos, and authentic content featuring native
            speakers. Immerse yourself in the culture behind
            the language while connecting with learners from
            around the world on Busuu&apos;s international platform.
          </p>

          <p className="mt-4">
            From your very first lesson, you&apos;ll be part of a
            global community that shares your language-learning goals.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Everything You Need in One Place
          </h2>

          <ul className="mt-4 space-y-2">
            <li>• Vocabulary</li>
            <li>• Grammar</li>
            <li>• Speaking</li>
            <li>• Listening</li>
            <li>• Writing</li>
          </ul>

          <p className="mt-6">
            Whether you&apos;re learning for career growth,
            international travel, academic goals,
            personal development, or cultural exploration,
            Busuu provides the tools, guidance,
            and support to help you achieve fluency faster
            and with greater confidence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Start Speaking with Confidence Today
          </h2>

          <p className="mt-4">
            The smarter way to learn, practice,
            and adapt to a new language.
          </p>

          <p className="mt-4">
            Join Busuu now and take your first step toward
            speaking the world&apos;s languages—one conversation
            at a time.
          </p>
        </div>

      </article>

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
