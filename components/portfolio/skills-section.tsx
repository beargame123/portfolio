import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-[var(--hairline)] py-12 lg:py-16">
      <SectionTitle title="Skills" number="02" />
      <div className="space-y-6">
        {portfolioData.skillCategories.map((category) => (
          <div key={category.name} className="grid grid-cols-1 gap-2 sm:grid-cols-[96px_1fr] sm:gap-6">
            <h3 className="pt-1 text-sm font-medium text-slate-500">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-md border border-[var(--hairline)] bg-[var(--surface-1)] px-2.5 py-1 text-[13px] text-slate-700 dark:text-slate-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
