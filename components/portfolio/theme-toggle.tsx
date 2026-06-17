"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme !== "light"

  return (
    <button
      type="button"
      aria-label="라이트/다크 모드 전환"
      title="라이트/다크 모드 전환"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-slate-500 transition-colors hover:border-amber-500/40 hover:text-amber-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-amber-400"
    >
      {mounted ? (
        isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  )
}
