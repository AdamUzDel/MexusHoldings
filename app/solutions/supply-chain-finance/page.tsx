import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SupplyChainFinancePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/supplychain.avif?height=800&width=1600"
            alt="Supply Chain Finance"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">Supply Chain Finance</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides specialized financing solutions to optimize working capital and
              strengthen supply chains across East Africa.
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
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Strengthening Supply Chains</h2>
              <p className="text-gray-700 mb-6">
                Efficient supply chains are critical for business success and economic growth. Mexus Holdings
                International is committed to supporting businesses in optimizing their supply chains through
                specialized financing solutions.
              </p>
              <p className="text-gray-700 mb-8">
                Our Supply Chain Finance program provides tailored financial products designed to improve working
                capital efficiency, strengthen supplier relationships, and enhance supply chain resilience across East
                Africa.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/responsable-supply-chain.1.0.jpg?height=400&width=600"
                  alt="Supply chain finance"
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
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Supply Chain Financing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of financing solutions designed specifically for supply chain optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Supplier Finance",
                description:
                  "Early payment solutions that allow suppliers to receive payment ahead of agreed terms at competitive rates.",
                icon: "🏭",
              },
              {
                title: "Distributor Finance",
                description:
                  "Financing solutions for distributors to optimize inventory levels and meet market demand efficiently.",
                icon: "🚚",
              },
              {
                title: "Inventory Finance",
                description:
                  "Working capital solutions to help businesses maintain optimal inventory levels throughout seasonal fluctuations.",
                icon: "📦",
              },
              {
                title: "Trade Finance",
                description:
                  "Solutions to facilitate domestic and international trade, including letters of credit and trade loans.",
                icon: "🌐",
              },
              {
                title: "Supply Chain Digitization",
                description:
                  "Financing for digital supply chain solutions that enhance visibility, efficiency, and resilience.",
                icon: "💻",
              },
              {
                title: "Sustainable Supply Chain",
                description:
                  "Specialized financing for initiatives that enhance the environmental and social sustainability of supply chains.",
                icon: "🌱",
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
                Benefits of Our Supply Chain Financing
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Improved Working Capital</h3>
                    <p className="text-gray-600">
                      Optimize cash flow for both buyers and suppliers through tailored financing solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Stronger Supplier Relationships</h3>
                    <p className="text-gray-600">
                      Build stronger relationships with suppliers by offering early payment options and financial
                      stability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Enhanced Supply Chain Resilience</h3>
                    <p className="text-gray-600">
                      Strengthen your supply chain against disruptions through improved financial stability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Supply Chain Visibility</h3>
                    <p className="text-gray-600">
                      Gain better visibility into your supply chain through our integrated financing platforms.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/The-Benefits-of-a-Consistent-Supply-Chain-CHAS-blog.jpeg?height=400&width=600"
                  alt="Supply chain financing benefits"
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
              See how our supply chain financing has helped businesses across East Africa optimize their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agricultural Supply Chain",
                description:
                  "Provided financing across an agricultural supply chain, from farmers to processors to distributors, improving efficiency and reducing costs.",
                image: "/1698134617271.png?height=200&width=300",
              },
              {
                title: "Manufacturing Supplier Network",
                description:
                  "Implemented a supplier finance program for a manufacturing company, strengthening relationships with 50+ suppliers.",
                image: "/GettyImages-1036899652.jpg?height=200&width=300",
              },
              {
                title: "Retail Distribution Network",
                description:
                  "Financed inventory and distribution for a retail network, reducing stockouts by 30% and improving sales.",
                image: "/Supply-Chain-Management-for-Businesses.webp?height=200&width=300",
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
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-blue-100 mb-8">
              Contact our team to discuss how our Supply Chain Finance solutions can support your business.
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
