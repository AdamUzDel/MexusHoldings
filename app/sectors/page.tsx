import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SectorsPage() {
  const sectors = [
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Supporting manufacturing businesses to enhance production capabilities and expand operations.",
      image: "/manufacturing.jpg?height=300&width=400",
    },
    {
      id: "hospitality",
      title: "Hospitality",
      description: "Investing in hotels, resorts, and tourism facilities to boost the hospitality sector.",
      image: "/hospitality.jpg?height=300&width=400",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Funding healthcare facilities and medical services to improve healthcare access and quality.",
      image: "/healthcare.jpg?height=300&width=400",
    },
    {
      id: "aviation",
      title: "Aviation",
      description: "Supporting aviation infrastructure and services to enhance connectivity and transportation.",
      image: "/aviation1.webp?height=300&width=400",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Investing in commercial and residential real estate projects for sustainable development.",
      image: "/real-estate.webp?height=300&width=400",
    },
    {
      id: "oil-and-gas",
      title: "Oil & Gas",
      description: "Funding exploration, production, and distribution in the oil and gas sector.",
      image: "/oil-and-gas.webp?height=300&width=400",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Our Investment Sectors</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International invests across six key sectors that drive economic growth and development in
              East Africa and beyond.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
              <Link href="/get-started">Become an Investor</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card key={sector.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={sector.image || "/placeholder.svg"} alt={sector.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{sector.title}</CardTitle>
                  <CardDescription>{sector.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/sectors/${sector.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Why We Focus on These Sectors</h2>
              <p className="text-gray-700 mb-4">
                Our investment strategy targets sectors with high growth potential and significant impact on economic
                development in East Africa and beyond.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Economic Impact</h3>
                    <p className="text-gray-600">These sectors are key drivers of economic growth and job creation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Growth Potential</h3>
                    <p className="text-gray-600">Each sector shows strong growth trends and future opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Diversification</h3>
                    <p className="text-gray-600">A diverse portfolio across these sectors reduces investment risk.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-200 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/real-estate.webp?height=400&width=600"
                  alt="Investment sectors"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Ready to Invest in These Sectors?</h2>
            <p className="text-blue-100 mb-8">
              Join Mexus Holdings International as an investor and be part of the growth story across these promising
              sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/get-started">Become an Investor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

