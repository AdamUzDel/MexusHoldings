"use client"

import { useState } from "react"

interface FaqItem {
  id: number
  question: string
  answer: string
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      id: 2,
      question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      id: 3,
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
    },
    {
      id: 4,
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      id: 5,
      question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      answer:
        "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
    },
  ]

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                <span className="text-gray-600 font-normal">Frequently Asked </span>
                <strong>Questions</strong>
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>
          </div>

          <div className="lg:col-span-8" data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "shadow-md" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-5 text-left"
                    aria-expanded={activeIndex === index}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      <span className="text-primary mr-2">{item.id}.</span>
                      <span>{item.question}</span>
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-90" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-5 pt-0 text-gray-600">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

