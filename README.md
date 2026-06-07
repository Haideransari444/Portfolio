# Muzammil Haider Portfolio

Soft pastel mint developer portfolio for Muzammil Haider, focused on practical AI systems, RAG, agents, automation, backend APIs, OSINT workflows, computer vision, and infrastructure.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

This project is configured for GitHub Pages through GitHub Actions.

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Set `Build and deployment -> Source` to `GitHub Actions`.
4. Push to `main` or `master`, or run the `Deploy to GitHub Pages` workflow manually.

The workflow builds a static Next.js export into `out/` and deploys it with GitHub Pages. For normal project repositories, it automatically uses `/<repo-name>` as the Next.js base path. For a user site repository like `<username>.github.io`, it deploys at the domain root.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Content

Portfolio content is data driven in `data/`. Project cards, skills, services, lab systems, and timeline entries can be edited without changing section layouts.

## Assets

- Resume PDF: `public/Muzammil_Haider.pdf`
- Hero visual: `public/hero-technical.png`
- Portfolio portrait: `public/muzammil-portrait-portfolio.png`
