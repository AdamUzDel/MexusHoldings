import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorOverview } from "@/components/sectors/sector-overview"
import { KeyInitiatives } from "@/components/sectors/key-initiatives"
import { StrategicPriorities } from "@/components/sectors/strategic-priorities"
import { SectorCta } from "@/components/sectors/sector-cta"

export default function AdvancedTechnologyPage() {
  return (
    <>
      <SectorHero
        title="Advanced Technology"
        subtitle="Powering the future of East Africa"
        description="Mexus Holdings International is accelerating the adoption and integration of future technologies in a wide variety of industries across East Africa."
        image="/placeholder.svg?height=600&width=800"
        ctaText="Explore technology opportunities"
        ctaLink="/contact"
      />

      <SectorOverview
        title="Advanced Technology in East Africa"
        description="East Africa is embracing advanced technologies to drive economic diversification, enhance productivity, and create new opportunities across all sectors. Mexus Holdings International is supporting this technological transformation through strategic investments in digital infrastructure, innovative startups, and skills development programs."
        image="/placeholder.svg?height=500&width=700"
        stats={[
          { value: "$14M+", label: "Invested in Tech" },
          { value: "22+", label: "Tech Startups" },
          { value: "5", label: "Tech Hubs Supported" },
          { value: "45%", label: "Average Growth Rate" },
        ]}
      />

      <KeyInitiatives
        title="Technology Initiatives"
        subtitle="Mexus Holdings International is driving technological advancement across East Africa through strategic initiatives."
        initiatives={[
          {
            title: "East Africa Digital Economy",
            description:
              "A comprehensive strategy to accelerate digital transformation across all sectors of the East African economy, enhancing productivity and creating new opportunities.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "Fourth Industrial Revolution",
            description:
              "Supporting the adoption of Industry 4.0 technologies including artificial intelligence, blockchain, and the Internet of Things across East African industries.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "East Africa Science Park",
            description:
              "Establishing innovation hubs and science parks across East Africa to foster research, development, and commercialization of advanced technologies.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "National Program for Coders",
            description:
              "Developing coding skills among East Africans to build a pipeline of tech talent that can drive digital innovation and economic growth.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "East Africa Blockchain Strategy",
            description:
              "Promoting the adoption of blockchain technology across government services and private sector applications to enhance efficiency and transparency.",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "East Africa AI Program",
            description:
              "Accelerating the development and deployment of artificial intelligence solutions to address regional challenges and create economic value.",
            image: "/placeholder.svg?height=300&width=500",
          },
        ]}
      />

      <StrategicPriorities
        title="Strategic Technology Priorities"
        subtitle="Our investment strategy focuses on key technology areas with transformative potential for East Africa's economy."
        priorities={[
          {
            number: "01",
            title: "Artificial Intelligence",
            description:
              "Investing in AI applications across sectors including healthcare, education, finance, and government services to enhance efficiency and create new capabilities.",
          },
          {
            number: "02",
            title: "Internet of Things",
            description:
              "Supporting IoT solutions that connect physical devices to digital networks, enabling smart cities, precision agriculture, and industrial automation.",
          },
          {
            number: "03",
            title: "Blockchain",
            description:
              "Promoting blockchain applications in finance, supply chain management, and government services to enhance transparency, security, and efficiency.",
          },
          {
            number: "04",
            title: "Cloud Computing",
            description:
              "Expanding cloud infrastructure and services to enable businesses of all sizes to access advanced computing capabilities and scale operations efficiently.",
          },
          {
            number: "05",
            title: "Cybersecurity",
            description:
              "Strengthening digital security capabilities to protect East Africa's critical infrastructure, businesses, and citizens in the increasingly connected world.",
          },
          {
            number: "06",
            title: "Smart Cities",
            description:
              "Developing integrated technology solutions for urban management, including transportation, energy, water, and public services to enhance quality of life.",
          },
        ]}
      />

      <SectorCta
        title="Ready to invest in East Africa's technology future?"
        description="Connect with our team to explore technology investment opportunities across East Africa."
        ctaText="Contact our technology specialists"
        ctaLink="/contact"
      />
    </>
  )
}
