export type LabSystem = {
  title: string;
  status: string;
  description: string;
  tools: string[];
};

export const labSystems: LabSystem[] = [
  {
    title: "RAG Engine",
    status: "Active",
    description:
      "Chunking, embeddings, vector lookup, source grounding, abstain logic, and answer generation.",
    tools: ["LangChain", "FAISS", "pgvector"]
  },
  {
    title: "Email Agent",
    status: "Built",
    description:
      "SMTP sending, IMAP parsing, reply analysis, trigger detection, and escalation workflows.",
    tools: ["FastAPI", "Gemini", "Supabase"]
  },
  {
    title: "OSINT Lab",
    status: "Self hosted",
    description:
      "Controlled Linux and Docker environment for research automation and public data preservation.",
    tools: ["Docker", "SSH", "Cloudflare"]
  },
  {
    title: "Computer Vision",
    status: "Prototype",
    description:
      "YOLO and OpenCV experiments for person detection, preprocessing, and scene handling.",
    tools: ["YOLOv8", "OpenCV", "Python"]
  },
  {
    title: "Matrix/WebRTC Research",
    status: "Research",
    description:
      "Communication protocol research around MatrixRTC, LiveKit, SFU design, and native debugging.",
    tools: ["Matrix", "WebRTC", "Kotlin"]
  },
  {
    title: "Homelab Infrastructure",
    status: "Operational thinking",
    description:
      "Practical self hosting, tunnels, SSH keys, container isolation, and repeatable lab access.",
    tools: ["Ubuntu", "Docker", "Linux"]
  }
];
