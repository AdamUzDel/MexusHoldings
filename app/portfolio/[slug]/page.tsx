import Image from "next/image"
import Link from "next/link"
import { PageTitle } from "@/components/page-title"

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <PageTitle
        title="Portfolio Details"
        description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio Details", href: `/portfolio/${params.slug}`, current: true },
        ]}
      />

      <section id="portfolio-details" className="py-16">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="relative mb-12">
            <div className="swiper-container">
              <div className="grid grid-cols-1 gap-4">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                  <Image src="/assets/img/portfolio/app-1.jpg" alt="Portfolio" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8" data-aos="fade-up">
              <div className="portfolio-description">
                <h2 className="text-3xl font-bold mb-6">This is an example of portfolio details</h2>
                <p className="mb-4">
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                  Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia
                  accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                  eius.
                </p>
                <p className="mb-6">
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam
                  et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque
                  nesciunt molestiae laboriosam.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/assets/img/testimonials/testimonials-2.jpg"
                        alt="Testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Sara Wilsson</h3>
                      <p className="text-gray-600">Designer</p>
                    </div>
                  </div>
                  <p className="mt-4 italic text-gray-700">
                    <span className="text-primary text-xl">"</span>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                    quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <span className="text-primary text-xl">"</span>
                  </p>
                </div>

                <p className="mb-4">
                  Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam
                  animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt
                  assumenda tempore. Delectus voluptas necessitatibus est.
                </p>

                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero.
                  Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui
                  nesciunt.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-primary">
                  Project information
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex flex-col">
                    <strong className="text-gray-500 uppercase text-sm">Category</strong>
                    <span>Web design</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-gray-500 uppercase text-sm">Client</strong>
                    <span>ASU Company</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-gray-500 uppercase text-sm">Project date</strong>
                    <span>01 March, 2020</span>
                  </li>
                  <li className="flex flex-col">
                    <strong className="text-gray-500 uppercase text-sm">Project URL</strong>
                    <Link href="#" className="text-primary hover:underline">
                      www.example.com
                    </Link>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

