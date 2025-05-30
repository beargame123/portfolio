import { portfolioData } from "@/app/data"
import SectionTitle from "./section-title"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Briefcase } from "lucide-react" // Using Briefcase for "About Me"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" icon={Briefcase} />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {portfolioData.contactLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <link.icon className="h-6 w-6 mr-3 text-yellow-600" />
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-yellow-600 transition-colors"
                  >
                    {link.text || link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Blog</h3>
            <div className="space-y-4">
              {portfolioData.blogLinks.map((blog) => (
                <Card key={blog.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <blog.icon className="h-6 w-6 mr-2 text-yellow-600" />
                      <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {blog.name}
                      </Link>
                    </CardTitle>
                    {blog.description && <CardDescription>{blog.description}</CardDescription>}
                  </CardHeader>
                  {blog.imageUrl && (
                    <CardContent>
                      <Link href={blog.url} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={blog.imageUrl || "/placeholder.svg"}
                          alt={blog.name}
                          width={300}
                          height={150}
                          className="rounded-md object-cover"
                        />
                      </Link>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
