import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingCTA from "@/components/ui/FloatingCTA";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: "DuoWriters | Freelance Copywriters",
    template: "%s | Freelance Copywriters",
  },

  description:
    "Professional freelance copywriters helping brands increase conversions, generate more leads, and grow revenue through persuasive copywriting.",

  keywords: [
    "copywriter",
    "freelance copywriter",
    "website copywriting",
    "sales page copywriter",
    "email marketing",
    "landing page copywriter",
    "conversion copywriting",
  ],

  authors: [
    {
      name: "Duowriters",
    },
  ],

  creator: "DuoWriters",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Words That Sell. Copy That Converts.",
    description:
      "Helping brands turn attention into revenue through strategic copywriting.",
    type: "website",
    siteName: "Freelance Copywriters",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Words That Sell. Copy That Converts.",
    description:
      "Helping brands turn attention into revenue through strategic copywriting.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider>
          <ScrollProgress />
          <FloatingCTA />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
