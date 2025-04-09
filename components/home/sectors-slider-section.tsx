"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const sectors = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "As the nation becomes a leading manufacturing hub, we offer a full range of financial solutions to East African manufacturers to support their growth.",
    image: "/NVUl9iCQAcU36FB9I0LDv4buWNNaO2-metac2h1dHRlcnN0b2NrXzUyNTcyMzMxMy0wMy5qcGc=-.jpg?height=186&width=322",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "A strong economy is reliant on top of the line healthcare service. We provide support to healthcare companies, hospitals, labs and clinics to modernize and expand.",
    image: "/xdvqTXSR9ylbOrpj5YNzYxeYeWRgv5-metac2h1dHRlcnN0b2NrXzUyNTcyMzMxMy0wMi5qcGc=-.jpg?height=186&width=322",
  },
  {
    id: "renewables",
    title: "Renewables",
    description:
      "We are enabling the future sustainability of East Africa by supporting the development and implementation of renewable energy solutions.",
    image: "/axbUutmaNaW7nWzwdamtxpx4gKD4Ux-metaMl9zaHV0dGVyc3RvY2tfNzUxMzU4ODc4LmpwZw==-.jpg?height=186&width=322",
  },
  {
    id: "food-security",
    title: "Food Security",
    description:
      "We help East Africa in its food security strategy aims to become self-sufficient in food production through food and agriculture sector financing.",
    image: "/ye0AkB9VSMvSn6NuM9VXGTaHg6oeJe-metac2h1dHRlcnN0b2NrXzUyNTcyMzMxMy0wNS5qcGc=-.jpg?height=186&width=322",
  },
  {
    id: "advanced-technology",
    title: "Advanced Technology",
    description:
      "We are powering the future with our financing, by accelerating the adoption and integration of future technologies in a wide variety of industries.",
    image: "/1pEBwXMMBocsfKDYOgrBvNmQtw4OCo-metadGVjaC5qcGc=-.jpg?height=186&width=322",
  },
  {
    id: "agric-technology",
    title: "Agric Technology",
    description:
      "We support agricultural technology innovations that increase productivity, sustainability, and food security across East Africa.",
    image: "/1pEBwXMMBocsfKDYOgrBvNmQtw4OCo-metadGVjaC5qcGc=-.jpg?height=186&width=322",
  },
]

export function SectorsSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(322)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const updateDimensions = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth
        let newVisibleCards = 3

        if (containerWidth < 768) {
          newVisibleCards = 1
          setCardWidth(containerWidth)
        } else if (containerWidth < 1024) {
          newVisibleCards = 2
          setCardWidth(containerWidth / 2 - 12)
        } else {
          newVisibleCards = 3
          setCardWidth(containerWidth / 3 - 16)
        }

        setVisibleCards(newVisibleCards)

        // Reset position if needed
        if (activeIndex > sectors.length - newVisibleCards) {
          setActiveIndex(sectors.length - newVisibleCards)
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [activeIndex])

  useEffect(() => {
    setTranslateX(-activeIndex * (cardWidth + 24))
  }, [activeIndex, cardWidth])

  const nextSlide = () => {
    if (activeIndex < sectors.length - visibleCards) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left column with heading */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-emirates text-blue-600 mb-4">
              Empowering East Africa`&apos;`s economic development
            </h2>
            <p className="text-gray-700 text-lg">We are focusing on enabling a bright and sustainable future economy</p>

            <div className="flex space-x-2 mt-8 lg:mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={activeIndex === 0}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={activeIndex >= sectors.length - visibleCards}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          {/* Right column with slider */}
          <div className="lg:col-span-8 relative">
            <div className="overflow-hidden" ref={sliderRef}>
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {sectors.map((sector) => (
                  <div key={sector.id} className="flex-shrink-0 pr-6" style={{ width: `${cardWidth}px` }}>
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-[186px] w-full">
                        <Image
                          src={sector.image || "/placeholder.svg"}
                          alt={sector.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col h-[calc(100%-186px)]">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">{sector.title}</h3>
                        <p className="text-gray-600 flex-grow mb-4">{sector.description}</p>
                        <Link
                          href={`/sectors/${sector.id}`}
                          className="inline-flex items-center text-blue-600 font-medium hover:underline"
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
