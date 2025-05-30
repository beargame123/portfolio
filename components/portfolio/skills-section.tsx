import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import { Badge } from "@/components/ui/badge"
import { BrainCircuit } from "lucide-react"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="Skills" icon={BrainCircuit} />
        <div className="space-y-8">
          {portfolioData.skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800"
                  >
                    {skill.icon && typeof skill.icon === "string" && <span className="mr-1">{skill.icon}</span>}
                    {/* Add Lucide icon handling if skill.icon is a component */}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
