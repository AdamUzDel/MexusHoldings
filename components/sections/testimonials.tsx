"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  position: string
  quote: string
  image: string
  rating: number
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mexus Darnell",
      position: "Ceo & Founder",
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: "/assets/img/testimonials/testimonials-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Raymond J Bronx",
      position: "Designer",
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image: "/assets/img/testimonials/testimonials-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Ferdinand B Brol",
      position: "Store Owner",
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image: "/assets/img/testimonials/testimonials-3.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Manson",
      position: "Freelancer",
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: "/assets/img/testimonials/testimonials-4.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "John Larson",
      position: "Entrepreneur",
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: "/assets/img/testimonials/testimonials-5.jpg",
      rating: 5,
    },
  ]

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)

    // Reset interval when manually changing
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-3xl font-bold mb-4">Testimonials</h3>
            <p className="text-gray-600">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
          </div>

          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
              <div
                className="transition-all duration-500 transform"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4" style={{ width: "100%" }}>
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <h4 className="text-gray-500 mb-2">{testimonial.position}</h4>
                          <div className="flex text-yellow-400 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 italic">
                        <span className="text-primary text-xl">"</span>
                        {testimonial.quote}
                        <span className="text-primary text-xl">"</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                      activeIndex === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

