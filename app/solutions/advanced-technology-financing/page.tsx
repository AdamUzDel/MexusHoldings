import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AdvancedTechnologyFinancingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/32dLegLC7fNUbz77Nrg90ygN5BIFdF-metaam9iLXZhY2FuY2llcy5wbmc=-.png?height=800&width=1600"
            alt="Advanced Technology Financing"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">
              Advanced Technology Financing
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides specialized financing solutions to support the adoption and
              development of advanced technologies across East Africa.
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
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Accelerating Technology Adoption</h2>
              <p className="text-gray-700 mb-6">
                Advanced technologies are transforming industries and creating new opportunities across East Africa.
                Mexus Holdings International is committed to supporting businesses in adopting these technologies
                through specialized financing solutions.
              </p>
              <p className="text-gray-700 mb-8">
                Our Advanced Technology Financing program provides tailored financial products designed to address the
                unique challenges of technology investments, including longer payback periods, higher upfront costs, and
                the need for specialized expertise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/3hNR1n5joqIhc9nwyOBKfqZtsU52RX-metaYWR2YW5jZWR0ZWNoX2ZpbmFuY2UtbWluLnBuZw==-.png?height=400&width=600"
                  alt="Advanced technology"
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
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Technology Financing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of financing solutions designed specifically for technology investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Financing for AI implementation projects, including hardware, software, and expertise.",
                icon: "🤖",
              },
              {
                title: "Blockchain Technology",
                description: "Support for blockchain implementation across supply chains, finance, and other sectors.",
                icon: "🔗",
              },
              {
                title: "IoT Solutions",
                description:
                  "Financing for Internet of Things deployments, including sensors, networks, and analytics platforms.",
                icon: "📱",
              },
              {
                title: "Cloud Computing",
                description: "Support for cloud migration, infrastructure, and platform-as-a-service implementations.",
                icon: "☁️",
              },
              {
                title: "Cybersecurity",
                description: "Financing for cybersecurity infrastructure, software, and training programs.",
                icon: "🔒",
              },
              {
                title: "Digital Transformation",
                description: "Comprehensive financing for enterprise-wide digital transformation initiatives.",
                icon: "🔄",
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
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">
                Benefits of Our Technology Financing
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Flexible Repayment Terms</h3>
                    <p className="text-gray-600">
                      Repayment structures aligned with the expected returns and cash flows from technology investments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Technical Advisory Support</h3>
                    <p className="text-gray-600">
                      Access to technical experts who can help assess technology solutions and implementation
                      strategies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Competitive Rates</h3>
                    <p className="text-gray-600">
                      Financing rates designed to make advanced technology adoption financially viable.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ecosystem Connections</h3>
                    <p className="text-gray-600">
                      Access to our network of technology providers, consultants, and implementation partners.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/fintech-data.jpg?height=400&width=600"
                  alt="Technology financing benefits"
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
              See how our technology financing has helped businesses across East Africa transform their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing Automation",
                description:
                  "Financed a complete factory automation system for a leading manufacturer, resulting in 40% productivity increase.",
                image: "/east-african-manufacturers-association-1-1647010715.profileImage.2x-jpg-webp.webp",
              },
              {
                title: "Healthcare AI Implementation",
                description:
                  "Provided financing for AI diagnostic tools at a regional hospital network, improving diagnostic accuracy by 30%.",
                image: "/AdobeStock_941276637.jpeg?height=200&width=300",
              },
              {
                title: "Agricultural IoT Network",
                description:
                  "Financed an IoT sensor network for a large agricultural cooperative, reducing water usage by 25% and increasing yields.",
                image: "/image_6c985c52acc5278375c8b74a82b91f7c-scaled.jpg?height=200&width=300",
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
              Ready to Finance Your Technology Transformation?
            </h2>
            <p className="text-blue-100 mb-8">
              Contact our team to discuss how our Advanced Technology Financing solutions can support your business.
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
