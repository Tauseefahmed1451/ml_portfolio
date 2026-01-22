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
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm reveal">
        <p className="eyebrow text-slate-600">NDA Case Studies</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Anonymized delivery write-ups
        </h1>
        <p className="mt-3 text-slate-700">
          Client details are anonymized. These write-ups focus on architecture,
          constraints, tradeoffs, and measurable outcomes without exposing
          proprietary code or data.
        </p>
      </section>

      <div className="space-y-4 stagger">
        {studies.map((s) => (
          <div
            key={s.slug}
            className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-950">
              <Link href={`/case-studies/${s.slug}`}>{s.title}</Link>
            </h2>
            <p className="mt-2 text-sm text-slate-700">{s.subtitle}</p>
            <Link
              className="mt-3 inline-block text-sm text-slate-700 underline"
              href={`/case-studies/${s.slug}`}
            >
              Read case study -&gt;
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
