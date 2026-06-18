import Image from "next/image"
import type { Project } from "@/app/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ImagePreviewDialog } from "./image-preview-dialog"
import { ProjectDetails, ProjectLinks, chip, iframeAllow, hasProjectLinks } from "./project-details"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] transition-colors hover:border-black/20 hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.04]">
      {project.imageUrl &&
        (typeof project.imageUrl === "string" && project.imageUrl.includes("youtube.com/embed") ? (
          <div className="relative aspect-[16/10] w-full border-b border-black/10 dark:border-white/10">
            <iframe
              src={project.imageUrl}
              title={project.name}
              className="absolute inset-0 h-full w-full"
              allow={iframeAllow}
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <ImagePreviewDialog imageUrl={project.imageUrl} altText={project.name}>
            <div className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.name}
                fill
                className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                style={{ objectFit: project.imageFit || "cover" }}
              />
            </div>
          </ImagePreviewDialog>
        ))}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{project.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{project.shortDescription}</p>

        {(project.period || project.role) && (
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            {project.period && <span className="font-mono tabular-nums text-slate-500">{project.period}</span>}
            {project.role && <span className="text-amber-700 dark:text-amber-400/90">{project.role}</span>}
          </div>
        )}

        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className={chip}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`project-details-${project.id}`} className="border-none">
            <AccordionTrigger className="py-3 text-sm font-normal text-slate-600 hover:text-slate-900 hover:no-underline dark:text-zinc-400 dark:hover:text-white">
              상세 정보 보기
            </AccordionTrigger>
            <AccordionContent className="pb-2">
              <ProjectDetails project={project} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {hasProjectLinks(project) && (
          <div className="mt-auto flex items-center gap-4 border-t border-black/[0.08] pt-4 dark:border-white/[0.08]">
            <ProjectLinks project={project} />
          </div>
        )}
      </div>
    </article>
  )
}
