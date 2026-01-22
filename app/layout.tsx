import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
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
        className={`${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
