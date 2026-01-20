import Link from "next/link";
import { projects } from "./projects-data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
          Project Portfolio
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Projects that ship GenAI into production
        </h1>
        <p className="max-w-3xl text-base text-slate-700">
          A focused collection of end-to-end ML systems, LLM pipelines, and
          multimodal workflows. Each project page includes what I did, how I did
          it, architecture notes, tradeoffs, and measurable impact.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {project.type}
              </span>
              <span className="text-xs text-slate-400">View details →</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-teal-700">
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
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Demo Videos
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Walkthroughs</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            These demos show live walkthroughs of real workflows: retrieval
            pipelines, document quality checks, and explainable evaluation
            outputs.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects
            .filter((project) => project.video)
            .map((project) => (
              <div
                key={project.slug}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Demo
                  </span>
                  <Link className="text-xs text-teal-700 underline" href={`/projects/${project.slug}`}>
                    Full details
                  </Link>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {project.video?.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
                  {project.video?.description}
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-900">
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
    </main>
  );
}
