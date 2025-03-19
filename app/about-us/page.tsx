import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  const leadershipTeam = [
    {
      name: "ARNOLD MEXUS DARNELL",
      position: "Chief Executive Officer",
      bio: "With over 20 years of experience in investment management across East Africa.",
      image: "/mexus-arnold.jpg?height=300&width=300",
    },
    {
      name: "Jane Smith",
      position: "Chief Financial Officer",
      bio: "Expert in financial strategy with a background in international banking.",
      image: "/mexus-arnold.jpg?height=300&width=300",
    },
    {
      name: "Robert Johnson",
      position: "Chief Investment Officer",
      bio: "Specializes in emerging markets with a focus on East African investments.",
      image: "/mexus-arnold.jpg?height=300&width=300",
    },
    {
      name: "Sarah Williams",
      position: "Head of Operations",
      bio: "Oversees business monitoring and operational efficiency across all sectors.",
      image: "/mexus-arnold.jpg?height=300&width=300",
    },
  ]

  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">About Mexus Holdings International</h1>
            <p className="text-lg text-blue-100 mb-8">
              A trusted investment partner managing funds for local and international investors across diverse sectors
              in East Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Mexus Holdings International, our mission is to be the premier investment trustee in East Africa,
                connecting investors with high-potential businesses across key economic sectors.
              </p>
              <p className="text-gray-700 mb-6">
                We are committed to delivering consistent returns for our investors while contributing to economic
                development and job creation in the regions where we operate.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Investor Success</h3>
                    <p className="text-gray-600">
                      We prioritize the financial success of our investors through strategic investments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Economic Development</h3>
                    <p className="text-gray-600">
                      We contribute to economic growth by investing in key sectors across East Africa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Transparency</h3>
                    <p className="text-gray-600">
                      We maintain the highest standards of transparency in all our operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-200 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who guide our investment strategy and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/about-us/leadership">Meet Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Our History</h2>
              <p className="text-gray-700 mb-4">
                Founded with a vision to connect investors with high-potential businesses in East Africa, Mexus Holdings
                International has grown to become a trusted investment partner in the region.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, we have expanded our portfolio across six key sectors, building a track record of
                consistent returns for our investors while contributing to economic development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold">
                      2015
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Founded in Kampala, Uganda with a focus on local investments</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold">
                      2018
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Expanded to international investors and additional sectors</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold">
                      2023
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Reached $50M+ in assets under management across six sectors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-200 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our history" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Join Our Team</h2>
            <p className="text-blue-100 mb-8">
              We&apos;re always looking for talented individuals to join our team and help us grow our investment portfolio.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              <Link href="/about-us/careers">View Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

