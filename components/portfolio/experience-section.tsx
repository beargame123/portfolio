import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-[var(--hairline)] py-12 lg:py-16">
      <SectionTitle title="Career" number="03" />
      <div className="space-y-1">
        {portfolioData.experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative -mx-3 rounded-lg px-3 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/40"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium text-slate-900 dark:text-slate-100">{exp.company}</p>
              <p className="shrink-0 font-mono text-xs tabular-nums text-slate-500">{exp.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
              {exp.role}
              {exp.department ? ` · ${exp.department}` : ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
