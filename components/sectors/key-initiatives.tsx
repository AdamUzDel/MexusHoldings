import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Initiative {
  title: string
  description: string
  image: string
}

interface KeyInitiativesProps {
  title: string
  subtitle: string
  initiatives: Initiative[]
}

export function KeyInitiatives({ title, subtitle, initiatives }: KeyInitiativesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src={initiative.image || "/placeholder.svg"}
                  alt={initiative.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover "
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
