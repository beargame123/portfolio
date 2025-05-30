import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import { ProjectCard } from "./project-card"
import { Palette } from "lucide-react" // Using Palette for Projects

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="Work Projects" icon={Palette} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioData.workProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <SectionTitle title="Personal Projects" icon={Palette} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
