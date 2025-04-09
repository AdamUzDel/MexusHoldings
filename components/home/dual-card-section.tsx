import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function DualCardSection() {
  return (
    <section className="py-16 bg-blue-900 text-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/solutions/sme-financing"
            className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/QlEiAZUqjTvlQfY0hDqt9Vq8RUBuv3-metac2h1dHRlcnN0b2NrXzEzMjQ3MTU3NzcgKDEpLmpwZw==-.jpg?height=400&width=600"
                alt="SME Financing solutions"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4 font-emirates">
                SME Financing solutions from a trusted investment partner
              </h3>
              <span className="inline-flex items-center text-blue-600 font-medium">
                Explore SME solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <Link
            href="/solutions/innovation-hub"
            className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/683BfOWCRO8zdAze8nwW7nh5bogFM2-metac2h1dHRlcnN0b2NrXzIxMzE2MzU1NTkgKDEpLmpwZw==-.jpg?height=400&width=600"
                alt="Innovation Hub"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4 font-emirates">
                If you're innovating, step into our Hub
              </h3>
              <span className="inline-flex items-center text-blue-600 font-medium">
                View our Innovation Hub
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
