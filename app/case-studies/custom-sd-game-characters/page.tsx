export default function CaseStudy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      <header className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm reveal">
        <p className="eyebrow text-slate-600">Anonymized Case Study</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">
          Custom Stable Diffusion for Game-style Characters (Anonymized)
        </h1>
        <p className="mt-3 text-slate-700">
          Role: Technical/Project Lead (team of 3). Built fine-tuning + production workflow.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Details anonymized due to NDA. No client identifiers, training data, or proprietary weights.
        </p>
      </header>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Goal</h2>
        <p className="mt-2 text-slate-700">
          Train and deploy a custom diffusion workflow to generate consistent game-style character
          outputs with controllable prompts and reliable inference behavior.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Constraints</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Style consistency across a wide prompt range.</li>
          <li>Inference latency acceptable for production usage.</li>
          <li>Deployment must be stable under burst traffic.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Approach</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Data curation and quality checks (NDA-redacted specifics).</li>
          <li>LoRA fine-tuning with controlled evaluation prompt sets.</li>
          <li>Production workflow for repeatable outputs and rollback safety.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Tradeoffs</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Optimized for style fidelity over broad prompt diversity.</li>
          <li>Accepted longer training cycles to reduce inference-time complexity.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Impact</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Delivered a production-ready generation workflow (details NDA-redacted).</li>
          <li>Consistent stylistic output for game character generation.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Sanitized architecture diagram</h2>
        <figure className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 900 160" role="img" aria-label="Diffusion fine-tuning pipeline">
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
              </marker>
            </defs>
            {[
              { x: 0, label: ["Data", "Curation"] },
              { x: 180, label: ["LoRA", "Fine-tune"] },
              { x: 360, label: ["Eval", "Prompts"] },
              { x: 540, label: ["Inference", "Service"] },
              { x: 720, label: ["Monitor", "Quality"] },
            ].map((box, index) => (
              <g key={box.x}>
                <rect
                  x={box.x + 10}
                  y={40}
                  width={160}
                  height={60}
                  rx={10}
                  fill="#ffffff"
                  stroke="#cbd5f5"
                />
                <text x={box.x + 90} y={66} textAnchor="middle" fill="#0f172a" fontSize="12">
                  <tspan x={box.x + 90} dy="0">
                    {box.label[0]}
                  </tspan>
                  <tspan x={box.x + 90} dy="16">
                    {box.label[1]}
                  </tspan>
                </text>
                {index < 4 ? (
                  <line
                    x1={box.x + 170}
                    y1={70}
                    x2={box.x + 180}
                    y2={70}
                    stroke="#334155"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                  />
                ) : null}
              </g>
            ))}
          </svg>
          <figcaption className="mt-2 text-sm text-slate-600">
            High-level flow only. Training data, prompts, and weights are NDA-redacted.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
