export const projectFilters = [
  "All",
  "LLM/RAG",
  "Automation",
  "Backend",
  "OSINT",
  "Computer Vision",
  "Systems"
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  title: string;
  category: string;
  filters: Exclude<ProjectFilter, "All">[];
  maturity: "Prototype" | "MVP" | "Research" | "Production style concept" | "Academic";
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  tech: string[];
  features: string[];
  challenge: string;
  outcome: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    title: "BeWhoop Email Outreach Agent",
    category: "AI Sales Automation",
    filters: ["Automation", "Backend", "LLM/RAG"],
    maturity: "Production style concept",
    description:
      "An AI powered outreach system that sends scripted emails, parses replies, analyzes responses, searches knowledge, and escalates qualified leads.",
    problem:
      "Sales outreach can become manual, repetitive, and hard to track when replies require qualification and follow-up decisions.",
    solution:
      "A FastAPI based email agent that connects lead data, scripted outreach, IMAP parsing, LLM response analysis, vector retrieval, and human escalation.",
    architecture:
      "FastAPI routes coordinate SMTP sending, IMAP reply ingestion, LangChain analysis, pgvector knowledge lookup, and structured PostgreSQL logging.",
    tech: ["FastAPI", "Supabase", "PostgreSQL", "pgvector", "LangChain", "Gemini", "SMTP", "IMAP"],
    features: [
      "Scripted email execution",
      "Reply parsing",
      "LLM based intent analysis",
      "Knowledge base lookup",
      "Lead trigger detection",
      "Human closer escalation"
    ],
    challenge:
      "Designing decision logic that can handle known replies, unknown questions, and qualified lead signals without hiding important cases from humans.",
    outcome:
      "Shows practical AI automation across email, databases, vector search, backend APIs, and business workflows."
  },
  {
    title: "LawBot Pakistan",
    category: "Legal RAG System",
    filters: ["LLM/RAG"],
    maturity: "MVP",
    description:
      "A legal research assistant for Pakistani legal documents, using retrieval augmented generation for grounded answers.",
    problem:
      "Legal material is dense and spread across long documents, making fast contextual lookup difficult.",
    solution:
      "A RAG pipeline that chunks legal documents, embeds content, retrieves relevant passages, and uses Gemini for answer generation.",
    architecture:
      "Document processing flows into sentence transformer embeddings, FAISS search, and a grounded generation layer.",
    tech: ["Python", "LangChain", "FAISS", "Gemini", "all-MiniLM-L6-v2"],
    features: [
      "Legal document ingestion",
      "Chunk creation",
      "Embedding based retrieval",
      "Grounded answer generation",
      "Streamlit and FastAPI interface concepts"
    ],
    challenge:
      "Keeping answers tied to source context across large, technical legal documents.",
    outcome:
      "Demonstrates large document RAG design, retrieval grounding, and legal AI workflow thinking."
  },
  {
    title: "PaperPal Research Assistant",
    category: "Academic RAG",
    filters: ["LLM/RAG"],
    maturity: "Prototype",
    description:
      "A research paper assistant for ingestion, semantic search, question answering, and summarization.",
    problem:
      "Students and researchers need faster ways to explore papers without losing source context.",
    solution:
      "PaperPal converts papers into searchable chunks and lets users ask focused questions over the material.",
    architecture:
      "A Streamlit prototype connects document loading, chunking, FAISS retrieval, and Gemini powered summarization.",
    tech: ["LangChain", "Gemini", "FAISS", "Streamlit", "FastAPI concepts"],
    features: [
      "Research paper ingestion",
      "Semantic search",
      "Question answering",
      "Summary generation",
      "Backend route planning"
    ],
    challenge:
      "Balancing concise summaries with enough technical detail to remain useful for academic work.",
    outcome:
      "Shows applied RAG for research workflows and document understanding."
  },
  {
    title: "Alif AI Tutor",
    category: "Education AI",
    filters: ["LLM/RAG", "Backend"],
    maturity: "MVP",
    description:
      "An AI tutor app concept for summaries, flashcards, quizzes, and student friendly explanations.",
    problem:
      "Students need adaptive study support that can turn material into smaller learning objects.",
    solution:
      "A FastAPI and Supabase backend coordinates Gemini powered study generation for summaries, flashcards, and quizzes.",
    architecture:
      "Backend APIs receive learning material, call Gemini for structured outputs, and store user learning objects in Supabase.",
    tech: ["FastAPI", "Supabase", "Gemini", "Python"],
    features: ["Summaries", "Flashcards", "Quizzes", "Voice learning ideas", "Student focused explanations"],
    challenge:
      "Keeping AI generated study material clear, age appropriate, and useful without overcomplicating the interface.",
    outcome:
      "Shows EdTech product thinking, LLM content generation, and backend integration."
  },
  {
    title: "OpenHive GitHub Analyzer",
    category: "Developer Intelligence",
    filters: ["Backend", "LLM/RAG"],
    maturity: "Prototype",
    description:
      "A repository intelligence tool that searches GitHub projects and generates AI based structure and activity insights.",
    problem:
      "Understanding a repository quickly requires scanning structure, activity, documentation, and code patterns.",
    solution:
      "OpenHive extracts repository data, calculates metrics, and prepares AI summaries through an API first workflow.",
    architecture:
      "FastAPI endpoints handle repository search and analysis, with Gemini used for readable codebase insight.",
    tech: ["FastAPI", "Gemini", "GitHub analysis", "Next.js concepts"],
    features: ["Repository search", "Metrics extraction", "AI summaries", "Analysis API endpoints"],
    challenge:
      "Turning noisy repository signals into useful summaries without inventing quality claims.",
    outcome:
      "Demonstrates developer tool building and AI assisted codebase analysis."
  },
  {
    title: "ORBIT Matrix Research",
    category: "Communication Systems",
    filters: ["Systems"],
    maturity: "Research",
    description:
      "Matrix based chat and calling research involving MatrixRTC, WebRTC, LiveKit, Kotlin, C++, JNI, and DLL debugging.",
    problem:
      "Group voice and calling in Matrix clients requires careful protocol, media, and native dependency decisions.",
    solution:
      "Research and debugging across Matrix call events, MatrixRTC state, SFU architecture, WebRTC internals, and Kotlin native constraints.",
    architecture:
      "The research compares MatrixRTC behavior, LiveKit style SFU routing, Kotlin client constraints, and native runtime integration paths.",
    tech: ["Kotlin", "Matrix", "WebRTC", "LiveKit concepts", "C++", "JNI"],
    features: ["Matrix call event research", "Group voice channel planning", "DLL debugging", "Native dependency investigation"],
    challenge:
      "Diagnosing runtime mismatches between Kotlin, native libraries, WebRTC pieces, and Matrix client expectations.",
    outcome:
      "Shows low level debugging mindset and communication protocol architecture research."
  },
  {
    title: "Book Brain RAG",
    category: "Literature RAG",
    filters: ["LLM/RAG"],
    maturity: "Prototype",
    description:
      "A book based RAG system for The Forty Rules of Love with hybrid retrieval and context windowing.",
    problem:
      "Book Q&A can hallucinate when retrieval ignores timeline, neighbor context, or abstain thresholds.",
    solution:
      "A hybrid BM25 and FAISS retriever with neighbor windows and strict abstain behavior.",
    architecture:
      "Next.js interface concepts call retrieval logic that combines sparse search, vector search, and context expansion.",
    tech: ["Next.js", "FAISS", "BM25", "Python", "LLM retrieval"],
    features: ["Hybrid retrieval", "Neighbor context", "Abstain threshold", "Timeline aware constraints"],
    challenge:
      "Building retrieval rules that protect the reading experience from unsupported answers.",
    outcome:
      "Shows better retrieval design and hallucination control."
  },
  {
    title: "Source Puller Agent",
    category: "Research Automation",
    filters: ["Automation", "LLM/RAG"],
    maturity: "Prototype",
    description:
      "A LangGraph agent that turns a claim into search steps, gathers sources, and returns structured evidence.",
    problem:
      "Manual source gathering is slow when claims need evidence, comparison, and organized references.",
    solution:
      "An agentic workflow breaks claims into search tasks, collects relevant material, and formats evidence.",
    architecture:
      "LangGraph state controls the claim, search steps, source collection, and final evidence output.",
    tech: ["LangGraph", "Python", "LLMs", "Search workflow"],
    features: ["Claim breakdown", "Search planning", "Evidence collection", "Structured output"],
    challenge:
      "Preventing the agent from treating weak matches as strong evidence.",
    outcome:
      "Shows agent state handling and research automation workflow design."
  },
  {
    title: "Invoice Agent",
    category: "Document Automation",
    filters: ["Automation", "Backend"],
    maturity: "Prototype",
    description:
      "An AI document automation agent for invoice PDFs, extraction, email integration, and database storage.",
    problem:
      "Invoice handling often mixes PDFs, email inboxes, manual extraction, and repeated data entry.",
    solution:
      "An agentic workflow processes invoices, extracts useful fields, works with email, and stores structured records.",
    architecture:
      "LangGraph coordinates PDF handling, email actions, extraction steps, and persistence logic.",
    tech: ["LangGraph", "Python", "PDF processing", "Email", "Database"],
    features: ["PDF invoice processing", "Data extraction", "Email integration", "Database storage"],
    challenge:
      "Keeping document extraction reliable when invoice formats vary.",
    outcome:
      "Shows practical document automation across files, email, and storage."
  },
  {
    title: "Homelab OSINT SSH Sandbox",
    category: "Self Hosted Infrastructure",
    filters: ["OSINT", "Systems"],
    maturity: "Production style concept",
    description:
      "A self hosted OSINT lab using Ubuntu, Docker, SSH, Cloudflare Tunnel, and isolated container access.",
    problem:
      "OSINT work benefits from controlled, isolated environments with predictable remote access.",
    solution:
      "A Docker based SSH sandbox routes access through Cloudflare Tunnel while keeping the lab environment contained.",
    architecture:
      "Ubuntu host, static LAN reservation, Docker isolation, SSH keys, restart policy, and Cloudflare Tunnel routing.",
    tech: ["Ubuntu", "Docker", "SSH", "Cloudflare Tunnel", "Linux"],
    features: ["Isolated container lab", "SSH access", "Cloudflare routing", "Key based access", "Reliable restart setup"],
    challenge:
      "Balancing accessibility with isolation and simple operational recovery.",
    outcome:
      "Shows infrastructure, Linux, Docker, and security aware environment design."
  },
  {
    title: "Social Profile Preservation Tool",
    category: "OSINT Archiving",
    filters: ["OSINT", "Automation"],
    maturity: "Prototype",
    description:
      "An OSINT and archiving tool for preserving public social profiles into offline HTML evidence walls.",
    problem:
      "Public profile evidence can change quickly and needs clean offline organization for later review.",
    solution:
      "A Python automation workflow captures public profile material and converts it into structured local HTML archives.",
    architecture:
      "Automation scripts collect public page data, preserve relevant artifacts, and generate offline HTML views.",
    tech: ["Python", "Automation", "HTML generation", "OSINT workflow"],
    features: ["One shot capture", "Offline HTML wall", "Public profile preservation", "Evidence organization"],
    challenge:
      "Keeping captures structured and reviewable without overcollecting private information.",
    outcome:
      "Shows OSINT workflow development, automation, and evidence organization."
  },
  {
    title: "Embedded Person Detection",
    category: "Computer Vision",
    filters: ["Computer Vision"],
    maturity: "Academic",
    description:
      "A lightweight person detection prototype for normal and aerial image contexts.",
    problem:
      "Detection pipelines need to stay lightweight while handling varied camera viewpoints.",
    solution:
      "A YOLOv8 and OpenCV workflow for person detection, preprocessing, and tracking concept exploration.",
    architecture:
      "Images pass through preprocessing, YOLOv8 inference, detection filtering, and output visualization.",
    tech: ["YOLOv8", "OpenCV", "Python"],
    features: ["Person detection", "Aerial scene handling", "Tracking concepts", "Image preprocessing"],
    challenge:
      "Adapting detection behavior for normal and aerial contexts.",
    outcome:
      "Shows applied computer vision and model integration."
  },
  {
    title: "Islamabad AQI Predictor",
    category: "Environmental Data",
    filters: ["Backend"],
    maturity: "Prototype",
    description:
      "An environmental data app for air quality monitoring and prediction in Islamabad.",
    problem:
      "Air quality data needs to be gathered, cleaned, and presented in a way that supports quick understanding.",
    solution:
      "A Streamlit app concept that uses weather and pollution API data for dashboard style prediction workflows.",
    architecture:
      "OpenWeatherMap inputs flow through Python data handling and Streamlit visual outputs.",
    tech: ["Streamlit", "Python", "OpenWeatherMap API", "Data analysis"],
    features: ["AQI monitoring", "Weather data usage", "Dashboard view", "Prediction workflow concept"],
    challenge:
      "Turning external environmental data into a clear local dashboard.",
    outcome:
      "Shows data science app development and environmental intelligence thinking."
  }
];
