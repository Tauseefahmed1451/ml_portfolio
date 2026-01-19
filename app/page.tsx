export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Tauseef Ahmed Memon</h1>
      <p className="mt-2 text-lg">
        Senior Machine Learning Engineer (L4) -- GenAI, LLMOps, Multimodal AI
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="rounded-md border px-4 py-2" href="/case-studies">
          NDA Case Studies
        </a>
        <a className="rounded-md border px-4 py-2" href="/public-work">
          Public Work
        </a>
        <a className="rounded-md border px-4 py-2" href="/resume">
          Resume
        </a>
        <a
          className="rounded-md border px-4 py-2"
          href="https://www.linkedin.com/in/tauseef-ahmed-memon-15abb5364/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">What I do</h2>
        <p>
          I build production ML systems end-to-end: fine-tuning and serving LLMs
          (LoRA/QLoRA, vLLM), diffusion models (Stable Diffusion/SDXL), multimodal
          pipelines, MLOps on Kubernetes, and monitoring for drift/quality.
        </p>
        <p className="text-sm text-gray-600">
          Note: Many projects are under NDA; case studies below are anonymized.
        </p>
      </section>
    </main>
  );
}
