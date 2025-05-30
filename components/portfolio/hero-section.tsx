import Image from "next/image"
import { portfolioData } from "@/app/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative py-20 md:py-32 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${portfolioData.coverImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Image
          src={portfolioData.profileImageUrl || "/placeholder.svg"}
          alt={portfolioData.name}
          width={160}
          height={160}
          className="rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{portfolioData.name}</h1>
        <p className="text-2xl text-yellow-300 mb-8">{portfolioData.title}</p>
        <div className="max-w-2xl mx-auto text-lg text-gray-200 space-y-2">
          {portfolioData.introduction.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="mt-10">
          <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
            <Link href="#contact">연락하기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
