import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects/projects-data";

const featuredProjects = projects.slice(0, 3);

const publications = [
  {
    title:
      "Brain Tumor Detection from MRI Images by Fusion of Region Growing and Edge Detection Algorithms",
    status: "Published in ESTIRJ",
  },
  {
    title: "Prediction of crop yield using satellite images",
    status: "Term paper (Data Mining)",
  },
  {
    title: "Optimized Round Robin",
    status: "Writing and research complete, awaiting approval",
  },
  {
    title: "Cancer Detection using ResNet 101",
    status: "Results complete, writing in progress",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 space-y-20">
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.15)] md:p-12 reveal">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,90,31,0.2),_transparent_60%)]" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="eyebrow text-slate-600">Senior Machine Learning Engineer</p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-6xl">
              Shipping ML that survives production pressure.
            </h1>
            <p className="text-lg text-slate-700">
              Senior Machine Learning Engineer (L4) specializing in GenAI, LLMOps,
              and multimodal systems. I build reliable ML products with measurable
              outcomes, fast iteration, and audit-ready workflows.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
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
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="rounded-full bg-slate-900 px-5 py-2 text-white" href="/projects">
                View projects
              </Link>
              <Link
                className="rounded-full border border-slate-300 px-5 py-2"
                href="/case-studies"
              >
                NDA case studies
              </Link>
              <Link
                className="rounded-full border border-slate-300 px-5 py-2"
                href="/publications"
              >
                Publications
              </Link>
              <Link className="rounded-full border border-slate-300 px-5 py-2" href="/resume">
                Resume
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Throughput", value: "~5k posts/sec" },
                { label: "Latency", value: "Sub-200 ms" },
                { label: "Custom dataset", value: "15k images" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-left shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-orange-200/60 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-sky-200/60 blur-2xl" />
              <Image
                src="/headshot.png"
                alt="Portrait of Tauseef Ahmed Memon"
                width={420}
                height={520}
                priority
                className="relative h-auto w-full max-w-sm rounded-3xl border border-slate-200 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 reveal">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-slate-600">Focus Areas</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">What I build</h2>
          </div>
          <p className="max-w-lg text-sm text-slate-600">
            End-to-end ML systems with clear evaluation, deployment-ready pipelines,
            and strong guardrails for reliability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 stagger">
          {[
            {
              title: "GenAI and RAG Systems",
              description:
                "LLM pipelines, retrieval-backed verification, evaluation harnesses, and production monitoring.",
            },
            {
              title: "Computer Vision at Scale",
              description:
                "Detection, segmentation, and authenticity workflows optimized for latency and edge deployment.",
            },
            {
              title: "Recommendation and Personalization",
              description:
                "Hybrid recommenders that handle cold-start users and scale with sparse data signals.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 reveal">
        <div>
          <p className="eyebrow text-slate-600">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Recent work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 stagger">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
            >
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {project.type}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950 group-hover:text-slate-900">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700">{project.summary}</p>
              <span className="mt-4 inline-flex text-sm text-slate-700 underline">
                Read details →
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="rounded-full bg-slate-900 px-5 py-2 text-white" href="/projects">
            Explore all projects
          </Link>
          <Link className="rounded-full border border-slate-300 px-5 py-2" href="/case-studies">
            NDA case studies
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] reveal">
        <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm">
          <p className="eyebrow text-slate-600">Publications</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Research and writing</h2>
          <p className="mt-2 text-sm text-slate-700">
            Published papers, term work, and in-progress research. The publications page
            includes an embedded preview and full links.
          </p>
          <div className="mt-5 space-y-4">
            {publications.map((paper) => (
              <div key={paper.title} className="rounded-2xl border border-slate-200/70 bg-white/95 p-4">
                <p className="text-sm font-semibold text-slate-950">{paper.title}</p>
                <p className="mt-1 text-xs text-slate-600">{paper.status}</p>
              </div>
            ))}
          </div>
          <Link
            className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
            href="/publications"
          >
            View publications
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm">
          <p className="eyebrow text-slate-600">Proof of delivery</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Reliable ML, end to end</h2>
          <p className="mt-2 text-sm text-slate-700">
            I lead full delivery from data and modeling to monitoring, deployment, and
            quality tracking with measurable outcomes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "System focus",
                value: "RAG, CV, Recommenders",
              },
              {
                label: "Deployment",
                value: "APIs, edge, batch",
              },
              {
                label: "Quality",
                value: "Eval harnesses + QA",
              },
              {
                label: "Monitoring",
                value: "Latency, drift, safety",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200/70 bg-white/95 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
