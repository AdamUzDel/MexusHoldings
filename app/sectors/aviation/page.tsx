import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorOverview } from "@/components/sectors/sector-overview"
import { KeyInitiatives } from "@/components/sectors/key-initiatives"
import { StrategicPriorities } from "@/components/sectors/strategic-priorities"
import { SectorCta } from "@/components/sectors/sector-cta"

export default function AviationPage() {
  return (
    <>
      <SectorHero
        title="Aviation"
        subtitle="Connecting East Africa to the world"
        description="Mexus Holdings International is investing in East Africa's aviation sector to enhance connectivity, improve infrastructure, and create a thriving aviation ecosystem across the region."
        image="/25.jpg?height=600&width=800"
        ctaText="Explore aviation opportunities"
        ctaLink="/contact"
      />

      <SectorOverview
        title="Aviation in East Africa"
        description="East Africa's aviation sector is experiencing significant growth, driven by increasing passenger and cargo demand, regional integration, and the strategic location between Africa, the Middle East, and Asia. Mexus Holdings International is supporting this growth through strategic investments in aviation infrastructure, services, and technology to enhance connectivity and operational efficiency."
        image="/Ug-air-ethiopian.jpg?height=500&width=700"
        stats={[
          { value: "$18M+", label: "Invested in Aviation" },
          { value: "12+", label: "Aviation Projects" },
          { value: "5", label: "Countries Served" },
          { value: "32%", label: "Average Growth Rate" },
        ]}
      />

      <KeyInitiatives
        title="Aviation Initiatives"
        subtitle="Mexus Holdings International is supporting the development of East Africa's aviation sector through strategic initiatives."
        initiatives={[
          {
            title: "East Africa Aviation Strategy",
            description:
              "A comprehensive strategy to enhance air connectivity, improve infrastructure, and develop a skilled aviation workforce across East Africa.",
            image: "/Ug-air-ethiopian.jpg?height=300&width=500",
          },
          {
            title: "Airport Development Program",
            description:
              "Investing in the modernization and expansion of airports across East Africa to improve passenger experience and operational efficiency.",
            image: "/airport-jpg.webp?height=300&width=500",
          },
          {
            title: "East Africa Air Connectivity",
            description:
              "Supporting the expansion of air routes connecting East African cities with each other and with international destinations to enhance mobility and trade.",
            image: "/Cargo_767x608.webp?height=300&width=500",
          },
          {
            title: "Aviation Training Academy",
            description:
              "Establishing training centers to develop skilled aviation professionals including pilots, engineers, air traffic controllers, and cabin crew.",
            image: "/ssoroti-flying-School.jpg?height=300&width=500",
          },
          {
            title: "Air Cargo Development",
            description:
              "Investing in air cargo infrastructure and services to facilitate trade and support East Africa's export industries.",
            image: "/1500x900_78024-b767-work-2-1.webp?height=300&width=500",
          },
          {
            title: "Aviation Innovation Hub",
            description:
              "Creating a center for aviation innovation to develop and implement technologies that enhance safety, efficiency, and sustainability.",
            image: "/DSC08005_1500px_MCA-1200x800.jpg?height=300&width=500",
          },
        ]}
      />

      <StrategicPriorities
        title="Strategic Aviation Priorities"
        subtitle="Our investment strategy focuses on key aviation areas with high growth potential and economic impact."
        priorities={[
          {
            number: "01",
            title: "Airport Infrastructure",
            description:
              "Investing in airport terminals, runways, and ground handling facilities to enhance capacity and improve passenger experience.",
          },
          {
            number: "02",
            title: "Airlines & Air Operations",
            description:
              "Supporting the growth of airlines and air operators through fleet expansion, route development, and operational improvements.",
          },
          {
            number: "03",
            title: "Maintenance, Repair & Overhaul",
            description:
              "Developing MRO capabilities within East Africa to service the growing fleet of aircraft operating in the region.",
          },
          {
            number: "04",
            title: "Air Navigation Services",
            description:
              "Enhancing air traffic management systems and navigation services to ensure safe and efficient use of East African airspace.",
          },
          {
            number: "05",
            title: "Aviation Support Services",
            description:
              "Investing in ground handling, catering, fueling, and other support services essential for efficient airport operations.",
          },
          {
            number: "06",
            title: "Aviation Training & Education",
            description:
              "Supporting aviation training institutions to develop skilled professionals across all aviation disciplines.",
          },
        ]}
      />

      <SectorCta
        title="Ready to invest in East Africa's aviation future?"
        description="Connect with our team to explore aviation investment opportunities across East Africa."
        ctaText="Contact our aviation specialists"
        ctaLink="/contact"
      />
    </>
  )
}
