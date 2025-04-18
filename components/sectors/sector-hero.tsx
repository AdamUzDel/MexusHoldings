import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SectorHeroProps {
  title: string
  subtitle: string
  description: string
  image: string
  ctaText?: string
  ctaLink?: string
}

export function SectorHero({
  title,
  subtitle,
  description,
  image,
  ctaText = "Learn more",
  ctaLink = "/contact",
}: SectorHeroProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container relative z-10 py-16 md:py-24 mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-3 leading-tight text-blue-600">{title}</h1>
            <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700">{subtitle}</p>
            <p className="text-gray-600 mb-8 text-lg">{description}</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
