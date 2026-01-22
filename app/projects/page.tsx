import Link from "next/link";
import { projects } from "./projects-data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:p-12 reveal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,90,31,0.18),_transparent_55%)]" />
        <div className="relative space-y-5">
          <p className="eyebrow text-slate-700">Project Portfolio</p>
          <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
            Production ML systems that ship, scale, and stay reliable.
          </h1>
          <p className="max-w-3xl text-base text-slate-700">
            End-to-end work across GenAI, computer vision, and recommender systems. Each
            project breaks down goals, architecture, tradeoffs, and measurable impact.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1">
              12+ deployments
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1">
              CV, LLM, and multimodal
            </span>
            <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1">
              Audit-ready outputs
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-6 reveal">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-slate-600">All Projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Deep dives into real ML delivery
            </h2>
          </div>
          <p className="max-w-lg text-sm text-slate-600">
            Each card links to a full breakdown of decisions, metrics, and delivery
            details.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 stagger">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {project.type}
                </span>
                <span className="text-xs text-slate-500">View details →</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950 group-hover:text-slate-900">
                {project.title}
              </h2>
              <p className="mt-3 text-sm text-slate-700">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6 reveal">
        <div>
          <p className="eyebrow text-slate-600">Demo Videos</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">
            Walkthroughs and live demos
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Live walkthroughs of retrieval pipelines, document quality checks, and
            explainable evaluation outputs.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 stagger">
          {projects
            .filter((project) => project.video)
            .map((project) => (
              <div
                key={project.slug}
                className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Demo
                  </span>
                  <Link className="text-xs text-slate-600 underline" href={`/projects/${project.slug}`}>
                    Full details
                  </Link>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {project.video?.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {project.video?.description}
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
                  <video
                    controls
                    preload="metadata"
                    className="h-full w-full"
                    src={project.video?.src}
                  />
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm sm:p-10 reveal">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-3">
            <p className="eyebrow text-slate-600">Research</p>
            <h2 className="text-3xl font-semibold text-slate-950">Publications and papers</h2>
            <p className="max-w-2xl text-sm text-slate-700">
              Browse publications, term papers, and in-progress research work with
              embedded previews.
            </p>
          </div>
          <Link
            className="rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
            href="/publications"
          >
            View publications
          </Link>
        </div>
      </section>
    </main>
  );
}
