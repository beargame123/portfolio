import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-14 lg:py-20">
      <SectionTitle title="Skills" number="02" />
      <div className="space-y-6">
        {portfolioData.skillCategories.map((category) => (
          <div key={category.name} className="grid grid-cols-1 gap-2 sm:grid-cols-[96px_1fr] sm:gap-5">
            <h3 className="pt-1 text-sm font-medium text-slate-500">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[13px] text-slate-700 transition-colors hover:border-amber-500/40 hover:text-amber-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-amber-400/40 dark:hover:text-amber-300"
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
