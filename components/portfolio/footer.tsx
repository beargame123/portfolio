import { portfolioData } from "@/app/data"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer id="contact" className="py-12 bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
        <div className="flex justify-center space-x-6 mb-8">
          {portfolioData.contactLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
              title={link.name}
            >
              <link.icon className="h-8 w-8" />
            </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
