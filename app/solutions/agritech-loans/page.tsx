import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AgritechLoansPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Agritech Loans"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">Agritech Loans</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides specialized financing solutions to support agricultural technology
              adoption and innovation across East Africa.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">
                Transforming Agriculture Through Technology
              </h2>
              <p className="text-gray-700 mb-6">
                Agriculture is a cornerstone of East Africa&apos;s economy, and technological innovation is key to increasing
                productivity, sustainability, and resilience in the sector. Mexus Holdings International is committed to
                supporting agritech adoption through specialized financing solutions.
              </p>
              <p className="text-gray-700 mb-8">
                Our Agritech Loans program provides tailored financial products designed to address the unique
                challenges of agricultural technology investments, including seasonality, weather-related risks, and the
                need for specialized equipment and expertise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultural technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Agritech Financing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of financing solutions designed specifically for agricultural technology adoption and
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Agriculture",
                description:
                  "Financing for precision farming technologies, including sensors, drones, and GPS-guided equipment.",
                icon: "🚜",
              },
              {
                title: "Irrigation Technology",
                description: "Support for modern irrigation systems that optimize water usage and enhance crop yields.",
                icon: "💧",
              },
              {
                title: "Smart Greenhouses",
                description:
                  "Financing for controlled environment agriculture, including smart greenhouses and vertical farming.",
                icon: "🏢",
              },
              {
                title: "Agricultural IoT",
                description:
                  "Support for Internet of Things applications in agriculture, including remote monitoring and automation.",
                icon: "📱",
              },
              {
                title: "Post-Harvest Technology",
                description:
                  "Financing for technologies that reduce post-harvest losses and enhance food preservation.",
                icon: "🌾",
              },
              {
                title: "Agri-Fintech Solutions",
                description:
                  "Support for digital financial services tailored to the agricultural sector, including mobile payments and micro-insurance.",
                icon: "💳",
              },
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Benefits of Our Agritech Financing</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Seasonal Repayment Structures</h3>
                    <p className="text-gray-600">
                      Repayment schedules aligned with agricultural seasons and cash flow patterns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Agricultural Risk Management</h3>
                    <p className="text-gray-600">
                      Integrated risk management solutions, including weather insurance and price protection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Technical Advisory</h3>
                    <p className="text-gray-600">
                      Access to agricultural technology experts who can help assess solutions and implementation
                      strategies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Market Linkages</h3>
                    <p className="text-gray-600">
                      Connections to our network of agricultural buyers, processors, and exporters.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agritech financing benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our agritech financing has helped transform agricultural practices across East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Farming Cooperative",
                description:
                  "Financed precision agriculture technology for a cooperative of 500 smallholder farmers, increasing yields by 35%.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Smart Irrigation Project",
                description:
                  "Provided financing for a smart irrigation system covering 1,000 hectares, reducing water usage by 40% while improving crop quality.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Vertical Farming Venture",
                description:
                  "Financed a vertical farming operation in an urban area, producing high-value crops year-round with 90% less water than conventional farming.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((case_study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={case_study.image || "/placeholder.svg"}
                    alt={case_study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{case_study.title}</h3>
                  <p className="text-gray-600">{case_study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">
              Ready to Transform Your Agricultural Operations?
            </h2>
            <p className="text-blue-100 mb-8">
              Contact our team to discuss how our Agritech Loans can support your technology adoption and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                <Link href="/get-started">Apply for Financing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
