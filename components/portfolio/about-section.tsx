import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pb-12 lg:pb-16">
      <SectionTitle title="About" number="01" />
      <div className="max-w-[68ch] space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        {portfolioData.introduction.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="mt-7">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Writing</h3>
        <div className="space-y-2.5">
          {portfolioData.blogLinks.map((blog) => (
            <Link
              key={blog.name}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-slate-800 transition-colors hover:text-amber-600 dark:text-slate-200 dark:hover:text-amber-400"
            >
              <blog.icon className="h-4 w-4 text-slate-500 transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400" />
              {blog.name}
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-600 dark:text-slate-600 dark:group-hover:text-amber-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
