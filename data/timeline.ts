export type TimelineItem = {
  period: string;
  title: string;
  detail: string;
  tags: string[];
};

export const timelineItems: TimelineItem[] = [
  {
    period: "January 2026 to Present",
    title: "Automation Engineer at NACTA (National Counter Terrorism Authority)",
    detail:
      "Building end-to-end automation and OSINT data collection tools for investigative workflows, including browser automation pipelines, structured data gathering, correlation, and reporting support.",
    tags: ["Experience", "Automation", "OSINT"]
  },
  {
    period: "March 2026 to May 2026",
    title: "Data Scientist at 10Pearls Pakistan (Shine Program)",
    detail:
      "Built Islamabad AQI Predictor, a 24-hour machine learning forecasting system using XGBoost, LightGBM, and Random Forest ensemble methods with CI/CD, Hopsworks Feature Store, and daily retraining.",
    tags: ["Experience", "Data Science", "MLOps"]
  },
  {
    period: "2023 to 2027",
    title: "BS Artificial Intelligence at NUML Islamabad",
    detail:
      "Building foundations in machine learning, deep learning, NLP, databases, operating systems, reinforcement learning, and distributed computing.",
    tags: ["AI", "ML", "NLP", "Systems"]
  },
  {
    period: "June 2025 to August 2025",
    title: "AI Intern at BeWhoop",
    detail:
      "Worked on AI powered sales chatbot concepts, lead qualification automation, email outreach automation, data monitoring, reporting, QA support, and coordination exposure.",
    tags: ["Internship", "Automation", "LLMs"]
  },
  {
    period: "Portfolio builds",
    title: "LawBot Pakistan, PaperPal, and Alif AI Tutor",
    detail:
      "Designed practical RAG and learning assistants that connect documents, retrieval, LLMs, backend concepts, and usable workflows.",
    tags: ["RAG", "Education", "Research"]
  },
  {
    period: "Systems work",
    title: "ORBIT Matrix and WebRTC Research",
    detail:
      "Explored MatrixRTC, call events, LiveKit concepts, WebRTC architecture, Kotlin constraints, JNI, C++, and DLL debugging.",
    tags: ["Matrix", "WebRTC", "Debugging"]
  },
  {
    period: "Infrastructure",
    title: "Homelab OSINT SSH Sandbox",
    detail:
      "Built a self hosted Docker and SSH lab routed through Cloudflare Tunnel for controlled OSINT style experimentation.",
    tags: ["Docker", "SSH", "OSINT"]
  },
  {
    period: "Current focus",
    title: "AI Agents and RAG Systems",
    detail:
      "Improving production style agent workflows, retrieval systems, FastAPI backends, automation pipelines, and portfolio grade AI projects.",
    tags: ["Agents", "FastAPI", "RAG"]
  }
];
