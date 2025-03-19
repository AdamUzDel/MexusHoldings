import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      id: "investment-management",
      title: "Investment Management",
      description: "We manage your investments across diverse sectors to maximize returns while minimizing risk.",
      features: [
        "Portfolio diversification across sectors",
        "Risk assessment and management",
        "Regular performance monitoring",
        "Strategic investment allocation",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "business-monitoring",
      title: "Business Monitoring",
      description: "We closely monitor the businesses in which we invest to ensure they meet performance targets.",
      features: [
        "Regular business performance reviews",
        "Operational efficiency assessment",
        "Market trend analysis",
        "Growth opportunity identification",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "profit-returns",
      title: "Profit Returns",
      description: "We ensure timely and transparent distribution of profits to our investors.",
      features: [
        "Transparent profit calculation",
        "Regular dividend distributions",
        "Reinvestment opportunities",
        "Detailed financial reporting",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Our Investment Solutions</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides comprehensive investment solutions from fund management to profit
              distribution.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
              <Link href="/get-started">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">How We Serve You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures your investments are managed effectively from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/solutions/${solution.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-2"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our investment process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Our Investment Process</h2>
              <p className="text-gray-700 mb-6">
                We follow a structured and transparent investment process to ensure optimal results for our investors.
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Assessment</h3>
                    <p className="text-gray-600">
                      We carefully assess investment opportunities across our target sectors.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Investment</h3>
                    <p className="text-gray-600">
                      We strategically invest funds in businesses with strong growth potential.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                    <p className="text-gray-600">We continuously monitor business performance and market conditions.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Returns</h3>
                    <p className="text-gray-600">
                      We distribute profits to investors and identify reinvestment opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Ready to Grow Your Investments?</h2>
            <p className="text-blue-100 mb-8">
              Join Mexus Holdings International today and benefit from our comprehensive investment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/get-started">Start Investing</Link>
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

