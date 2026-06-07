export type Service = {
  title: string;
  description: string;
  tools: string[];
};

export const services: Service[] = [
  {
    title: "AI Application Development",
    description:
      "Custom AI assistants, workflow tools, and model connected applications that work with real data and users.",
    tools: ["Python", "FastAPI", "Gemini"]
  },
  {
    title: "RAG Chatbots",
    description:
      "Document Q&A systems, knowledge base assistants, retrieval pipelines, and grounded LLM interfaces.",
    tools: ["LangChain", "FAISS", "pgvector"]
  },
  {
    title: "AI Agents",
    description:
      "Agentic workflows for claims, invoices, email, research, and multi-step automation with clear control paths.",
    tools: ["LangGraph", "Tools", "State"]
  },
  {
    title: "Automation Workflows",
    description:
      "Browser automation, email handling, report generation, lead workflows, and repetitive process reduction.",
    tools: ["Selenium", "SMTP", "IMAP"]
  },
  {
    title: "FastAPI Backend Development",
    description:
      "Typed APIs, database models, route design, async services, migrations, and AI service integration.",
    tools: ["FastAPI", "PostgreSQL", "Pydantic"]
  },
  {
    title: "Data Analysis",
    description:
      "Data cleaning, exploratory analysis, dashboards, reports, and business or IoT data workflows.",
    tools: ["Pandas", "NumPy", "Power BI"]
  },
  {
    title: "OSINT Research Automation",
    description:
      "Public data workflows, preservation tools, structured evidence pages, and research process automation.",
    tools: ["Python", "HTML", "Automation"]
  },
  {
    title: "Computer Vision Prototypes",
    description:
      "Detection pipelines, preprocessing, person detection, and fast applied vision prototypes.",
    tools: ["YOLOv8", "OpenCV", "Python"]
  }
];
