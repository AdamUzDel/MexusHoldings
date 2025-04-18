import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SectorCtaProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export function SectorCta({ title, description, ctaText, ctaLink }: SectorCtaProps) {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg mb-8 text-blue-100">{description}</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
