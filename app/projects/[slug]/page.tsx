import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "../projects-data";

type PageProps = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          {project.type}
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
        <p className="max-w-3xl text-base text-slate-700">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.relatedCaseStudy ? (
          <Link className="text-sm text-teal-700 underline" href={project.relatedCaseStudy}>
            Read the anonymized case study →
          </Link>
        ) : null}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              {project.overview.map((paragraph, index) => (
                <p key={`${project.slug}-overview-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Goals</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">What I did</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">How I did it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.howIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          {project.video ? (
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Demo video
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {project.video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{project.video.description}</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
                <video
                  controls
                  preload="metadata"
                  className="h-full w-full"
                  src={project.video.src}
                />
              </div>
            </div>
          ) : null}

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Architecture</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Tradeoffs</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Impact</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm">
        <Link className="text-slate-600 underline" href="/projects">
          ← Back to projects
        </Link>
        <div className="flex flex-wrap gap-3">
          <Link className="text-slate-600 underline" href="/case-studies">
            NDA case studies
          </Link>
          <Link className="text-slate-600 underline" href="/resume">
            Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
