import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Tauseef Ahmed Memon</h1>
          <p className="mt-2 text-lg">
            Senior Machine Learning Engineer (L4) -- GenAI, LLMOps, Multimodal AI
          </p>
          <p className="mt-4 text-base text-gray-700">
            I build production ML systems end-to-end: fine-tuning and serving LLMs
            (LoRA/QLoRA, vLLM), diffusion models (Stable Diffusion/SDXL), multimodal
            pipelines, MLOps on Kubernetes, and monitoring for drift and quality.
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Many projects are under NDA; the case studies are anonymized and focus
            on architecture, constraints, and measurable outcomes.
          </p>
          <p className="mt-6 text-sm text-gray-700">
            Explore:{" "}
            <Link className="underline" href="/case-studies">
              NDA Case Studies
            </Link>{" "}
            ·{" "}
            <Link className="underline" href="/public-work">
              Public Work
            </Link>
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/headshot.png"
            alt="Portrait of Tauseef Ahmed Memon"
            width={420}
            height={520}
            priority
            className="h-auto w-full max-w-sm rounded-2xl border border-gray-200 object-cover shadow-sm"
          />
        </div>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="text-xl font-semibold">What I do</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>Production LLM and diffusion model fine-tuning and serving.</li>
          <li>Multimodal pipelines, RAG systems, and retrieval-backed verification.</li>
          <li>End-to-end MLOps on Kubernetes with monitoring and quality gates.</li>
        </ul>
      </section>
    </main>
  );
}
