import { Sidebar } from "@/components/portfolio/sidebar"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { AwardsCertsSection } from "@/components/portfolio/awards-certs-section"
import { Footer } from "@/components/portfolio/footer"
import { ThemeToggle } from "@/components/portfolio/theme-toggle"
import { MobileNav } from "@/components/portfolio/mobile-nav"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 dark:bg-[#0a0f1c] dark:text-slate-400">
      <div className="fixed right-5 top-5 z-50">
        <ThemeToggle />
      </div>
      <MobileNav />
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-20 lg:py-0">
        <div className="lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-x-16">
          <Sidebar />
          <main className="min-w-0 pt-2 lg:py-24">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <AwardsCertsSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
