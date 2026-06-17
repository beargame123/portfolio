"use client"

import { useEffect, useState } from "react"
import { portfolioData } from "@/app/data"
import type { Project } from "@/app/data"
import SectionTitle from "./section-title"
import { ProjectCard } from "./project-card"
import { ProjectDetails, ProjectLinks, hasProjectLinks } from "./project-details"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Folder, FolderOpen, ChevronLeft, FileCode2 } from "lucide-react"

const STORAGE_KEY = "portfolio:lastFolder"

const work = portfolioData.workProjects
const personal = portfolioData.personalProjects

type FolderNode = {
  key: string
  label: string
  projects?: Project[]
  isList?: boolean
  children?: FolderNode[]
}

function leaf(key: string, label: string, projects: Project[], isList = false): FolderNode | null {
  return projects.length > 0 ? { key, label, projects, isList } : null
}

function notNull(n: FolderNode | null): n is FolderNode {
  return n !== null
}

const folders: FolderNode[] = [
  {
    key: "work",
    label: "실무",
    children: [
      leaf("work-company", "회사", work.filter((p) => p.featured && p.category === "company")),
      leaf("work-freelance", "외주", work.filter((p) => p.featured && p.category === "freelance")),
    ].filter(notNull),
  },
  leaf("personal", "개인 프로젝트", personal.filter((p) => p.featured)),
  {
    key: "etc",
    label: "기타",
    children: [
      leaf("etc-company", "회사", work.filter((p) => !p.featured && p.category === "company"), true),
      leaf("etc-freelance", "외주", work.filter((p) => !p.featured && p.category === "freelance"), true),
      leaf("etc-personal", "개인 프로젝트", personal.filter((p) => !p.featured), true),
    ].filter(notNull),
  },
]
  .filter(notNull)
  .filter((f) => (f.children ? f.children.length > 0 : (f.projects?.length ?? 0) > 0))

function countProjects(node: FolderNode): number {
  if (node.children) return node.children.reduce((sum, c) => sum + countProjects(c), 0)
  return node.projects?.length ?? 0
}

function resolveNode(pathKeys: string[]): FolderNode | null {
  let nodes: FolderNode[] = folders
  let node: FolderNode | null = null
  for (const key of pathKeys) {
    node = nodes.find((n) => n.key === key) ?? null
    if (!node) return null
    nodes = node.children ?? []
  }
  return node
}

function pathLabels(pathKeys: string[]): string[] {
  const labels: string[] = []
  let nodes: FolderNode[] = folders
  for (const key of pathKeys) {
    const node = nodes.find((n) => n.key === key)
    if (!node) break
    labels.push(node.label)
    nodes = node.children ?? []
  }
  return labels
}

function FolderGrid({ nodes, onOpen }: { nodes: FolderNode[]; onOpen: (key: string) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {nodes.map((n) => (
        <button
          key={n.key}
          type="button"
          onClick={() => onOpen(n.key)}
          className="group flex flex-col items-center gap-2.5 rounded-xl border border-black/10 bg-black/[0.02] px-3 py-6 transition-all hover:-translate-y-0.5 hover:border-amber-500/40 hover:bg-amber-500/[0.06] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-amber-400/40 dark:hover:bg-amber-400/[0.06]"
        >
          <span className="relative h-12 w-12">
            <Folder className="absolute inset-0 h-12 w-12 text-amber-500 transition-opacity group-hover:opacity-0" />
            <FolderOpen className="absolute inset-0 h-12 w-12 text-amber-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
          <span className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">{n.label}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{countProjects(n)}개</span>
        </button>
      ))}
    </div>
  )
}

