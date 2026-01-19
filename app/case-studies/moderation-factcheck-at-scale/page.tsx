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
        <h2 className="text-xl font-semibold">Problem</h2>
        <p>
          Build a high-throughput pipeline that can extract claims, verify them using retrieval,
          apply content moderation, and produce a final decision/ranking signal under strict latency
          and reliability constraints.
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
        <h2 className="text-xl font-semibold">Architecture (high-level)</h2>
        <ul className="list-disc pl-6">
          <li>Ingestion -&gt; queue/worker pool</li>
          <li>LLM claim extraction</li>
          <li>Retriever (search/index) -&gt; evidence collection</li>
          <li>Verifier/scorer + moderation layer</li>
          <li>Storage + analytics + monitoring</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Leadership</h2>
        <ul className="list-disc pl-6">
          <li>Led delivery and execution planning; owned technical decisions</li>
          <li>Mentored engineers; ran code reviews; enforced quality gates</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Results</h2>
        <ul className="list-disc pl-6">
          <li>System designed to handle ~5k posts/sec throughput (anonymized benchmark)</li>
          <li>Improved quality and safety via verification + guardrails (details NDA-redacted)</li>
        </ul>
      </section>
    </main>
  );
}
