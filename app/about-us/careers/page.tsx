import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CareersPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Careers at Mexus Holdings"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6 leading-tight">Careers</h1>
            <p className="text-lg text-blue-100 mb-8">
              Join our team and be part of driving economic growth and development across East Africa through innovative
              financial solutions.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-950 hover:bg-blue-100">
              <Link href="#open-positions">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Why Join Mexus Holdings</h2>
              <p className="text-gray-700 mb-6">
                At Mexus Holdings International, we offer more than just a job. We provide an opportunity to make a
                meaningful impact on East Africa's economic development while building a rewarding career.
              </p>
              <p className="text-gray-700 mb-8">
                Our team members enjoy a dynamic work environment that values innovation, collaboration, and personal
                growth, along with competitive compensation and benefits.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Meaningful Impact</h3>
                  <p className="text-gray-600">
                    Contribute directly to economic growth and development across East Africa.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
                  <p className="text-gray-600">Continuous learning opportunities and clear career advancement paths.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Inclusive Culture</h3>
                  <p className="text-gray-600">
                    A diverse and supportive environment where all perspectives are valued.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Competitive Benefits</h3>
                  <p className="text-gray-600">
                    Comprehensive benefits package including health, retirement, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team members collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Culture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a culture that empowers our team members to excel while making a positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Innovation culture"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Innovation-Driven</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and new approaches to solving financial challenges across East Africa.
                  Our team members are empowered to propose and implement innovative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Collaborative environment"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Collaborative Environment</h3>
                <p className="text-gray-600">
                  We believe that the best results come from teamwork and diverse perspectives. Our collaborative
                  approach brings together expertise from different disciplines to create comprehensive solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Impact-focused" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Impact-Focused</h3>
                <p className="text-gray-600">
                  Everything we do is guided by our mission to drive economic development. We celebrate achievements not
                  just in financial terms, but in the positive impact we create across East Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our team and contribute to East Africa's economic growth.
            </p>
          </div>

          <Tabs defaultValue="finance" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
            </TabsList>

            <TabsContent value="finance" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Senior Financial Analyst",
                    location: "Kampala, Uganda",
                    type: "Full-time",
                    description:
                      "Responsible for financial modeling, analysis, and reporting to support investment decisions and portfolio management.",
                  },
                  {
                    title: "Treasury Manager",
                    location: "Nairobi, Kenya",
                    type: "Full-time",
                    description:
                      "Oversee cash management, liquidity planning, and financial risk management for the organization.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="mr-4">{job.location}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="investments" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Investment Manager - Renewable Energy",
                    location: "Dar es Salaam, Tanzania",
                    type: "Full-time",
                    description:
                      "Lead investment activities in the renewable energy sector, including deal sourcing, due diligence, and portfolio management.",
                  },
                  {
                    title: "Investment Analyst - Agritech",
                    location: "Kampala, Uganda",
                    type: "Full-time",
                    description:
                      "Support investment activities in the agricultural technology sector through market research, financial analysis, and due diligence.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="mr-4">{job.location}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Digital Transformation Lead",
                    location: "Nairobi, Kenya",
                    type: "Full-time",
                    description:
                      "Lead digital transformation initiatives across the organization, enhancing operational efficiency and client experience.",
                  },
                  {
                    title: "Fintech Solutions Developer",
                    location: "Remote (East Africa)",
                    type: "Full-time",
                    description:
                      "Develop innovative financial technology solutions to support our investment and financing activities.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="mr-4">{job.location}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="operations" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Risk Management Specialist",
                    location: "Kampala, Uganda",
                    type: "Full-time",
                    description:
                      "Develop and implement risk management frameworks and processes to identify, assess, and mitigate risks across our operations.",
                  },
                  {
                    title: "Compliance Officer",
                    location: "Nairobi, Kenya",
                    type: "Full-time",
                    description:
                      "Ensure organizational compliance with relevant regulations and internal policies across our East African operations.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="mr-4">{job.location}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{job.type}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-6">
                      <Button asChild className="w-full">
                        <Link href="/contact">Apply Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see a position that matches your skills? We're always interested in connecting with talented
              professionals who share our vision.
            </p>
            <Button asChild>
              <Link href="/contact">Submit Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Our Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've designed a thorough but efficient process to identify candidates who will thrive in our
              organization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="relative flex">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10">
                    1
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Application Review</h3>
                    <p className="text-gray-600">
                      Our recruitment team reviews your application and resume to assess your qualifications and
                      alignment with our values and requirements.
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10">
                    2
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
                    <p className="text-gray-600">
                      Qualified candidates are invited for an initial interview, which may be conducted virtually or in
                      person, to discuss your experience and interest in the role.
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10">
                    3
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Skills Assessment</h3>
                    <p className="text-gray-600">
                      Depending on the role, you may be asked to complete a skills assessment or case study to
                      demonstrate your expertise and problem-solving abilities.
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10">
                    4
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Final Interviews</h3>
                    <p className="text-gray-600">
                      Selected candidates meet with senior team members and potential colleagues to assess cultural fit
                      and discuss the role in greater detail.
                    </p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10">
                    5
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-600">
                      Successful candidates receive an offer and, upon acceptance, begin our comprehensive onboarding
                      program to set them up for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Ready to Make an Impact?</h2>
            <p className="text-blue-100 mb-8">
              Join our team and be part of driving economic growth and development across East Africa through innovative
              financial solutions.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              <Link href="#open-positions">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
