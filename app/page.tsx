import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronRight } from "lucide-react"
import { DualCardSection } from "@/components/home/dual-card-section"
import { SectorsSliderSection } from "@/components/home/sectors-slider-section"

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png?height=800&width=1600"
            alt="Investment background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-emirates mb-6 leading-tight">
                More ways to help you grow your business
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-lg">
                We help investors of all sizes in our priority sectors by offering favorable financial solutions,
                tailored products, and comprehensive services.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
                <Link href="/investors">Investors We Support</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-tr-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-bl-3xl"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/hands-holding-a-plant.jpg?height=600&width=600"
                  alt="Hands holding a plant"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-gray-400 mb-2">Investment Support</div>
              <div className="text-3xl md:text-4xl font-bold font-emirates">$50 Million</div>
            </div>
            <div className="text-center p-6 border-y md:border-y-0 md:border-x border-gray-700">
              <div className="text-gray-400 mb-2">Companies Supported</div>
              <div className="text-3xl md:text-4xl font-bold font-emirates">120+</div>
            </div>
            <div className="text-center p-6">
              <div className="text-gray-400 mb-2">Economic Contribution</div>
              <div className="text-3xl md:text-4xl font-bold font-emirates">$15 Million</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Business Sectors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on six key sectors with high growth potential and significant economic impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Manufacturing", icon: "🏭" },
              { name: "Advanced Technology", icon: "🏨" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Agric Technology", icon: "✈️" },
              { name: "Renewables", icon: "🏢" },
              { name: "Food Security", icon: "⛽" },
            ].map((sector) => (
              <Link
                key={sector.name}
                href={`/sectors/${sector.name.toLowerCase().replace(" & ", "-and-")}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow group-hover:border-blue-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{sector.icon}</div>
                    <h3 className="font-bold mb-2">{sector.name}</h3>
                    <ChevronRight className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/sectors">
                Learn More About Our Sectors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}
      
      {/* Sectors Slider Section - Replaced the old grid section */}
      <SectorsSliderSection />

      {/* Economic Transformation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">
                Driving East Africa&apos;s Economic Transformation
              </h2>
              <p className="text-gray-700 mb-6">
                Mexus Holdings International plays a vital role in East Africa&apos;s economic development by channeling
                investments into key sectors that drive growth and create jobs.
              </p>
              <p className="text-gray-700 mb-8">
                Our strategic approach to investment management ensures that capital is directed to businesses with the
                highest potential for growth and impact.
              </p>
              <Button asChild>
                <Link href="/about-us">
                  Learn About Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/economy-ug.webp?height=400&width=600"
                  alt="Economic transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Dual Card Section */}
      <DualCardSection />

      {/* Investor Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Business Solutions for Everyone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re a local or international investor, we have tailored solutions to meet your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/ug-investors.jpg?height=300&width=600"
                  alt="Local investors"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Local Investors</h3>
                <p className="text-gray-600 mb-4">
                  For investors based in Uganda and East Africa looking to participate in regional economic growth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Lower minimum investment thresholds</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Local currency investment options</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Regular in-person portfolio reviews</span>
                  </li>
                </ul>
                <Button asChild variant="outline">
                  <Link href="/investors/local">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/int-investors.jpg?height=300&width=600"
                  alt="International investors"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">International Investors</h3>
                <p className="text-gray-600 mb-4">
                  For investors from around the world seeking exposure to high-growth East African markets.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>USD and EUR denominated investments</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Comprehensive risk management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span>Digital reporting and virtual meetings</span>
                  </li>
                </ul>
                <Button asChild variant="outline">
                  <Link href="/investors/international">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/get-started">
                Start Your Investment Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Ready to Grow Your Wealth?</h2>
              <p className="text-blue-100 mb-8">
                Join Mexus Holdings International today and benefit from our expertise in managing investments across
                East Africa&apos;s most promising sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                  <Link href="/get-started">Become an Investor</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-blue-700 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-800 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/HHHHHHHHHH.jpg?height=500&width=500"
                  alt="Investment growth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

