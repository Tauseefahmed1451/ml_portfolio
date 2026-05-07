export default function CaseStudy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      <header className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm reveal">
        <p className="eyebrow text-slate-600">Anonymized Case Study</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">
          Real-time Correctional Facility Camera Monitoring (Anonymized)
        </h1>
        <p className="mt-3 text-slate-700">
          Role: Technical/Project Lead (team of 4). Built an edge-deployed pipeline for
          violence, medical distress, and camera tampering alerts.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Details anonymized due to NDA. No facility identifiers, private footage,
          incident labels, or proprietary deployment details are exposed.
        </p>
      </header>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Goal</h2>
        <p className="mt-2 text-slate-700">
          Build a real-time video monitoring system for correctional facilities that
          detects violence, medical distress indicators, and camera tampering, then
          routes alerts to authorities with low latency and high operational reliability.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Constraints</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Near real-time alerting requirements under continuous stream load.</li>
          <li>High precision needed to reduce alarm fatigue for officers.</li>
          <li>Edge deployment constraints on NVIDIA Jetson Thor hardware.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Approach</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>DeepStream ingest and stream orchestration for multi-camera processing.</li>
          <li>YOLOv8n-pose for person/pose signals and movement cues.</li>
          <li>LSTM temporal modeling for sequence-aware incident scoring.</li>
          <li>VLM-assisted validation for context-aware verification.</li>
          <li>Alert routing and escalation rules for critical incidents.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Tradeoffs</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Lower latency thresholds increase sensitivity but may raise false alerts.</li>
          <li>Edge hardware limits required balancing model depth with throughput.</li>
          <li>Tiered scoring and validation improved confidence at modest compute cost.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Impact</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>Delivered real-time alerts for violence, medical distress, and tampering events.</li>
          <li>Operationalized an edge-ready monitoring workflow for correctional environments.</li>
          <li>Led cross-functional execution across a 4-engineer delivery team.</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm reveal">
        <h2 className="text-2xl font-semibold text-slate-950">Sanitized architecture diagram</h2>
        <figure className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 900 160" role="img" aria-label="Real-time correctional monitoring pipeline">
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
              { x: 0, label: ["Streams", "DeepStream"] },
              { x: 180, label: ["YOLOv8n", "Pose"] },
              { x: 360, label: ["LSTM", "Temporal"] },
              { x: 540, label: ["VLM", "Validation"] },
              { x: 720, label: ["Alerts", "Escalation"] },
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
            High-level flow only. Model weights, private data, and deployment internals are NDA-redacted.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
