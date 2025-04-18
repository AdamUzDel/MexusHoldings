import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorOverview } from "@/components/sectors/sector-overview"
import { KeyInitiatives } from "@/components/sectors/key-initiatives"
import { StrategicPriorities } from "@/components/sectors/strategic-priorities"
import { SectorCta } from "@/components/sectors/sector-cta"

export default function HealthcarePage() {
  return (
    <>
      <SectorHero
        title="Healthcare"
        subtitle="A strong economy is reliant on top of the line healthcare service"
        description="Mexus Holdings International provides support to healthcare companies, hospitals, labs and clinics to modernize and expand across East Africa."
        image="/68r5CKl9eHhB74UIfVD3RI3AqBVFP2-metaR3JvdXAgMTE5NzkucG5n-.png?height=600&width=800"
        ctaText="Explore healthcare opportunities"
        ctaLink="/contact"
      />

      <SectorOverview
        title="Healthcare in East Africa"
        description="East Africa's healthcare sector is undergoing significant transformation, driven by increasing demand for quality services, technological innovation, and supportive policy frameworks. Mexus Holdings International is playing a pivotal role in this evolution by providing strategic investments that enhance healthcare infrastructure, improve service delivery, and promote innovation."
        image="/0GmmwvZXMixHoqQnRYxyqRLdxOTVit-metaaGVhbHRoIDIgMi5qcGc=-.jpg?height=500&width=700"
        stats={[
          { value: "$15M+", label: "Invested in Healthcare" },
          { value: "18+", label: "Healthcare Facilities" },
          { value: "500K+", label: "Patients Served Annually" },
          { value: "28%", label: "Average Growth Rate" },
        ]}
      />

      <KeyInitiatives
        title="Healthcare Initiatives"
        subtitle="Mexus Holdings International is supporting the development of East Africa's healthcare sector through strategic initiatives."
        initiatives={[
          {
            title: "East Africa Health Sector Strategy",
            description:
              "A comprehensive strategy to enhance healthcare quality, accessibility, and efficiency across East Africa through targeted investments and policy support.",
            image: "/medical-group-wtih-screen.jpg?height=300&width=500",
          },
          {
            title: "Medical Tourism Program",
            description:
              "Developing world-class healthcare facilities and services to attract medical tourists from across Africa and beyond, creating a new economic opportunity.",
            image: "/medical-tourism-in-Africa-1536x1129-1.jpg?height=300&width=500",
          },
          {
            title: "East Africa Pharma Initiative",
            description:
              "Supporting the growth of pharmaceutical manufacturing in East Africa to enhance self-sufficiency in essential medicines and medical supplies.",
            image: "/pharma+report.jpg?height=300&width=500",
          },
          {
            title: "Healthcare Innovation Hub",
            description:
              "Establishing innovation centers focused on developing and implementing healthcare technologies and solutions tailored to East African needs.",
            image: "/Meic-East-Africa.jpg?height=300&width=500",
          },
          {
            title: "East Africa Medical Education",
            description:
              "Investing in medical education and training programs to develop a skilled healthcare workforce capable of delivering quality care across the region.",
            image: "/world-bank-health-challenge_ces_600x334.jpg?height=300&width=500",
          },
          {
            title: "Rural Healthcare Access",
            description:
              "Expanding healthcare access in underserved rural areas through mobile clinics, telemedicine, and community health worker programs.",
            image: "/Medical-Health-1024x682.webp?height=300&width=500",
          },
        ]}
      />

      <StrategicPriorities
        title="Strategic Healthcare Priorities"
        subtitle="Our investment strategy focuses on key healthcare areas with high impact potential and sustainable growth opportunities."
        priorities={[
          {
            number: "01",
            title: "Hospitals & Clinics",
            description:
              "Investing in the development and expansion of hospitals and clinics to enhance healthcare access and quality across East Africa.",
          },
          {
            number: "02",
            title: "Pharmaceutical Manufacturing",
            description:
              "Supporting the growth of pharmaceutical manufacturing to increase local production of essential medicines and reduce import dependence.",
          },
          {
            number: "03",
            title: "Medical Equipment & Supplies",
            description:
              "Investing in the production and distribution of medical equipment and supplies to support healthcare delivery across the region.",
          },
          {
            number: "04",
            title: "Digital Health Solutions",
            description:
              "Promoting the development and adoption of digital health technologies including telemedicine, electronic health records, and health information systems.",
          },
          {
            number: "05",
            title: "Specialized Care Centers",
            description:
              "Establishing centers of excellence for specialized medical services such as cardiology, oncology, and maternal health to address critical healthcare needs.",
          },
          {
            number: "06",
            title: "Healthcare Education & Training",
            description:
              "Investing in medical education and training institutions to develop a skilled healthcare workforce across all specialties and levels.",
          },
        ]}
      />

      <SectorCta
        title="Ready to invest in East Africa's healthcare future?"
        description="Connect with our team to explore healthcare investment opportunities across East Africa."
        ctaText="Contact our healthcare specialists"
        ctaLink="/contact"
      />
    </>
  )
}
