import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/projects-data";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.25),_transparent_55%)]" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Tauseef Ahmed Memon
            </h1>
            <p className="mt-3 text-lg text-slate-700">
              Senior Machine Learning Engineer (L4) -- GenAI, LLMOps, Multimodal AI
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
              <span>Naval Anchorage, Islamabad, Pakistan</span>
              <a className="underline" href="mailto:tauseefahmed.tam@gmail.com">
                tauseefahmed.tam@gmail.com
              </a>
              <a
                className="underline"
                href="https://wa.me/923352121095"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp +92 335 2121095
              </a>
              <a
                className="underline"
                href="https://www.linkedin.com/in/tauseef-ahmed-memon-15abb5364/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-6 text-2xl font-semibold text-slate-900">
              Building production-grade GenAI, LLMOps, and multimodal systems.
            </p>
            <p className="mt-4 text-base text-slate-700">
              I design and ship end-to-end ML systems: LLM fine-tuning, diffusion
              pipelines, retrieval-backed verification, and Kubernetes MLOps with
              monitoring and quality gates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link className="rounded-full bg-slate-900 px-4 py-2 text-white" href="/projects">
                View projects
              </Link>
              <Link className="rounded-full border border-slate-300 px-4 py-2" href="/case-studies">
                NDA case studies
              </Link>
              <Link className="rounded-full border border-slate-300 px-4 py-2" href="/resume">
                Resume
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Throughput", value: "~5k posts/sec" },
                { label: "Latency", value: "Sub-200 ms" },
                { label: "Quality Lift", value: "+12 mAP" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-teal-200/60 blur-2xl" />
              <Image
                src="/headshot.png"
                alt="Portrait of Tauseef Ahmed Memon"
                width={420}
                height={520}
                priority
                className="relative h-auto w-full max-w-sm rounded-2xl border border-slate-200 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "LLM + GenAI Systems",
            description:
              "Fine-tuning, inference optimization, and deployment of LLMs and diffusion models with production constraints.",
          },
          {
            title: "Multimodal Intelligence",
            description:
              "RAG pipelines, vision-language workflows, and verification systems that are explainable and auditable.",
          },
          {
            title: "MLOps at Scale",
            description:
              "Kubernetes-based deployment, monitoring, drift detection, and reliable delivery pipelines.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-700">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Featured Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Recent work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {project.type}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-teal-700">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700">{project.summary}</p>
              <span className="mt-4 inline-flex text-sm text-teal-700">
                Read details →
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="rounded-full bg-slate-900 px-4 py-2 text-white" href="/projects">
            Explore all projects
          </Link>
          <Link className="rounded-full border border-slate-300 px-4 py-2" href="/case-studies">
            NDA case studies
          </Link>
        </div>
      </section>
    </main>
  );
}
