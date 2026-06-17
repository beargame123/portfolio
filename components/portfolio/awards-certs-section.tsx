import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"

export function AwardsCertsSection() {
  return (
    <section id="awards-certs" className="scroll-mt-24 py-14 lg:py-20">
      <SectionTitle title="Awards & Certifications" number="06" />
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Awards</h3>
          <div className="space-y-1">
            {portfolioData.awards.map((award, index) => (
              <div
                key={index}
                className="group relative -mx-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/40"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium text-slate-900 transition-colors group-hover:text-amber-600 dark:text-slate-100 dark:group-hover:text-amber-400">
                    {award.name}
                  </p>
                  {award.date && <p className="shrink-0 font-mono text-xs text-slate-500">{award.date}</p>}
                </div>
                {award.project && <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{award.project}</p>}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.certifications.map((cert, index) => (
              <span
                key={index}
                className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[13px] text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300"
              >
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
