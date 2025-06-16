import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  
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
                <Image src="/our_office-reception.jpg?height=400&width=600" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Executive Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our executive team brings together diverse expertise and a shared commitment to driving economic growth
              across East Africa.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arnold Mexus Darnell",
                title: "Chief Executive Officer",
                bio: "John brings over 25 years of experience in investment banking and private equity across Africa. He previously served as Managing Director at a leading pan-African investment firm and holds an MBA from Harvard Business School.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Fahad Ssekiranda",
                title: "Chief Financial Officer",
                bio: "Fahad has 20 years of experience in financial management and strategy. Before joining Mexus Holdings, he was CFO at a major East African commercial bank and holds a CFA and an MBA from London Business School.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Mwangi",
                title: "Chief Investment Officer",
                bio: "David oversees our investment strategy and portfolio management. With 18 years in investment management across East Africa, he previously led investments at a regional development bank and holds a Masters in Finance from LSE.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Amina Hassan",
                title: "Chief Operating Officer",
                bio: "Amina leads our operations with 15 years of experience in operational excellence and business transformation. She previously served as Operations Director at a multinational corporation and holds an MBA from INSEAD.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Robert Ochieng",
                title: "Chief Risk Officer",
                bio: "Robert manages our risk framework with 22 years of experience in risk management and compliance. He previously served as Risk Director at a global financial institution and holds a PhD in Financial Economics.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Grace Mutua",
                title: "Chief Technology Officer",
                bio: "Grace leads our technology strategy with 16 years of experience in fintech and digital transformation. She previously founded a successful fintech startup and holds a Masters in Computer Science from MIT.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((executive, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={executive.image || "/placeholder.svg"}
                    alt={executive.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{executive.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{executive.title}</p>
                  <p className="text-gray-600 mb-4">{executive.bio}</p>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                      aria-label={`${executive.name}&apos;s LinkedIn profile`}
                    >
                      <Linkedin size={18} className="text-gray-600" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                      aria-label={`${executive.name}&apos;s Twitter profile`}
                    >
                      <Twitter size={18} className="text-gray-600" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          <div className="w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Image className="object-cover w-full rounded-t-lg md:h-auto md:w-auto md:rounded-none md:rounded-s-lg" width={400} height={400} src="/mexus-arnold.jpg" alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">President & Founder</h5>
                  <h6 className="mb-2 text-l font-bold tracking-tight text-gray-500 dark:text-white">WELCOME TO MHI</h6>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here you will find a comprehensive, in-depth review of our company, reflecting the pride of 8,000 
                    global employees take in our ongoing growth and current success. It also conveys our sense of 
                    mission and vision—to become the preferred world leader in country-centric economic business 
                    transformation solutions. Today, change is everywhere.
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Our customer&apos;s markets are evolving rapidly in response to volatile raw material prices, new feedstocks, 
                    and new manufacturing trends. Sustainability is often the spur, driving demand for better, cleaner and 
                    more-efficient products and ways of doing things. For companies that can see potential in these 
                    challenges, this is a good time to be in business. From its foundation in 2001, MHI has sought to adapt 
                    quickly to customer needs and requirements.
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This transformation aims at making us more agile, cost-efficient, and aligning us ever more closely to the 
                    needs and requirements of our customers. A growing world needs lighter, more fuel-efficient means of 
                    transportation, while at the same time meeting rigid safety standards. It needs innovative agri-nutrients 
                    that allow farmers to grow more food on the same amount of land, as well as improved food packaging to 
                    prevent spoilage. In these and many other ways, MHI solutions are fundamental to improving our quality of life.
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    At MHI, we have always found excitement in challenges. As you browse through our website, you will get a sense 
                    of the passion, expertise, reliability, and innovative nature that we bring to our mission. We call this 
                    compassionate <b> &quot;Growth That Matters&quot;</b>.
                  </p>
                  <p className="mb-3 font-bold text-gray-500 dark:text-gray-400">
                    Arnold Mexus Darnell <br/>
                    Chairman & Founder <br/>
                    MHI
                  </p>

              </div>
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
                      2001
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
                <Image src="/ESKOM-HEX-BESS-PROJECT-1024x768.jpg?height=400&width=600" alt="Our history" fill className="object-cover" />
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

