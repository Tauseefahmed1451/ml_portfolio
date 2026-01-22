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
    slug: "nmx-video-recommendation",
    title: "NMX Video Recommendation Engine",
    summary:
      "Hybrid recommender system built for cold-start realities using user profiles and video semantics.",
    type: "Anonymized",
    tags: [
      "Recommender Systems",
      "NLP",
      "Deep Learning",
      "TensorFlow",
      "Flask",
      "MongoDB",
    ],
    overview: [
      "The goal was to recommend videos a user is likely to enjoy based on both user profiles and content semantics.",
      "With limited historical data, the system blended similarity models, clustering, and metadata-based matching.",
    ],
    goals: [
      "Deliver relevant recommendations for new and existing users.",
      "Cluster similar users by preferences and demographics.",
      "Map similar videos using content semantics and embeddings.",
    ],
    whatIDid: [
      "Led the end-to-end ML design for multiple recommendation strategies.",
      "Trained models for user similarity, content similarity, and cold-start matching.",
      "Integrated recommendations into the product using REST APIs and MongoDB.",
    ],
    howIDid: [
      "Engineered user and video feature vectors from metadata and interactions.",
      "Applied cosine similarity and clustering for fast candidate generation.",
      "Built a Flask service for real-time ranking and retrieval.",
    ],
    architecture: [
      "Ingest metadata -> feature extraction -> similarity + clustering.",
      "Rank candidates -> API -> frontend consumption.",
      "MongoDB stores profiles, interactions, and recommendation results.",
    ],
    tradeoffs: [
      "Relied on metadata-heavy matching while interaction data was sparse.",
      "Used lightweight similarity models to keep response times low.",
    ],
    impact: [
      "Enabled personalized recommendations despite limited historical data.",
      "Shipped a production-ready pipeline integrated with the frontend.",
    ],
  },
  {
    slug: "3d-avatars-generation",
    title: "3D Avatars Generation Pipeline",
    summary:
      "2D-to-3D asset pipeline for game characters with pose control, texture fidelity, and animation.",
    type: "Anonymized",
    tags: [
      "3D Computer Vision",
      "Diffusers",
      "Transformers",
      "Pytorch3D",
      "ControlNet",
      "Photogrammetry",
    ],
    overview: [
      "This project produces game-ready assets in both 2D and 3D styles: cartoon, realistic, cel-shaded, voxel, and low-poly.",
      "The workflow starts with 2D character generation and converts outputs into 3D meshes, textures, and animations.",
    ],
    goals: [
      "Generate consistent character assets in predefined poses and styles.",
      "Convert 2D outputs into 3D meshes with clean UVs and textures.",
      "Animate characters using reference videos and pose guidance.",
    ],
    whatIDid: [
      "Designed the full 2D and 3D generation pipeline and delivery strategy.",
      "Trained SDXL Base 1.0, SDXL Turbo, SD2.1, and SD1.5 for controlled outputs.",
      "Built UNet, image-to-image, and inpainting models for consistent styling.",
    ],
    howIDid: [
      "Used pose guidance with ControlNet, DensePose, and OpenPose for consistency.",
      "Applied UV unwrapping, IUV maps, and texture baking for clean meshes.",
      "Automated asset QA to enforce style and background constraints.",
    ],
    architecture: [
      "Prompt + pose -> SD generation -> 2D asset selection.",
      "2D to 3D reconstruction -> UV/texture pipeline.",
      "Animation retargeting from reference videos.",
    ],
    tradeoffs: [
      "High fidelity required heavier models and longer pipelines.",
      "Strict pose control reduced some creative diversity.",
    ],
    impact: [
      "Delivered game-ready assets with consistent style and animation support.",
      "Reduced manual art iterations through repeatable ML workflows.",
    ],
  },
  {
    slug: "solar-roof-segmentation",
    title: "Solar Roof Detection and Segmentation",
    summary:
      "Roof detection and instance segmentation to estimate solar-ready surface area from imagery.",
    type: "Production",
    tags: ["Computer Vision", "PyTorch", "YOLOv5", "SAM", "Segmentation"],
    overview: [
      "The target was to detect roofs and segment every roof section separately to calculate usable area for solar panels.",
      "YOLOv5 offered the best balance of speed and accuracy after benchmarking YOLOv7, YOLOv8, and YOLOv5.",
    ],
    goals: [
      "Detect roof boundaries with high precision.",
      "Segment roof planes to measure solar-ready area.",
      "Keep inference fast for large imagery batches.",
    ],
    whatIDid: [
      "Benchmarked YOLOv7, YOLOv8, and YOLOv5 for detection quality and latency.",
      "Built the crop-to-segmentation pipeline using SAM for instance masks.",
      "Delivered area estimates and QA overlays for verification.",
    ],
    howIDid: [
      "Trained YOLOv5 on labeled roof imagery with strong data augmentation.",
      "Fed detected roof crops into SAM for instance segmentation.",
      "Post-processed masks for clean edges and measurement stability.",
    ],
    architecture: [
      "Input imagery -> YOLOv5 detection -> crop -> SAM segmentation.",
      "Mask cleanup -> area estimation -> reporting.",
    ],
    tradeoffs: [
      "SAM adds compute cost but improves segmentation quality.",
      "YOLOv5 was chosen over larger models to keep latency predictable.",
    ],
    impact: [
      "Reliable roof plane segmentation for accurate solar sizing.",
      "Faster site assessments with repeatable measurements.",
    ],
  },
  {
    slug: "visual-authenticity",
    title: "Visual Authenticity Verification (VisAuth)",
    summary:
      "Two-stage model to detect genuine, fake, and copied cards under real-world capture conditions.",
    type: "Production",
    tags: [
      "Computer Vision",
      "PyTorch",
      "YOLOv5",
      "EfficientNetB3",
      "Fraud Detection",
    ],
    overview: [
      "The system combines detection and classification to verify authenticity of identity cards.",
      "Staged training improved robustness to lighting changes, camera quality, and viewing angles.",
    ],
    goals: [
      "Accurately classify original vs fake vs copied cards.",
      "Handle real-world capture variability without high false positives.",
      "Provide clear decision confidence for review flows.",
    ],
    whatIDid: [
      "Trained a YOLOv5 detector and an EfficientNetB3 authenticity classifier.",
      "Designed staged training to handle hologram and lighting variability.",
      "Built evaluation workflows to validate performance under noisy captures.",
    ],
    howIDid: [
      "Stage 1: detect card regions and crop for classification.",
      "Stage 2: classify authenticity with tuned thresholds and calibration.",
      "Applied augmentations for glare, blur, and perspective shifts.",
    ],
    architecture: [
      "Image -> YOLOv5 detection -> crop -> EfficientNetB3 classifier.",
      "Decision thresholding -> confidence output.",
    ],
    tradeoffs: [
      "Two-stage design adds latency but improves accuracy and robustness.",
      "Calibration favored low false positives over maximum recall.",
    ],
    impact: [
      "Improved verification reliability across diverse capture conditions.",
      "Reduced manual reviews with higher confidence signals.",
    ],
  },
  {
    slug: "liveness-detection-cnic",
    title: "Liveness Detection for CNIC Verification",
    summary:
      "EfficientNetB7 model trained to detect spoofed selfies and ensure live capture integrity.",
    type: "Production",
    tags: ["Computer Vision", "PyTorch", "EfficientNetB7", "Anti-Spoofing"],
    overview: [
      "The model detects spoofed images and confirms whether a selfie is live or sourced from media such as a photo or video.",
      "To address limited local datasets, I built a 15,000-image dataset with real, screen-spoofed, and paper-spoofed samples.",
    ],
    goals: [
      "Detect spoofing attempts with high precision.",
      "Perform reliably across varied capture devices and lighting.",
      "Build a representative dataset for Pakistani faces.",
    ],
    whatIDid: [
      "Created a custom dataset of real, screen, and paper spoof images.",
      "Trained and optimized an EfficientNetB7-based liveness classifier.",
      "Deployed evaluation workflows for threshold tuning and monitoring.",
    ],
    howIDid: [
      "Collected diverse capture scenarios to reduce bias and overfitting.",
      "Applied data augmentation for lighting, compression, and blur.",
      "Calibrated decision thresholds to balance security and UX.",
    ],
    architecture: [
      "Selfie capture -> EfficientNetB7 classifier -> liveness score.",
      "Thresholding -> allow/deny + audit logs.",
    ],
    tradeoffs: [
      "High security thresholds reduce false accepts but can raise false rejects.",
      "Large model improves accuracy at the cost of compute.",
    ],
    impact: [
      "Reduced spoofing risk with a locally representative dataset.",
      "Operationalized a liveness check suitable for identity verification.",
    ],
  },
  {
    slug: "card-detection-cnic",
    title: "Pakistani CNIC Card Detection",
    summary:
      "Lightweight MobileNetV2 detector trained on a custom CNIC dataset for fast ID detection.",
    type: "Production",
    tags: ["Computer Vision", "PyTorch", "MobileNetV2", "Detection"],
    overview: [
      "The project focused on detecting Pakistani CNIC cards within live camera frames.",
      "A compact MobileNetV2 model provided fast inference on constrained hardware.",
    ],
    goals: [
      "Detect CNIC cards quickly for real-time verification flows.",
      "Keep model size small for edge deployments.",
      "Maintain high accuracy with limited training data.",
    ],
    whatIDid: [
      "Built a custom dataset of 300 labeled CNIC images.",
      "Retrained MobileNetV2 with targeted augmentations and tuning.",
      "Delivered an optimized model for fast inference.",
    ],
    howIDid: [
      "Used transfer learning to fine-tune on the CNIC dataset.",
      "Applied strong augmentation to improve generalization.",
      "Exported model artifacts for deployment and testing.",
    ],
    architecture: [
      "Camera frame -> MobileNetV2 detection -> bounding box output.",
    ],
    tradeoffs: [
      "Smaller model sizes reduced latency but required careful tuning.",
      "Limited data required aggressive augmentation and QA.",
    ],
    impact: [
      "Fast CNIC detection for identity verification pipelines.",
      "Reduced manual framing errors in capture workflows.",
    ],
  },
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
      src: "/gig.mp4",
      title: "RAG Knowledge Assistant (Demo)",
      description:
        "Walkthrough of a retrieval-augmented assistant that cites sources and exposes retrieval diagnostics.",
    },
  },
  {
    slug: "document-completeness-checker",
    title: "LLM-Assisted Standard and Document Completeness Checker (Demo)",
    summary:
      "Pipeline that detects document standards and verifies required sections using LLM-backed reasoning.",
    type: "Demo",
    tags: ["LLM", "Document AI", "Evaluation", "OCR", "Compliance"],
    overview: [
      "This demo runs a synthetic document through an evaluation pipeline that detects the most likely standard or format and verifies expected sections.",
      "When a section is implied rather than explicit, the system infers intent using an LLM and explains why it passed or failed with confidence scores.",
    ],
    goals: [
      "Identify the document standard or format with high confidence.",
      "Validate required sections even when labeling is inconsistent.",
      "Produce audit-friendly outputs that can be exported to JSON or CSV.",
    ],
    whatIDid: [
      "Designed the multi-stage evaluation workflow and scoring rubric.",
      "Implemented section detection and semantic matching for implicit content.",
      "Built JSON and CSV exports for downstream reporting and audits.",
    ],
    howIDid: [
      "Combined OCR extraction with structural hints and LLM reasoning.",
      "Used a confidence thresholding strategy with human-review flags.",
      "Logged page-level references for transparent verification.",
    ],
    architecture: [
      "OCR -> section candidates -> LLM inference -> scoring + explanations.",
      "Exporter produces JSON or CSV with evidence and page references.",
      "Quality checks for confidence drift over time.",
    ],
    tradeoffs: [
      "Optimized for explainability over aggressive recall.",
      "Kept deterministic checks alongside LLM reasoning for stability.",
    ],
    impact: [
      "Clear pass or fail explanations with confidence scores and citations.",
      "Audit-ready outputs for compliance workflows.",
    ],
    video: {
      src: "/small-portfolio-demo.mp4",
      title: "LLM-Assisted Standard and Document Completeness Checker (Demo)",
      description:
        "Walkthrough of a document evaluation pipeline that detects standards, verifies required sections, and exports audit-ready results.",
    },
  },
  {
    slug: "realistic-photo-generation",
    title: "Realistic Photo Generation",
    summary:
      "Stable Diffusion 1.5 fine-tuning and prompt control for photorealistic portraits.",
    type: "Demo",
    tags: ["Computer Vision", "Stable Diffusion", "Fine-tuning", "Prompting"],
    overview: [
      "I fine-tuned Stable Diffusion 1.5 to generate realistic portrait photos with controllable prompts.",
      "Prompt engineering and data curation improved realism and identity consistency.",
    ],
    goals: [
      "Achieve photorealistic portrait quality.",
      "Preserve identity across prompt variations.",
      "Expose controllable prompt templates for consistent outputs.",
    ],
    whatIDid: [
      "Curated a high-quality portrait dataset for fine-tuning.",
      "Designed prompt templates and negative prompts for realism.",
      "Built a lightweight evaluation set to compare output quality.",
    ],
    howIDid: [
      "Fine-tuned SD 1.5 with curated data and controlled prompts.",
      "Used prompt constraints to reduce artifacts and improve fidelity.",
      "Reviewed outputs with visual QA and feedback loops.",
    ],
    architecture: [
      "Dataset curation -> fine-tuning -> prompt templates -> inference.",
      "Quality review -> iteration on prompts and checkpoints.",
    ],
    tradeoffs: [
      "Stronger prompt constraints reduce diversity but increase realism.",
      "Higher quality required longer training time and curation.",
    ],
    impact: [
      "Delivered consistent photorealistic portrait generation.",
      "Provided reusable prompt recipes for rapid content creation.",
    ],
  },
  {
    slug: "rap-invoice-automation",
    title: "RAP Invoice Automation",
    summary:
      "OCR pipeline that downloads invoices from email, extracts fields, and appends standardized rows to Excel.",
    type: "Production",
    tags: ["OCR", "Lazarus", "ETL", "Automation", "Invoices"],
    overview: [
      "Built a pipeline to download invoices from email and extract structured fields with Lazarus OCR.",
      "The output was appended to a standardized Excel sheet with consistent keys across vendors.",
    ],
    goals: [
      "Automate invoice ingestion from email.",
      "Normalize key fields across different invoice layouts.",
      "Reduce manual data entry and errors.",
    ],
    whatIDid: [
      "Built the ingestion pipeline and OCR extraction flow.",
      "Created field mapping rules for varied invoice formats.",
      "Coordinated the team to validate outputs and improve accuracy.",
    ],
    howIDid: [
      "Email download -> document parsing -> Lazarus OCR -> field mapping.",
      "Normalized fields -> append to Excel -> QA checks.",
    ],
    architecture: [
      "Email inbox -> invoice download -> OCR -> normalization -> Excel append.",
      "Audit logs capture source and extraction confidence.",
    ],
    tradeoffs: [
      "Rule-based mappings improved consistency but required vendor updates.",
      "OCR accuracy was balanced with speed for daily processing.",
    ],
    impact: [
      "Cut manual invoice processing time with automated extraction.",
      "Standardized reporting across multiple vendors.",
    ],
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
      "Designed a queue and worker architecture with elastic scale.",
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
      "Tiered verification balanced latency with accuracy.",
    ],
    impact: [
      "Designed for ~5k posts per second throughput (anonymized benchmark).",
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
