import Link from "next/link";

const studies = [
  {
    slug: "moderation-factcheck-at-scale",
    title: "Fact-check + Moderation Pipeline at Scale (Anonymized)",
    subtitle:
      "Designed for ~5k posts/sec; led team of 6; retrieval-backed verification + guardrails.",
  },
  {
    slug: "custom-sd-game-characters",
    title: "Custom Stable Diffusion for Game-style Characters (Anonymized)",
    subtitle:
      "Led team of 3; fine-tuning + production workflow for consistent style generation.",
  },
];

export default function CaseStudies() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold">NDA Case Studies</h1>
      <p className="mt-2 text-gray-700">
        Client details are anonymized. These write-ups focus on architecture,
        constraints, tradeoffs, and measurable outcomes -- without exposing
        proprietary code/data.
      </p>

      <div className="mt-8 space-y-4">
        {studies.map((s) => (
          <div key={s.slug} className="rounded-lg border p-4">
            <h2 className="text-lg font-semibold">
              <Link href={`/case-studies/${s.slug}`}>{s.title}</Link>
            </h2>
            <p className="mt-1 text-gray-700">{s.subtitle}</p>
            <Link className="mt-2 inline-block underline" href={`/case-studies/${s.slug}`}>
              Read case study -&gt;
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
