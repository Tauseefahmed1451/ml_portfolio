export default function CaseStudy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">
          Fact-check + Moderation Pipeline at Scale (Anonymized)
        </h1>
        <p className="mt-2 text-gray-700">
          Role: Technical/Project Lead (team of 6). Designed system to handle ~5k posts/sec.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Details anonymized due to NDA. No client identifiers, code, prompts, or proprietary data.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Goal</h2>
        <p>
          Build a high-throughput pipeline that extracts claims, verifies them with retrieval, applies
          moderation, and emits a final decision/ranking signal within strict latency and reliability
          requirements.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Constraints</h2>
        <ul className="list-disc pl-6">
          <li>Throughput target: ~5k posts/sec (burst handling)</li>
          <li>Reliability: graceful degradation and safe fallbacks</li>
          <li>Observability: drift/quality monitoring + alerting</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Approach</h2>
        <ul className="list-disc pl-6">
          <li>Stream ingestion into a queue/worker pool for elastic scale.</li>
          <li>LLM claim extraction with caching for repeated templates.</li>
          <li>Retriever-backed evidence collection with a searchable index.</li>
          <li>Verifier/scorer combined with rule-based moderation guards.</li>
          <li>Metrics, drift checks, and alerting for safety and quality.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Tradeoffs</h2>
        <ul className="list-disc pl-6">
          <li>Optimized for throughput and safety over perfect recall.</li>
          <li>Used tiered verification to contain latency while preserving quality.</li>
          <li>Preferred interpretable guardrails for high-risk categories.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="list-disc pl-6">
          <li>System designed to handle ~5k posts/sec throughput (anonymized benchmark)</li>
          <li>Improved safety and precision with retrieval-backed verification (NDA-safe)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sanitized architecture diagram</h2>
        <figure className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
          <svg viewBox="0 0 900 160" role="img" aria-label="High-level pipeline architecture">
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
              { x: 0, label: ["Ingestion", "Queue"] },
              { x: 180, label: ["LLM", "Claim Extract"] },
              { x: 360, label: ["Retriever", "Evidence"] },
              { x: 540, label: ["Verify +", "Moderate"] },
              { x: 720, label: ["Decision", "Analytics"] },
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
            High-level flow only. No client-specific components, prompts, or data shown.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
