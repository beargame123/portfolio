"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "awards-certs", label: "Awards" },
  { id: "contact", label: "Contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="메뉴 열기"
          className="fixed right-16 top-5 z-50 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white/70 text-slate-700 backdrop-blur transition-colors hover:border-amber-500/40 hover:text-amber-600 dark:border-white/10 dark:bg-[#0a0f1c]/70 dark:text-slate-300 dark:hover:text-amber-400 lg:hidden"
        >
          <Menu className="h-[18px] w-[18px]" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-64 border-black/10 bg-white dark:border-white/10 dark:bg-[#0a0f1c]"
      >
        <SheetTitle className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
          김호영
        </SheetTitle>
        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-black/[0.04] hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
