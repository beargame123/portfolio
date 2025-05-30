import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { AwardIcon as AwardIconLucide, Star } from "lucide-react" // Renamed to avoid conflict

export function AwardsCertsSection() {
  return (
    <section id="awards-certs" className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="Awards & Certifications" icon={Star} />
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700 flex items-center">
              <AwardIconLucide className="mr-2 h-6 w-6 text-yellow-500" />
              Awards
            </h3>
            <div className="space-y-4">
              {portfolioData.awards.map((award, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-slate-800">{award.name}</CardTitle>
                    {award.project && <p className="text-sm text-slate-600">Project: {award.project}</p>}
                    {award.date && <p className="text-xs text-slate-500">{award.date}</p>}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700 flex items-center">
              <Star className="mr-2 h-6 w-6 text-yellow-500" />
              Certifications
            </h3>
            <div className="space-y-4">
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-slate-800">{cert.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
