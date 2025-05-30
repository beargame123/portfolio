import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" icon={GraduationCap} />
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">{edu.institution}</CardTitle>
                <CardDescription className="text-yellow-600">{edu.degree}</CardDescription>
                <p className="text-sm text-slate-500">
                  {edu.period} ({edu.status})
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
