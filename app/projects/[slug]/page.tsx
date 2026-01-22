import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../projects-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Pre-generate all project pages at build time
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
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

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-12">
      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm sm:p-10 reveal">
        <p className="eyebrow text-slate-600">{project.type}</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-700">{project.summary}</p>
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
          <Link className="mt-2 inline-block text-sm text-slate-700 underline" href={project.relatedCaseStudy}>
            Read the anonymized case study →
          </Link>
        ) : null}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-2xl font-semibold text-slate-950">Overview</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-700">
              {project.overview.map((paragraph, index) => (
                <p key={`${project.slug}-overview-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-2xl font-semibold text-slate-950">Goals</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-2xl font-semibold text-slate-950">What I did</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-2xl font-semibold text-slate-950">How I did it</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.howIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          {project.video ? (
            <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
              <p className="eyebrow text-slate-600">
                Demo video
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                {project.video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{project.video.description}</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
                <video
                  controls
                  preload="metadata"
                  className="h-full w-full"
                  src={project.video.src}
                />
              </div>
            </div>
          ) : null}

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-xl font-semibold text-slate-950">Architecture</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-xl font-semibold text-slate-950">Tradeoffs</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.tradeoffs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
            <h2 className="text-xl font-semibold text-slate-950">Impact</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm">
        <Link className="text-slate-700 underline" href="/projects">
          ← Back to projects
        </Link>
        <div className="flex flex-wrap gap-3">
          <Link className="text-slate-700 underline" href="/case-studies">
            NDA case studies
          </Link>
          <Link className="text-slate-700 underline" href="/resume">
            Resume
          </Link>
          <Link className="text-slate-700 underline" href="/publications">
            Publications
          </Link>
        </div>
      </section>
    </main>
  );
}
