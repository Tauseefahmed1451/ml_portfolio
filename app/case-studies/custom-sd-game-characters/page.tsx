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
        <h2 className="text-xl font-semibold">Goal</h2>
        <p>
          Train and deploy a custom diffusion workflow to generate consistent game-style character
          outputs with controllable prompts and reliable inference behavior.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Constraints</h2>
        <ul className="list-disc pl-6">
          <li>Style consistency across a wide prompt range.</li>
          <li>Inference latency acceptable for production usage.</li>
          <li>Deployment must be stable under burst traffic.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Approach</h2>
        <ul className="list-disc pl-6">
          <li>Data curation and quality checks (NDA-redacted specifics).</li>
          <li>LoRA fine-tuning with controlled evaluation prompt sets.</li>
          <li>Production workflow for repeatable outputs and rollback safety.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tradeoffs</h2>
        <ul className="list-disc pl-6">
          <li>Optimized for style fidelity over broad prompt diversity.</li>
          <li>Accepted longer training cycles to reduce inference-time complexity.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="list-disc pl-6">
          <li>Delivered a production-ready generation workflow (details NDA-redacted).</li>
          <li>Consistent stylistic output for game character generation.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sanitized architecture diagram</h2>
        <figure className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
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
          <figcaption className="mt-2 text-sm text-gray-600">
            High-level flow only. Training data, prompts, and weights are NDA-redacted.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
