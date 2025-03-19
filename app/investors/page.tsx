import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InvestorsPage() {
  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Invest with Confidence</h1>
            <p className="text-lg text-blue-100 mb-8">
              Mexus Holdings International provides trusted investment management services for both local and
              international investors, delivering consistent returns and growth.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
              <Link href="/get-started">Start Investing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="local" className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Investment Opportunities</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re a local or international investor, we offer tailored investment solutions to meet your
                needs.
              </p>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="local">Local Investors</TabsTrigger>
                <TabsTrigger value="international">International Investors</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="local" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-2"></div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/local-investment.jpg?height=500&width=500"
                      alt="Local investors"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">For East African Investors</h3>
                  <p className="text-gray-700 mb-6">
                    As a local investor in Uganda or East Africa, you can benefit from our deep understanding of
                    regional markets and opportunities.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Local Market Expertise</h4>
                        <p className="text-gray-600">Benefit from our deep understanding of East African markets.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Accessible Investment Options</h4>
                        <p className="text-gray-600">
                          Investment options tailored to local investors with flexible entry points.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Regional Growth Participation</h4>
                        <p className="text-gray-600">Participate directly in the economic growth of your region.</p>
                      </div>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/investors/local">Learn More</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="international" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">For International Investors</h3>
                  <p className="text-gray-700 mb-6">
                    International investors can access emerging market opportunities in East Africa with the security
                    and expertise of Mexus Holdings International.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Emerging Market Access</h4>
                        <p className="text-gray-600">
                          Gain exposure to high-growth East African markets with managed risk.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Portfolio Diversification</h4>
                        <p className="text-gray-600">
                          Diversify your global portfolio with investments in multiple sectors.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-bold">Transparent Reporting</h4>
                        <p className="text-gray-600">Regular updates and transparent reporting on your investments.</p>
                      </div>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/investors/international">Learn More</Link>
                  </Button>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute -inset-4 bg-blue-100 rounded-lg transform -rotate-2"></div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/int-investors.jpg?height=500&width=500"
                      alt="International investors"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our investors have achieved their financial goals through strategic investments with Mexus
              Holdings International.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={`/investment.jpg?height=200&width=400`}
                    alt={`Success story ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Success Story {i}</CardTitle>
                  <CardDescription>
                    Investment in {i === 1 ? "Manufacturing" : i === 2 ? "Healthcare" : "Real Estate"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {i === 1
                      ? "A group of local investors achieved 18% returns by investing in our manufacturing portfolio."
                      : i === 2
                        ? "International investors funded a healthcare facility, providing both social impact and financial returns."
                        : "Real estate investment delivered consistent growth and rental income for our investors."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/investors/success-stories#story-${i}`}>Read Full Story</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/investors/success-stories">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Investment Performance</h2>
              <p className="text-blue-100 mb-8">
                Our investment approach has consistently delivered strong returns for our investors across all sectors.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">15-20%</div>
                  <div className="text-blue-200">Average annual returns</div>
                </div>
                <div className="bg-blue-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">$50M+</div>
                  <div className="text-blue-200">Assets under management</div>
                </div>
                <div className="bg-blue-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-200">Active investors</div>
                </div>
                <div className="bg-blue-800 p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">6</div>
                  <div className="text-blue-200">Investment sectors</div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <Link href="/get-started">Start Investing</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-700 rounded-lg transform rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-800 rounded-lg transform -rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/investment-tracker.png?height=400&width=600"
                  alt="Investment performance"
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

