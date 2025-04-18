import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorOverview } from "@/components/sectors/sector-overview"
import { KeyInitiatives } from "@/components/sectors/key-initiatives"
import { StrategicPriorities } from "@/components/sectors/strategic-priorities"
import { SectorCta } from "@/components/sectors/sector-cta"

export default function ManufacturingPage() {
  return (
    <>
      <SectorHero
        title="Manufacturing"
        subtitle="As East Africa becomes a leading manufacturing hub"
        description="Mexus Holdings International offers a full range of financial solutions to East African manufacturers to support their growth."
        image="/placeholder.svg?height=600&width=800"
        ctaText="Explore manufacturing opportunities"
        ctaLink="/contact"
      />

      <SectorOverview
        title="Manufacturing in East Africa"
        description="East Africa's manufacturing sector is experiencing rapid growth, driven by increasing domestic demand, regional integration, and supportive government policies. Mexus Holdings International is at the forefront of this transformation, providing strategic investments to help manufacturers scale operations, adopt new technologies, and access regional and global markets."
        image="/placeholder.svg?height=500&width=700"
        stats={[
          { value: "$12M+", label: "Invested in Manufacturing" },
          { value: "25+", label: "Manufacturing Businesses" },
          { value: "1,200+", label: "Jobs Created" },
          { value: "35%", label: "Average Growth Rate" },
        ]}
      />

      <KeyInitiatives
        title="Manufacturing Initiatives"
        subtitle="Mexus Holdings International is committed to supporting the growth and development of East Africa's manufacturing sector through strategic initiatives."
        initiatives={[
          {
            title: "Operation 300bn",
            description:
              "A comprehensive program to expand and diversify East Africa's industrial base, increase the value of manufacturing, and enhance self-sufficiency in key sectors.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Make it in East Africa",
            description:
              "An initiative to attract foreign investors to establish manufacturing operations in East Africa by highlighting the region's competitive advantages and business-friendly environment.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Industry 4.0",
            description:
              "Supporting the adoption of advanced technologies including automation, artificial intelligence, and data analytics to enhance manufacturing productivity and competitiveness.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "National In-Country Value Program",
            description:
              "Redirecting government procurement to local manufacturers and increasing the use of local products, services, and capabilities across all industries.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "East African Products Database",
            description:
              "A comprehensive database of products manufactured in East Africa to promote local sourcing and facilitate connections between manufacturers and potential buyers.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Manufacturing Ambassadors",
            description:
              "A network of manufacturing champions who promote East African manufacturing capabilities and advocate for policies that support industrial development.",
            image: "/placeholder.svg?height=300&width=500",
          },
        ]}
      />

      <StrategicPriorities
        title="Strategic Manufacturing Priorities"
        subtitle="Our investment strategy focuses on key manufacturing subsectors with high growth potential and economic impact."
        priorities={[
          {
            number: "01",
            title: "Food & Beverage Manufacturing",
            description:
              "Supporting the growth of food processing and beverage production to meet increasing consumer demand and reduce reliance on imports.",
          },
          {
            number: "02",
            title: "Pharmaceutical Manufacturing",
            description:
              "Expanding local pharmaceutical production capacity to improve access to essential medicines and reduce dependence on imports.",
          },
          {
            number: "03",
            title: "Machinery & Equipment",
            description:
              "Developing manufacturing capabilities for machinery and equipment to support industrial growth and infrastructure development.",
          },
          {
            number: "04",
            title: "Rubber & Plastics",
            description:
              "Investing in the production of rubber and plastic products to serve growing demand from construction, packaging, and consumer goods sectors.",
          },
          {
            number: "05",
            title: "Chemicals",
            description:
              "Supporting the development of chemical manufacturing to provide inputs for various industries including agriculture, construction, and consumer products.",
          },
          {
            number: "06",
            title: "Electronics & Electrical Equipment",
            description:
              "Fostering the growth of electronics and electrical equipment manufacturing to support technological advancement and digital transformation.",
          },
        ]}
      />

      <SectorCta
        title="Ready to invest in East Africa's manufacturing future?"
        description="Connect with our team to explore manufacturing investment opportunities across East Africa."
        ctaText="Contact our manufacturing specialists"
        ctaLink="/contact"
      />
    </>
  )
}
