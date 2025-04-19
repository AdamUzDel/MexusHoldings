import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DigitizationFinancePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/evolution-of-financial-inclusion-in-east-africa.png?height=800&width=1600"
            alt="Digitization Finance"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">Digitization Finance</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides specialized financing solutions to support businesses in their
              digital transformation journey across East Africa.
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
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Enabling Digital Transformation</h2>
              <p className="text-gray-700 mb-6">
                Digital transformation is essential for businesses to remain competitive in today&apos;s rapidly evolving
                marketplace. Mexus Holdings International is committed to supporting East African businesses in their
                digitization journey through specialized financing solutions.
              </p>
              <p className="text-gray-700 mb-8">
                Our Digitization Finance program provides tailored financial products designed to address the unique
                challenges of digital transformation projects, including technology acquisition, implementation costs,
                and organizational change management.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/Digital_Transformation.jpg?height=400&width=600"
                  alt="Digital transformation"
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
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Digitization Financing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of financing solutions designed specifically for digital transformation initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Development",
                description:
                  "Financing for businesses looking to establish or enhance their online sales channels and digital marketplaces.",
                icon: "🛒",
              },
              {
                title: "Enterprise Systems",
                description:
                  "Support for implementing ERP, CRM, and other enterprise software systems to streamline operations.",
                icon: "💻",
              },
              {
                title: "Digital Marketing",
                description:
                  "Financing for comprehensive digital marketing initiatives, including platform development and campaign execution.",
                icon: "📱",
              },
              {
                title: "Data Analytics",
                description:
                  "Support for implementing data analytics capabilities, including data warehousing and business intelligence tools.",
                icon: "📊",
              },
              {
                title: "Digital Infrastructure",
                description:
                  "Financing for network infrastructure, servers, and other hardware required for digital operations.",
                icon: "🌐",
              },
              {
                title: "Digital Skills Development",
                description:
                  "Support for training programs to develop the digital skills needed for successful transformation.",
                icon: "👨‍💻",
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
                Benefits of Our Digitization Financing
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Comprehensive Coverage</h3>
                    <p className="text-gray-600">
                      Financing that covers all aspects of digital transformation, from hardware and software to
                      implementation and training.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Digital Transformation Advisory</h3>
                    <p className="text-gray-600">
                      Access to experts who can help assess digital needs, select appropriate solutions, and plan
                      implementation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Staged Financing</h3>
                    <p className="text-gray-600">
                      Phased financing approach that aligns with the stages of your digital transformation journey.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Digital Ecosystem Access</h3>
                    <p className="text-gray-600">
                      Connections to our network of technology providers, digital agencies, and implementation partners.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/Mobile-money-transfer..jpg?height=400&width=600"
                  alt="Digitization financing benefits"
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
              See how our digitization financing has helped businesses across East Africa transform their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Digital Transformation",
                description:
                  "Financed a comprehensive digital transformation for a retail chain, including e-commerce platform and inventory management system.",
                image: "/IndustryPlaybookRetail12842022145832.jpg?height=200&width=300",
              },
              {
                title: "Financial Services Digitization",
                description:
                  "Provided financing for a microfinance institution to implement digital lending platforms and mobile banking services.",
                image: "/momo.jpg?height=200&width=300",
              },
              {
                title: "Manufacturing Process Digitization",
                description:
                  "Financed the implementation of digital process control and monitoring systems for a manufacturing company.",
                image: "/Africa-manufacturing.webp?height=200&width=300",
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
              Ready to Finance Your Digital Transformation?
            </h2>
            <p className="text-blue-100 mb-8">
              Contact our team to discuss how our Digitization Finance solutions can support your business.
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
