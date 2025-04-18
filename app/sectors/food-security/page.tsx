import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorOverview } from "@/components/sectors/sector-overview"
import { KeyInitiatives } from "@/components/sectors/key-initiatives"
import { StrategicPriorities } from "@/components/sectors/strategic-priorities"
import { SectorCta } from "@/components/sectors/sector-cta"

export default function FoodSecurityPage() {
  return (
    <>
      <SectorHero
        title="Food Security"
        subtitle="East Africa's food security strategy"
        description="Mexus Holdings International is helping East Africa become self-sufficient in food production through food and agriculture sector financing."
        image="/placeholder.svg?height=600&width=800"
        ctaText="Explore food security opportunities"
        ctaLink="/contact"
      />

      <SectorOverview
        title="Food Security in East Africa"
        description="East Africa has immense agricultural potential but faces challenges in food production, processing, and distribution. Mexus Holdings International is addressing these challenges through strategic investments that enhance productivity, reduce post-harvest losses, and improve market access, contributing to greater food security and economic development across the region."
        image="/placeholder.svg?height=500&width=700"
        stats={[
          { value: "$16M+", label: "Invested in Food Security" },
          { value: "20+", label: "Agricultural Projects" },
          { value: "50K+", label: "Farmers Supported" },
          { value: "35%", label: "Yield Improvement" },
        ]}
      />

      <KeyInitiatives
        title="Food Security Initiatives"
        subtitle="Mexus Holdings International is supporting East Africa's food security through strategic initiatives across the agricultural value chain."
        initiatives={[
          {
            title: "East Africa Food Security Strategy",
            description:
              "A comprehensive strategy to enhance food production, processing, storage, and distribution across East Africa to achieve greater self-sufficiency.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "AgriTech Development Program",
            description:
              "Supporting the adoption of agricultural technologies including precision farming, IoT solutions, and data analytics to optimize production and resource use.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Food Innovation Centers",
            description:
              "Establishing centers focused on food product development, processing technologies, and quality enhancement to add value to agricultural products.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "East Africa Food Security Alliance",
            description:
              "A partnership between government, private sector, and research institutions to address food security challenges through collaborative approaches.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Sustainable Agriculture Program",
            description:
              "Promoting environmentally sustainable agricultural practices that enhance productivity while preserving natural resources for future generations.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Food Value Chain Development",
            description:
              "Strengthening connections between producers, processors, distributors, and markets to create efficient and inclusive food value chains.",
            image: "/placeholder.svg?height=300&width=500",
          },
        ]}
      />

      <StrategicPriorities
        title="Strategic Food Security Priorities"
        subtitle="Our investment strategy focuses on key areas with high impact potential for enhancing food security across East Africa."
        priorities={[
          {
            number: "01",
            title: "Crop Production",
            description:
              "Investing in the production of key food crops including cereals, pulses, fruits, and vegetables to enhance domestic food availability.",
          },
          {
            number: "02",
            title: "Livestock & Dairy",
            description:
              "Supporting livestock and dairy production through investments in breeding, animal health, feed production, and processing facilities.",
          },
          {
            number: "03",
            title: "Food Processing",
            description:
              "Developing food processing capabilities to add value to agricultural products, extend shelf life, and reduce post-harvest losses.",
          },
          {
            number: "04",
            title: "Agricultural Inputs",
            description:
              "Enhancing access to quality seeds, fertilizers, and crop protection products to improve agricultural productivity and resilience.",
          },
          {
            number: "05",
            title: "Water Management",
            description:
              "Investing in irrigation infrastructure and water management systems to reduce dependence on rainfall and enhance agricultural productivity.",
          },
          {
            number: "06",
            title: "Food Storage & Logistics",
            description:
              "Developing modern storage facilities and efficient logistics networks to reduce post-harvest losses and improve food distribution.",
          },
        ]}
      />

      <SectorCta
        title="Ready to invest in East Africa's food security?"
        description="Connect with our team to explore food security investment opportunities across East Africa."
        ctaText="Contact our food security specialists"
        ctaLink="/contact"
      />
    </>
  )
}
