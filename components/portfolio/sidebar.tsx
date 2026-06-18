"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/app/data"

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "awards-certs", label: "Awards" },
]

export function Sidebar() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="mb-14 lg:sticky lg:top-0 lg:mb-0 lg:flex lg:flex-col lg:py-24">
      <div>
        <Image
          src={portfolioData.profileImageUrl || "/placeholder.svg"}
          alt={portfolioData.name}
          width={96}
          height={96}
          priority
          className="mb-6 h-20 w-20 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
        />
        <Link
          href="#"
          className="block text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-slate-900 dark:text-slate-100 sm:text-[52px]"
        >
          {portfolioData.name}
        </Link>
        <p className="mt-3 text-[15px] font-semibold tracking-tight text-amber-700 dark:text-amber-400">
          {portfolioData.title}
        </p>
        <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Slowly but accurately
        </p>
        <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
          새로운 개념을 배울 때, 빠름보다 깊게 이해하는 걸 추구합니다.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <Link href={`#${item.id}`} className="group flex items-center py-1">
                    <span
                      className={`mr-4 h-px transition-all duration-200 ${
                        isActive
                          ? "w-14 bg-amber-600 dark:bg-amber-400"
                          : "w-7 bg-slate-300 group-hover:w-12 group-hover:bg-slate-500 dark:bg-slate-700 dark:group-hover:bg-slate-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                        isActive
                          ? "text-amber-700 dark:text-amber-400"
                          : "text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5">
        {portfolioData.contactLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="text-slate-500 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
          >
            <link.icon className="h-5 w-5" />
          </Link>
        ))}
      </div>
    </header>
  )
}
