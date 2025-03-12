"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Category = "all" | "chilli" | "cornflakes" | "sensodyn"

interface PortfolioItem {
  id: number
  title: string
  description: string
  category: Category
  image: string
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Inferno Chilli",
      description: "Feel the hotness",
      category: "chilli",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
    },
    {
      id: 2,
      title: "Proctor & Allan Cornflakes",
      description: "Lorem ipsum, dolor sit",
      category: "cornflakes",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
    },
    {
      id: 3,
      title: "Branding 1",
      description: "Lorem ipsum, dolor sit",
      category: "sensodyn",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
    },
    {
      id: 4,
      title: "Inferno Chilli",
      description: "Feel the hotness",
      category: "chilli",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
    },
    {
      id: 5,
      title: "Proctor & Allan Cornflakes",
      description: "Lorem ipsum, dolor sit",
      category: "cornflakes",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
    },
    {
      id: 6,
      title: "Branding 2",
      description: "Lorem ipsum, dolor sit",
      category: "sensodyn",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
    },
    {
      id: 7,
      title: "Inferno Chilli",
      description: "Feel the hotness",
      category: "chilli",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
    },
    {
      id: 8,
      title: "Proctor & Allan Cornflakes",
      description: "Lorem ipsum, dolor sit",
      category: "cornflakes",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
    },
    {
      id: 9,
      title: "Branding 3",
      description: "Lorem ipsum, dolor sit",
      category: "sensodyn",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title" data-aos="fade-up">
          <h2>Products</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Products that are manufactured in our company</p>
        </div>

        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <ul className="flex flex-wrap gap-2 justify-center">
            <li>
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "all" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveFilter("chilli")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "chilli" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Chilli
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveFilter("cornflakes")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "cornflakes" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Corn Flakes
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveFilter("sensodyn")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "sensodyn" ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Sensodyn
              </button>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-md bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
                <p className="text-white/80 mb-4">{item.description}</p>
                <div className="flex gap-3">
                  <Link
                    href={item.image}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

