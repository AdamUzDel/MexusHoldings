import Image from "next/image"
import Link from "next/link"

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title" data-aos="fade-up">
          <h2>Feature Products</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Products That Have Been Consumed By People From Our Company
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="order-2 lg:order-1" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold mb-4">Proctor & Allan Corn Flakes</h3>
            <p className="text-gray-600 mb-6">
              People have been enjoying our Proctor & Allan corn flakes that they have made more orders than our company
              can produce
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              See Products
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative" data-aos="zoom-out" data-aos-delay="100">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/img/features-light-1.jpg"
                  alt="Corn Flakes"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 z-0 rounded-lg overflow-hidden shadow-xl w-3/4 h-3/4">
                <Image
                  src="/assets/img/features-light-2.jpg"
                  alt="Corn Flakes Package"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-32">
          <div className="relative h-[500px]" data-aos="zoom-out">
            <Image
              src="/assets/img/features-light-3.jpg"
              alt="Inferno Chilli"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="flex flex-col" data-aos="fade-up">
            <h3 className="text-3xl font-bold mb-4">Inferno Chilli</h3>
            <p className="text-gray-600 mb-6">
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia
              voluptatem hic voluptas dolor doloremque.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</span>
              </li>
            </ul>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors self-start"
            >
              Shop Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

