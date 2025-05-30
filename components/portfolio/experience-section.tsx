import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Career" icon={Briefcase} />
        <div className="space-y-8">
          {portfolioData.experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-slate-800">{exp.company}</CardTitle>
                <CardDescription className="text-yellow-600">
                  {exp.role} {exp.department && `(${exp.department})`}
                </CardDescription>
                <p className="text-sm text-slate-500">{exp.period}</p>
              </CardHeader>
              {exp.description && (
                <CardContent>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
