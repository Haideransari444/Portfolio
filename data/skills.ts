export type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI and LLM Systems",
    summary:
      "Used for assistants, agents, RAG pipelines, tool calling, local model experiments, and grounded generation.",
    skills: ["Python", "LangChain", "LangGraph", "Gemini", "Ollama", "RAG", "AI Agents"]
  },
  {
    title: "Backend and Databases",
    summary:
      "Used to turn AI workflows into APIs with durable storage, vector search, migrations, and typed service layers.",
    skills: ["FastAPI", "Django REST", "PostgreSQL", "Supabase", "pgvector", "SQLAlchemy", "asyncpg"]
  },
  {
    title: "Automation and Data",
    summary:
      "Used for browser tasks, email systems, reporting flows, data cleaning, dashboards, and repeatable pipelines.",
    skills: ["Selenium", "SMTP", "IMAP", "Pandas", "NumPy", "Power BI"]
  },
  {
    title: "Computer Vision",
    summary:
      "Used for detection pipelines, image preprocessing, lightweight prototypes, and normal or aerial scene analysis.",
    skills: ["OpenCV", "YOLOv8", "Image preprocessing", "Detection pipelines"]
  },
  {
    title: "Infrastructure",
    summary:
      "Used for local deployment, self hosted labs, controlled access, Linux services, and practical server debugging.",
    skills: ["Docker", "Linux", "GitHub", "Cloudflare Tunnel", "SSH", "Self hosting"]
  },
  {
    title: "Systems Research",
    summary:
      "Used for Matrix, WebRTC, native runtime issues, communication architecture, and low level debugging work.",
    skills: ["Matrix", "WebRTC", "LiveKit", "JNI", "C++", "Kotlin", "DLL debugging"]
  }
];
