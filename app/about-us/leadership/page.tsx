import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export default function LeadershipPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/leadership-team.jpeg?height=800&width=1600"
            alt="Leadership Team"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">Our Leadership Team</h1>
            <p className="text-lg text-blue-100 mb-8">
              Meet the experienced professionals who guide our strategy and operations, bringing decades of expertise in
              finance, investment, and East African markets.
            </p>
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
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>WELCOME TO MHI</b><br></br>

                  It gives me great pleasure to welcome you to the world of Mexus Holdings International (MHI). Here you will find a comprehensive, 
                  in-depth review of our company, reflecting the pride of 8,000 global employees take in our ongoing growth and current success. 
                  It also conveys our sense of mission and vision—to become the preferred world leader in country-centric economic business transformation solutions.

                  Today, change is everywhere. Our customer&apos;s markets are evolving rapidly in response to volatile raw material prices, new feedstocks, 
                  and new manufacturing trends. Sustainability is often the spur, driving demand for better, cleaner and more-efficient products and ways of doing things.

                  For companies that can see potential in these challenges, this is a good time to be in business. From its foundation in 2001, MHI has 
                  sought to adapt quickly to customer needs and requirements. Our tradition of ingenuity has driven continuous improvement in the way we operate as well 
                  as a relentless quest for sustainable growth. 

                  Today, MHI is transforming itself to take advantage of the latest wave of change. We are reshaping our business units to ensure they 
                  are equipped to take advantage of emerging trends in growing markets. These include transportation, electronics, agri-nutrients, medical 
                  technology, packaging, and construction. This transformation aims at making us more agile, cost-efficient, and aligning us ever more 
                  closely to the needs and requirements of our customers.

                  A growing world needs lighter, more fuel-efficient means of transportation, while at the same time meeting rigid safety standards. It needs 
                  innovative agri-nutrients that allow farmers to grow more food on the same amount of land, as well as improved food packaging to prevent spoilage. 
                  In these and many other ways, MHI solutions are fundamental to improving our quality of life.

                  Here, you will also discover our commitment to the communities where we live and work; how we protect and sustain the environment we all share; 
                  our pioneering technology and innovation that builds a better future; the high-quality unique solutions we offer our customers; and, the 
                  financial return we offer our shareholders.

                  At MHI, we have always found excitement in challenges. As you browse through our website, you will get a sense of the passion, expertise, 
                  reliability, and innovative nature that we bring to our mission. We call this &apso;Compassionate Growth That Matters&apos;.

                  </p>
              </div>
          </div>
          
        </div>
      </section>

      {/* Board of Directors */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Board of Directors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our board provides strategic guidance and oversight, bringing extensive experience from across the
              financial, business, and public sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Mwangi",
                title: "Board Chairman",
                bio: "Dr. Mwangi is a renowned business leader with over 30 years of experience in banking and finance. He serves on multiple boards across Africa and has received numerous awards for his contributions to financial inclusion.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Prof. Elizabeth Wangari",
                title: "Board Member",
                bio: "Prof. Wangari is an economist with expertise in development economics and public policy. She has served as an advisor to several East African governments and international organizations on economic development strategies.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Odhiambo",
                title: "Board Member",
                bio: "Michael brings 25 years of experience in private equity and venture capital across emerging markets. He has led investments in over 50 companies and serves on multiple corporate and non-profit boards.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Fatima Ahmed",
                title: "Board Member",
                bio: "Dr. Ahmed is a financial technology expert with extensive experience in digital banking and financial inclusion. She previously served as a central bank governor and holds a PhD in Economics from Oxford University.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Richard Thompson",
                title: "Board Member",
                bio: "Richard has over 30 years of experience in international finance and investment banking. He previously served as CEO of a global asset management firm and brings extensive expertise in capital markets.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Hon. Janet Mbugua",
                title: "Board Member",
                bio: "Hon. Mbugua brings valuable public sector experience, having served as a cabinet minister responsible for economic planning. She provides critical insights on public-private partnerships and policy frameworks.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((director, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src={director.image || "/placeholder.svg"} alt={director.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{director.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{director.title}</p>
                  <p className="text-gray-600 mb-4">{director.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Leadership Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Our Leadership Philosophy</h2>
              <p className="text-gray-700 mb-6">
                At Mexus Holdings International, we believe that effective leadership is essential for achieving our
                mission of driving economic growth and development across East Africa.
              </p>
              <p className="text-gray-700 mb-6">Our leadership approach is guided by these core principles:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visionary Thinking</h3>
                    <p className="text-gray-600">
                      We look beyond short-term gains to create lasting value and impact across East Africa.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ethical Decision-Making</h3>
                    <p className="text-gray-600">
                      We uphold the highest standards of integrity and transparency in all our actions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Inclusive Collaboration</h3>
                    <p className="text-gray-600">
                      We value diverse perspectives and foster collaboration across our organization and with partners.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/philosophy.jpg?height=400&width=600"
                  alt="Leadership philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Join Our Team</h2>
            <p className="text-blue-100 mb-8">
              We&apos;re always looking for talented professionals who share our vision and values to join our team and help
              drive economic growth across East Africa.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              <Link href="/about-us/careers">Explore Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
