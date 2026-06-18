import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-[var(--hairline)] py-12 lg:py-16">
      <SectionTitle title="Education" number="05" />
      <div className="space-y-1">
        {portfolioData.education.map((edu, index) => (
          <div
            key={index}
            className="group relative -mx-3 rounded-lg px-3 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/40"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium text-slate-900 dark:text-slate-100">{edu.institution}</p>
              <p className="shrink-0 font-mono text-xs tabular-nums text-slate-500">{edu.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
              {edu.degree}
              {edu.status ? ` · ${edu.status}` : ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
