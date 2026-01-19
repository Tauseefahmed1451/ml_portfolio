export default function CaseStudy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">
          Custom Stable Diffusion for Game-style Characters (Anonymized)
        </h1>
        <p className="mt-2 text-gray-700">
          Role: Technical/Project Lead (team of 3). Built fine-tuning + production workflow.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Details anonymized due to NDA. No client identifiers, training data, or proprietary weights.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Problem</h2>
        <p>
          Train and deploy a custom diffusion workflow to generate consistent game-style character
          outputs with controllable prompts and reliable inference behavior.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Approach</h2>
        <ul className="list-disc pl-6">
          <li>Data curation and quality checks (NDA-redacted specifics)</li>
          <li>Fine-tuning strategy (e.g., LoRA) + evaluation prompts</li>
          <li>Deployment workflow for consistent outputs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Leadership</h2>
        <ul className="list-disc pl-6">
          <li>Led project execution, milestones, and delivery</li>
          <li>Mentored and reviewed code for maintainability and correctness</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Results</h2>
        <ul className="list-disc pl-6">
          <li>Delivered a production-ready generation workflow (details NDA-redacted)</li>
          <li>Consistent stylistic output for game character generation</li>
        </ul>
      </section>
    </main>
  );
}