function OtherProjectItem({ project }: { project: Project }) {
  const hasDetails =
    Boolean(project.overview) ||
    Boolean(project.tasks?.length) ||
    Boolean(project.achievements?.length) ||
    Boolean(project.techStack?.length)

  return (
    <AccordionItem value={project.id} className="border-none">
      <AccordionTrigger className="gap-4 px-4 py-3 text-left hover:bg-slate-100 hover:no-underline dark:hover:bg-slate-800/30 [&>svg]:shrink-0 [&>svg]:text-slate-500">
        <span className="flex min-w-0 flex-1 items-center gap-2.5">
          <FileCode2 className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" />
          <span className="block min-w-0">
            <span className="block truncate text-sm font-medium text-slate-800 dark:text-slate-200">
              {project.name}
            </span>
            <span className="mt-0.5 block truncate text-xs font-normal text-slate-500 dark:text-slate-400">
              {project.shortDescription}
            </span>
          </span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4">
        {hasDetails ? (
          <ProjectDetails project={project} />
        ) : (
          <p className="text-sm text-slate-500">상세 내용이 아직 정리되어 있지 않습니다.</p>
        )}
        {hasProjectLinks(project) && (
          <div className="mt-4 flex items-center gap-4 border-t border-black/[0.08] pt-3 dark:border-white/[0.08]">
            <ProjectLinks project={project} />
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  )
}

function FolderBody({ node, onOpen }: { node: FolderNode; onOpen: (key: string) => void }) {
  if (node.children) {
    return <FolderGrid nodes={node.children} onOpen={onOpen} />
  }
  if (!node.projects) return null
  if (node.isList) {
    return (
      <Accordion
        type="single"
        collapsible
        className="divide-y divide-black/[0.08] overflow-hidden rounded-xl border border-black/10 dark:divide-white/[0.08] dark:border-white/10"
      >
        {node.projects.map((p) => (
          <OtherProjectItem key={p.id} project={p} />
        ))}
      </Accordion>
    )
  }
  return (
    <div className="space-y-4">
      {node.projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}

export function ProjectsSection() {
  const [path, setPath] = useState<string[]>([])
  const [displayPath, setDisplayPath] = useState<string[]>([])
  const [resumePath, setResumePath] = useState<string[] | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw)
        if (Array.isArray(saved) && saved.length > 0 && saved.every((k) => typeof k === "string") && resolveNode(saved)) {
          setResumePath(saved)
        }
      }
    } catch {
      /* localStorage 접근 불가 시 무시 */
    }
  }, [])

  function navigate(next: string[]) {
    setPath(next)
    if (next.length > 0) {
      setDisplayPath(next)
      setResumePath(null)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* 무시 */
      }
    }
  }

  const open = path.length > 0
  const node = resolveNode(displayPath)
  const labels = pathLabels(displayPath)

  return (
    <section id="projects" className="scroll-mt-24 py-14 lg:py-20">
      <SectionTitle title="Projects" number="04" />

      {resumePath && (
        <div className="mb-6 flex flex-col gap-3 rounded-xl border border-amber-500/30 bg-amber-500/[0.08] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700 dark:text-slate-200">
            지난번에{" "}
            <span className="font-semibold text-amber-700 dark:text-amber-300">{pathLabels(resumePath).join(" / ")}</span>{" "}
            폴더를 보고 계셨어요. 이어서 볼까요?
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => navigate(resumePath)}
              className="rounded-md bg-amber-500 px-3 py-1.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-amber-400"
            >
              이어서 열기
            </button>
            <button
              type="button"
              onClick={() => setResumePath(null)}
              className="rounded-md border border-black/10 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-black/[0.03] dark:border-white/15 dark:text-slate-300 dark:hover:bg-white/5"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">폴더를 클릭하면 창이 열립니다.</p>

      <FolderGrid nodes={folders} onOpen={(key) => navigate([key])} />

      <Dialog open={open} onOpenChange={(o) => !o && navigate([])}>
        <DialogContent className="flex max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden border-black/10 p-0 dark:border-white/10">
          <DialogHeader className="flex flex-row items-center gap-2 space-y-0 border-b border-black/10 px-4 py-3 pr-12 text-left dark:border-white/10">
            {displayPath.length > 1 && (
              <button
                type="button"
                onClick={() => navigate(displayPath.slice(0, -1))}
                aria-label="뒤로"
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-black/[0.05] hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            <FolderOpen className="h-5 w-5 shrink-0 text-amber-500" />
            <DialogTitle className="min-w-0 flex-1 truncate text-base font-semibold text-slate-900 dark:text-white">
              {labels.join(" / ") || "프로젝트"}
            </DialogTitle>
            {node && (
              <span className="shrink-0 rounded-full bg-amber-500/15 px-2 py-0.5 text-xs text-amber-700 dark:text-amber-300">
                {countProjects(node)}
              </span>
            )}
            <DialogDescription className="sr-only">{labels.join(" ")} 폴더의 내용입니다.</DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto px-5 py-5">
            {node && <FolderBody node={node} onOpen={(key) => navigate([...displayPath, key])} />}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
