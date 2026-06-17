import { portfolioData } from "@/app/data"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const email = portfolioData.contactLinks.find((l) => l.name === "Email")
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200 pb-6 pt-10 dark:border-slate-800/60">
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        새로운 기회나 협업 제안은 언제든 환영합니다.{" "}
        {email && (
          <a
            href={email.url}
            className="font-medium text-slate-800 underline-offset-2 transition-colors hover:text-amber-600 hover:underline dark:text-slate-200 dark:hover:text-amber-400"
          >
            이메일로 연락주세요
          </a>
        )}
        .
      </p>
      <p className="mt-5 font-mono text-xs text-slate-400 dark:text-slate-600" suppressHydrationWarning>
        © {currentYear} {portfolioData.name} · Built with Next.js &amp; Tailwind CSS
      </p>
    </footer>
  )
}
