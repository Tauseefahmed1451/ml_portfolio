import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tauseefml.vercel.app"),
  title: {
    default: "Tauseef Ahmed Memon | Senior Machine Learning Engineer",
    template: "%s | Tauseef Ahmed Memon",
  },
  description:
    "Senior Machine Learning Engineer (L4) specializing in GenAI, LLMOps, and multimodal AI. Building production ML systems, fine-tuning LLMs and diffusion models, and leading delivery teams.",
  openGraph: {
    title: "Tauseef Ahmed Memon | Senior Machine Learning Engineer",
    description:
      "GenAI, LLMOps, and multimodal AI. Production ML systems, LLM/diffusion fine-tuning, and end-to-end delivery leadership.",
    url: "https://tauseefml.vercel.app",
    siteName: "Tauseef Ahmed Memon",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tauseef Ahmed Memon - Senior Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tauseef Ahmed Memon | Senior Machine Learning Engineer",
    description:
      "GenAI, LLMOps, and multimodal AI. Production ML systems, LLM/diffusion fine-tuning, and delivery leadership.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <Link href="/" className="text-lg font-semibold">
                Tauseef Ahmed Memon
              </Link>
              <p className="text-sm text-slate-600">
                Senior Machine Learning Engineer (L4) -- GenAI, LLMOps, Multimodal AI
              </p>
              <p className="text-sm text-slate-600">
                Naval Anchorage, Islamabad, Pakistan |{" "}
                <a
                  className="underline"
                  href="https://wa.me/923352121095"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp +92 335 2121095
                </a>
              </p>
              <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
                <Link className="underline" href="/projects">
                  Projects
                </Link>
                <Link className="underline" href="/case-studies">
                  NDA Case Studies
                </Link>
              </nav>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-full border border-slate-300 px-4 py-2"
                href="mailto:tauseefahmed.tam@gmail.com"
              >
                tauseefahmed.tam@gmail.com
              </a>
              <a
                className="rounded-full border border-slate-300 px-4 py-2"
                href="https://www.linkedin.com/in/tauseef-ahmed-memon-15abb5364/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Link className="rounded-full bg-slate-900 px-4 py-2 text-white" href="/resume">
                Resume
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
