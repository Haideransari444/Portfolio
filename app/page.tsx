import { About } from "@/components/about";
import { AiSystemsLab } from "@/components/ai-systems-lab";
import { CommandPalette } from "@/components/command-palette";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionNav } from "@/components/section-nav";
import { Services } from "@/components/services";
import { SkillMap } from "@/components/skill-map";
import { SystemBuilderMap } from "@/components/system-builder-map";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
      <SectionNav />
      <main>
        <Hero />
        <About />
        <SkillMap />
        <ProjectGrid />
        <SystemBuilderMap />
        <AiSystemsLab />
        <Timeline />
        <Services />
        <Contact />
      </main>
    </>
  );
}
