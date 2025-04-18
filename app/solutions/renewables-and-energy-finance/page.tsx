import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RenewablesAndEnergyFinancePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Renewables and Energy Finance"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">
              Renewables and Energy Finance
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides specialized financing solutions to support the development of
              renewable energy and sustainable power projects across East Africa.
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
                Powering East Africa&apos;s Sustainable Future
              </h2>
              <p className="text-gray-700 mb-6">
                East Africa has abundant renewable energy resources, including solar, wind, hydro, and geothermal. Mexus
                Holdings International is committed to supporting the development of these resources through specialized
                financing solutions.
              </p>
              <p className="text-gray-700 mb-8">
                Our Renewables and Energy Finance program provides tailored financial products designed to address the
                unique challenges of renewable energy projects, including longer development timelines, higher upfront
                capital costs, and specialized technical requirements.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Renewable energy"
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
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Energy Financing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of financing solutions designed specifically for renewable energy and sustainable power
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Solar Energy",
                description:
                  "Financing for utility-scale solar farms, commercial installations, and off-grid solar solutions.",
                icon: "☀️",
              },
              {
                title: "Wind Power",
                description:
                  "Support for wind farm development from feasibility studies to construction and operation.",
                icon: "💨",
              },
              {
                title: "Hydropower",
                description:
                  "Financing for small and medium-scale hydropower projects that provide reliable baseload power.",
                icon: "💧",
              },
              {
                title: "Geothermal Energy",
                description: "Support for geothermal exploration and development along the East African Rift Valley.",
                icon: "♨️",
              },
              {
                title: "Energy Storage",
                description:
                  "Financing for battery storage and other energy storage technologies to enhance grid stability.",
                icon: "🔋",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Support for projects that reduce energy consumption in industrial, commercial, and residential settings.",
                icon: "💡",
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
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Benefits of Our Energy Financing</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Long-Term Financing</h3>
                    <p className="text-gray-600">
                      Extended loan terms aligned with the long operational life of renewable energy assets.
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
                      Access to technical experts who can help assess renewable energy technologies and project
                      feasibility.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Flexible Structures</h3>
                    <p className="text-gray-600">
                      Financing structures that accommodate the cash flow profile of renewable energy projects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Project Development Support</h3>
                    <p className="text-gray-600">
                      Financial support for feasibility studies, environmental assessments, and other development
                      activities.
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
                  alt="Energy financing benefits"
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
              See how our renewable energy financing has helped transform East Africa&apos;s energy landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solar Mini-Grid Network",
                description:
                  "Financed a network of solar mini-grids providing electricity to 15 rural communities, benefiting over 50,000 people.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Commercial Solar Installation",
                description:
                  "Provided financing for a 2MW solar installation at a manufacturing facility, reducing energy costs by 40%.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Hydropower Development",
                description:
                  "Financed a 5MW run-of-river hydropower project providing reliable electricity to a regional grid.",
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
              Ready to Finance Your Renewable Energy Project?
            </h2>
            <p className="text-blue-100 mb-8">
              Contact our team to discuss how our Renewables and Energy Finance solutions can support your project.
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
