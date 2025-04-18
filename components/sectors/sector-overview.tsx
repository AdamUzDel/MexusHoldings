import Image from "next/image"

interface SectorOverviewProps {
  title: string
  description: string
  image: string
  stats: {
    value: string
    label: string
  }[]
}

export function SectorOverview({ title, description, image, stats }: SectorOverviewProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-600">{title}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>{description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
