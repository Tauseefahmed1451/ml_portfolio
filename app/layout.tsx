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
        <header className="border-b border-gray-200">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <Link href="/" className="text-lg font-semibold">
                Tauseef Ahmed Memon
              </Link>
              <p className="text-sm text-gray-600">
                Senior Machine Learning Engineer (L4) -- GenAI, LLMOps, Multimodal AI
              </p>
              <p className="text-sm text-gray-600">
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
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                className="rounded-md border px-3 py-1"
                href="mailto:tauseefahmed.tam@gmail.com"
              >
                tauseefahmed.tam@gmail.com
              </a>
              <a
                className="rounded-md border px-3 py-1"
                href="https://www.linkedin.com/in/tauseef-ahmed-memon-15abb5364/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Link className="rounded-md border px-3 py-1" href="/resume">
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
