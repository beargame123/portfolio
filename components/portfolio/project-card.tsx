import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/app/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileText, Video } from "lucide-react" // Assuming Video for Figma

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="shadow-lg flex flex-col h-full">
      <CardHeader>
        {project.imageUrl && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-slate-800 flex items-center">
          {project.icon && <span className="mr-2 text-2xl">{project.icon}</span>}
          {project.name}
        </CardTitle>
        <CardDescription>{project.shortDescription}</CardDescription>
        {project.period && <p className="text-xs text-slate-500">{project.period}</p>}
        {project.role && <p className="text-sm text-yellow-600 font-medium">{project.role}</p>}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-yellow-100 text-yellow-800">
              {tag}
            </Badge>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`project-details-${project.id}`}>
            <AccordionTrigger className="text-sm">상세 정보 보기</AccordionTrigger>
            <AccordionContent className="text-sm text-slate-600 space-y-3">
              {project.overview && (
                <p>
                  <strong>개요:</strong> {project.overview}
                </p>
              )}
              {project.techStack && (
                <div>
                  <strong>기술 스택:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {project.techStack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.teamComposition && (
                <div>
                  <strong>팀 구성:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {project.teamComposition.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.tasks?.map((task, idx) => (
                <div key={idx}>
                  <strong>{task.title}:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {task.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {task.imageUrl && (
                    <Image
                      src={task.imageUrl || "/placeholder.svg"}
                      alt={task.title}
                      width={200}
                      height={150}
                      className="mt-2 rounded"
                    />
                  )}
                </div>
              ))}
              {project.achievements && (
                <div>
                  <strong>주요 성과:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {project.achievements.map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t">
        <div className="flex space-x-3">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
              <ExternalLink className="h-5 w-5 text-slate-500 hover:text-yellow-600" />
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
              <Github className="h-5 w-5 text-slate-500 hover:text-yellow-600" />
            </Link>
          )}
          {project.figmaUrl && (
            <Link href={project.figmaUrl} target="_blank" rel="noopener noreferrer" title="Figma Design">
              <Video className="h-5 w-5 text-slate-500 hover:text-yellow-600" />
            </Link>
          )}
          {project.notionUrl && project.notionUrl !== "노션 비공개" && project.notionUrl.trim() !== "" && (
            <Link href={project.notionUrl} target="_blank" rel="noopener noreferrer" title="Notion Document">
              <FileText className="h-5 w-5 text-slate-500 hover:text-yellow-600" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
