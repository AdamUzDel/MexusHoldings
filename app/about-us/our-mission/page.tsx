import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OurMissionPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Our Mission"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">Our Mission</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International is dedicated to driving economic growth and development across East Africa
              through strategic investments and financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Our Mission Statement</h2>
              <p className="text-gray-700 mb-6 text-lg">
              &quot;To accelerate East Africa&apos;s economic development by providing innovative financial solutions and
                strategic investments that empower businesses, create jobs, and enhance prosperity across the region.&quot;
              </p>
              <p className="text-gray-700 mb-8">
                At Mexus Holdings International, we believe that access to capital and financial expertise is essential
                for economic growth and development. We are committed to bridging the financing gap for businesses
                across East Africa, with a focus on key sectors that drive economic transformation.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions, actions, and relationships as we work to fulfill our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of ethics and transparency in all our dealings, building trust with our clients, partners, and communities.",
                icon: "🤝",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovation in our financial solutions and operations, constantly seeking new ways to address the evolving needs of East African businesses.",
                icon: "💡",
              },
              {
                title: "Impact",
                description:
                  "We measure our success by the positive economic and social impact we create across East Africa, including job creation and improved livelihoods.",
                icon: "🌍",
              },
              {
                title: "Inclusion",
                description:
                  "We are committed to financial inclusion, ensuring that our solutions are accessible to businesses of all sizes across diverse sectors and regions.",
                icon: "🔄",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, maintaining high standards of professionalism, service, and performance.",
                icon: "⭐",
              },
              {
                title: "Sustainability",
                description:
                  "We promote sustainable business practices and investments that balance economic growth with environmental stewardship and social responsibility.",
                icon: "🌱",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-600"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Strategic Objectives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are focused on achieving these key objectives to fulfill our mission and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold">Drive Economic Diversification</h3>
              </div>
              <p className="text-gray-600">
                Support the diversification of East Africa&apos;s economy by investing in high-potential sectors beyond
                traditional industries, fostering innovation and resilience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold">Enhance Financial Inclusion</h3>
              </div>
              <p className="text-gray-600">
                Expand access to financial services for underserved businesses and sectors, particularly SMEs that form
                the backbone of East Africa&apos;s economy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold">Promote Sustainable Development</h3>
              </div>
              <p className="text-gray-600">
                Support investments that balance economic growth with environmental sustainability and social
                responsibility, contributing to East Africa&apos;s long-term prosperity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold">Strengthen Regional Integration</h3>
              </div>
              <p className="text-gray-600">
                Facilitate cross-border investments and trade within East Africa, supporting regional economic
                integration and creating larger markets for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for East Africa */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-700 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-800 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Vision for East Africa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Our Vision for East Africa</h2>
              <p className="text-blue-100 mb-6">
                We envision an East Africa that is economically diverse, globally competitive, and prosperous, where
                businesses of all sizes have access to the capital and expertise they need to thrive.
              </p>
              <p className="text-blue-100 mb-8">
                Through our investments and financial solutions, we aim to contribute to a future where East Africa is a
                hub of innovation, sustainable development, and economic opportunity for all its citizens.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/about-us/leadership">Meet Our Leadership Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Join Us in Our Mission</h2>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re an investor looking for opportunities in East Africa, a business seeking financing, or a
              professional interested in joining our team, we invite you to be part of our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/investors">Become an Investor</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
