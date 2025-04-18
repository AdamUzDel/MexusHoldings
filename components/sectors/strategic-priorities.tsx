import { Card, CardContent } from "@/components/ui/card"

interface Priority {
  number: string
  title: string
  description: string
}

interface StrategicPrioritiesProps {
  title: string
  subtitle: string
  priorities: Priority[]
}

export function StrategicPriorities({ title, subtitle, priorities }: StrategicPrioritiesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-600">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((priority, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-4">
                  {priority.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-600">{priority.title}</h3>
                <p className="text-gray-600">{priority.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
