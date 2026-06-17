import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/app/data"
import { ExternalLink, Github, FileText, Figma, Package, Smartphone } from "lucide-react"
import { ImagePreviewDialog } from "./image-preview-dialog"

export const iframeAllow =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

export const chip =
  "rounded-md border border-black/10 bg-black/[0.04] px-2 py-0.5 text-[12px] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400"

const label = "mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500"
const marker = "list-disc space-y-1 pl-5 marker:text-slate-300 dark:marker:text-zinc-600"
const imgBorder = "border-black/10 dark:border-white/10"

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-400">
      {project.overview && <p className="leading-relaxed">{project.overview}</p>}

      {project.techStack && (
        <div>
          <p className={label}>기술 스택</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className={chip}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.teamComposition && (
        <div>
          <p className={label}>팀 구성</p>
          <ul className={`${marker} space-y-0.5`}>
            {project.teamComposition.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {project.tasks?.map((task, idx) => (
        <div key={idx}>
          <p className="mb-1.5 font-medium text-slate-800 dark:text-zinc-200">{task.title}</p>
          <ul className={marker}>
            {task.items.map((item) => (
              <li key={item} className="whitespace-pre-line leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          {task.imageUrl &&
            (typeof task.imageUrl === "string" && task.imageUrl.includes("youtube.com/embed") ? (
              <div className={`relative mt-2 h-[150px] w-[200px] overflow-hidden rounded-md border ${imgBorder}`}>
                <iframe
                  src={task.imageUrl}
                  title={task.title}
                  className="absolute inset-0 h-full w-full"
                  allow={iframeAllow}
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <ImagePreviewDialog imageUrl={task.imageUrl} altText={task.title}>
                {Array.isArray(task.imageUrl) ? (
                  <div className="mt-2 flex cursor-pointer flex-wrap gap-2">
                    {task.imageUrl.map((url, index) => (
                      <div key={index} className={`relative h-16 w-24 overflow-hidden rounded-md border ${imgBorder}`}>
                        <Image
                          src={url}
                          alt={`${task.title} ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`relative mt-2 h-[150px] w-[200px] cursor-pointer overflow-hidden rounded-md border ${imgBorder}`}
                  >
                    <Image
                      src={task.imageUrl as string}
                      alt={task.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                )}
              </ImagePreviewDialog>
            ))}
        </div>
      ))}

      {project.achievements && (
        <div>
          <p className={label}>주요 성과</p>
          <ul className={marker}>
            {project.achievements.map((ach) => (
              <li key={ach} className="leading-relaxed">
                {ach}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function ProjectLinks({ project }: { project: Project }) {
  const cls = "h-[18px] w-[18px] text-slate-500 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
  return (
    <>
      {project.liveUrl && (
        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live / 사이트">
          <ExternalLink className={cls} />
        </Link>
      )}
      {project.playStoreUrl && (
        <Link href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" title="Google Play">
          <Smartphone className={cls} />
        </Link>
      )}
      {project.githubUrl && (
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
          <Github className={cls} />
        </Link>
      )}
      {project.npmUrl && (
        <Link href={project.npmUrl} target="_blank" rel="noopener noreferrer" title="npm">
          <Package className={cls} />
        </Link>
      )}
      {project.figmaUrl && (
        <Link href={project.figmaUrl} target="_blank" rel="noopener noreferrer" title="Figma">
          <Figma className={cls} />
        </Link>
      )}
      {project.notionUrl && project.notionUrl !== "노션 비공개" && project.notionUrl.trim() !== "" && (
        <Link href={project.notionUrl} target="_blank" rel="noopener noreferrer" title="Notion">
          <FileText className={cls} />
        </Link>
      )}
    </>
  )
}

export function hasProjectLinks(project: Project) {
  return Boolean(
    project.liveUrl ||
      project.playStoreUrl ||
      project.githubUrl ||
      project.npmUrl ||
      project.figmaUrl ||
      (project.notionUrl && project.notionUrl !== "노션 비공개" && project.notionUrl.trim() !== ""),
  )
}
