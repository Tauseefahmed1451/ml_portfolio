export type Project = {
  slug: string;
  title: string;
  summary: string;
  type: "Demo" | "Anonymized" | "Production";
  tags: string[];
  overview: string[];
  goals: string[];
  whatIDid: string[];
  howIDid: string[];
  architecture: string[];
  tradeoffs: string[];
  impact: string[];
  relatedCaseStudy?: string;
  video?: {
    src: string;
    title: string;
    description: string;
  };
};

export const projects: Project[] = [
  {
    slug: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant (Demo)",
    summary:
      "Retrieval-augmented assistant that grounds answers in a curated corpus with citations and confidence.",
    type: "Demo",
    tags: ["RAG", "LLM", "Retrieval", "Evaluation", "FastAPI"],
    overview: [
      "This demo showcases an end-to-end RAG pipeline: document ingestion, chunking, embedding, retrieval, and a grounded LLM response with citations.",
      "The focus is on reliability and observability: what was retrieved, why it was retrieved, and how the answer was formed.",
    ],
    goals: [
      "Ground answers in source material with citations.",
      "Keep latency low while preserving answer quality.",
      "Expose evaluation signals that make the system auditable.",
    ],
    whatIDid: [
      "Designed the ingestion, chunking, and embedding strategy for mixed document types.",
      "Built a retriever + re-ranker stack with a citation-first response format.",
      "Added response grading, latency metrics, and retrieval diagnostics.",
    ],
    howIDid: [
      "Implemented vector indexing and hybrid retrieval for precision under noisy queries.",
      "Added answer synthesis constraints to reduce hallucinations.",
      "Instrumented end-to-end tracing to capture retrieval hit rate and latency.",
    ],
    architecture: [
      "Ingest -> chunk -> embed -> vector store.",
      "Query -> retrieve -> re-rank -> synthesize answer with citations.",
      "Logging + evaluation + dashboard for quality/latency monitoring.",
    ],
    tradeoffs: [
      "Prioritized grounded answers over more creative generation.",
      "Added a re-ranker for quality at the cost of a small latency increase.",
    ],
    impact: [
      "Consistent grounded answers with traceable citations.",
      "Audit-friendly outputs suitable for regulated environments.",
    ],
    video: {
      src: "/rag-demo.mp4",
      title: "RAG Demo (gig.mp4)",
      description:
        "Walkthrough of a retrieval-augmented assistant that cites sources and exposes retrieval diagnostics.",
    },
  },
  {
    slug: "document-completeness-checker",
    title: "LLM-Assisted Standard & Document Completeness Checker (Demo)",
    summary:
      "Pipeline that detects document standards and verifies required sections using LLM-backed reasoning.",
    type: "Demo",
    tags: ["LLM", "Document AI", "Evaluation", "OCR", "Compliance"],
    overview: [
      "This demo runs a synthetic document through an evaluation pipeline that detects the most likely standard/format and verifies expected sections.",
      "When a section is implied rather than explicit, the system infers intent using an LLM and explains why it passed or failed with confidence scores.",
    ],
    goals: [
      "Identify the document standard or format with high confidence.",
      "Validate required sections even when labeling is inconsistent.",
      "Produce audit-friendly outputs that can be exported to JSON/CSV.",
    ],
    whatIDid: [
      "Designed the multi-stage evaluation workflow and scoring rubric.",
      "Implemented section detection and semantic matching for implicit content.",
      "Built JSON/CSV export for downstream reporting and audits.",
    ],
    howIDid: [
      "Combined OCR extraction with structural hints and LLM reasoning.",
      "Used a confidence thresholding strategy with human-review flags.",
      "Logged page-level references for transparent verification.",
    ],
    architecture: [
      "OCR -> section candidates -> LLM inference -> scoring + explanations.",
      "Exporter produces JSON/CSV with evidence and page references.",
      "Quality checks for confidence drift over time.",
    ],
    tradeoffs: [
      "Optimized for explainability over aggressive recall.",
      "Kept deterministic checks alongside LLM reasoning for stability.",
    ],
    impact: [
      "Clear pass/fail explanations with confidence scores and citations.",
      "Audit-ready outputs for compliance workflows.",
    ],
    video: {
      src: "/document-completeness-demo.mp4",
      title: "LLM-Assisted Standard & Document Completeness Checker (Demo)",
      description:
        "In this walkthrough, a synthetic document is evaluated for standard detection, section completeness, and explanation with confidence scores and page references. Results can be exported as JSON or CSV.",
    },
  },
  {
    slug: "fact-check-moderation-pipeline",
    title: "Fact-check + Moderation Pipeline at Scale (Anonymized)",
    summary:
      "High-throughput pipeline for claim extraction, verification, and moderation with safe fallbacks.",
    type: "Anonymized",
    tags: ["LLM", "Moderation", "Retrieval", "Streaming", "MLOps"],
    overview: [
      "A production pipeline designed for extreme throughput that extracts claims, verifies them against evidence, and applies moderation policies before final ranking.",
      "The system is engineered for reliability, safe fallbacks, and real-time observability.",
    ],
    goals: [
      "Handle burst traffic while keeping latency predictable.",
      "Increase safety and reduce false positives with verification.",
      "Provide robust observability for quality and drift.",
    ],
    whatIDid: [
      "Led architecture design and delivery for an end-to-end pipeline.",
      "Built verification layers that combine retrieval and rule-based safeguards.",
      "Established monitoring for drift and model quality.",
    ],
    howIDid: [
      "Designed a queue/worker architecture with elastic scale.",
      "Implemented claim extraction with caching for repeated templates.",
      "Added verification scoring and moderation guardrails.",
    ],
    architecture: [
      "Ingestion -> queue/worker pool -> claim extraction.",
      "Retrieval + evidence -> verification scoring -> moderation.",
      "Storage, analytics, and monitoring for quality signals.",
    ],
    tradeoffs: [
      "Throughput and safety prioritized over perfect recall.",
      "Tiered verification to balance latency with accuracy.",
    ],
    impact: [
      "Designed for ~5k posts/sec throughput (anonymized benchmark).",
      "Improved safety and precision via retrieval-backed checks.",
    ],
    relatedCaseStudy: "/case-studies/moderation-factcheck-at-scale",
  },
  {
    slug: "custom-sd-characters",
    title: "Custom Stable Diffusion for Game-style Characters (Anonymized)",
    summary:
      "LoRA fine-tuning and production workflow for consistent, controllable character generation.",
    type: "Anonymized",
    tags: ["Stable Diffusion", "LoRA", "Inference", "MLOps"],
    overview: [
      "A custom diffusion workflow built for a game art studio to generate consistent character styles at scale.",
      "The system balances creative flexibility with deterministic outputs suitable for production pipelines.",
    ],
    goals: [
      "Achieve consistent visual style across prompts.",
      "Keep inference fast and predictable in production.",
      "Provide safe rollback and evaluation workflows.",
    ],
    whatIDid: [
      "Led data curation, fine-tuning, and evaluation strategy.",
      "Built a production inference workflow with repeatable outputs.",
      "Mentored team members and enforced quality gates.",
    ],
    howIDid: [
      "Curated style-consistent datasets and filtered noise.",
      "Applied LoRA fine-tuning with targeted prompt sets.",
      "Instrumented monitoring for quality regressions.",
    ],
    architecture: [
      "Dataset curation -> LoRA fine-tuning -> evaluation prompts.",
      "Inference service -> output QA -> monitoring and rollback.",
    ],
    tradeoffs: [
      "Optimized for style fidelity over broad prompt diversity.",
      "Accepted longer training cycles for stable inference.",
    ],
    impact: [
      "Production-ready generation pipeline with consistent style.",
      "Reduced manual art iteration for character assets.",
    ],
    relatedCaseStudy: "/case-studies/custom-sd-game-characters",
  },
  {
    slug: "liveness-detection-cnic",
    title: "Liveness Detection for CNIC Verification",
    summary:
      "Canary-released liveness detection models with Seldon Core and production monitoring.",
    type: "Production",
    tags: ["Computer Vision", "Seldon Core", "Deployment", "Monitoring"],
    overview: [
      "A liveness detection system for identity verification that balances false positives with strong security.",
      "The pipeline uses staged rollout, automated monitoring, and measurable quality gates.",
    ],
    goals: [
      "Achieve high accuracy with low false positives.",
      "Ship safely using canary releases and rollback paths.",
      "Provide monitoring for drift and performance decay.",
    ],
    whatIDid: [
      "Deployed CV models with Seldon Core using canary strategy.",
      "Built ETL pipelines to keep training data fresh.",
      "Integrated monitoring to detect drift and reduce false positives.",
    ],
    howIDid: [
      "Optimized inference with lightweight CV backbones.",
      "Added thresholds and decision logging for auditability.",
      "Measured accuracy and alerting with quality dashboards.",
    ],
    architecture: [
      "Data ingestion -> model training -> canary deployment.",
      "Inference -> decision logging -> monitoring + alerts.",
    ],
    tradeoffs: [
      "Conservative thresholds to prioritize security.",
      "Canary rollout added complexity but reduced risk.",
    ],
    impact: [
      "93.2% accuracy for Pakistani CNIC verification (reported).",
      "Reduced false positives with drift monitoring.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
