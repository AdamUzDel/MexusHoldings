import { SectorHero } from "@/components/sectors/sector-hero"
import { SectorOverview } from "@/components/sectors/sector-overview"
import { KeyInitiatives } from "@/components/sectors/key-initiatives"
import { StrategicPriorities } from "@/components/sectors/strategic-priorities"
import { SectorCta } from "@/components/sectors/sector-cta"

export default function RenewablesPage() {
  return (
    <>
      <SectorHero
        title="Renewables"
        subtitle="Enabling the future sustainability of East Africa"
        description="Mexus Holdings International is supporting the development and implementation of renewable energy solutions across East Africa."
        image="/O8iGXKx0JK7LP4tuiwtnP4qmaFiZbi-metaR3JvdXAgMTE5NzkucG5n-.png?height=600&width=800"
        ctaText="Explore renewable energy opportunities"
        ctaLink="/contact"
      />

      <SectorOverview
        title="Renewable Energy in East Africa"
        description="East Africa possesses abundant renewable energy resources including solar, wind, hydro, and geothermal potential. Mexus Holdings International is strategically investing in these resources to address the region's growing energy demand, reduce reliance on fossil fuels, and support economic development through reliable, clean energy access."
        image="/axbUutmaNaW7nWzwdamtxpx4gKD4Ux-metaMl9zaHV0dGVyc3RvY2tfNzUxMzU4ODc4LmpwZw==-.jpg?height=500&width=700"
        stats={[
          { value: "$20M+", label: "Invested in Renewables" },
          { value: "15+", label: "Renewable Projects" },
          { value: "120MW+", label: "Clean Energy Capacity" },
          { value: "40%", label: "Average Growth Rate" },
        ]}
      />

      <KeyInitiatives
        title="Renewable Energy Initiatives"
        subtitle="Mexus Holdings International is driving the transition to clean energy across East Africa through strategic initiatives."
        initiatives={[
          {
            title: "East Africa Clean Energy Strategy",
            description:
              "A comprehensive strategy to accelerate the adoption of renewable energy and enhance energy efficiency across all sectors of the East African economy.",
            image: "/2.jpg?height=300&width=500",
          },
          {
            title: "Solar Energy Program",
            description:
              "Supporting the deployment of solar energy solutions across East Africa, from utility-scale solar farms to distributed rooftop installations.",
            image: "/Solar.jpg?height=300&width=500",
          },
          {
            title: "Wind Energy Development",
            description:
              "Investing in wind energy projects in high-potential areas across East Africa to harness this abundant renewable resource.",
            image: "/renewable-energy-sa.jpg?height=300&width=500",
          },
          {
            title: "Hydropower Expansion",
            description:
              "Supporting the development of small and medium-scale hydropower projects that provide reliable baseload power while minimizing environmental impact.",
            image: "/electricity-access.-Bigstock..jpg?height=300&width=500",
          },
          {
            title: "Geothermal Energy Initiative",
            description:
              "Investing in geothermal energy development along the East African Rift Valley, one of the world's richest geothermal regions.",
            image: "/geothermal.jpg?height=300&width=500",
          },
          {
            title: "Energy Storage Solutions",
            description:
              "Supporting the deployment of energy storage technologies to enhance grid stability and enable higher penetration of intermittent renewable energy sources.",
            image: "/ESKOM-HEX-BESS-PROJECT-1024x768.jpg?height=300&width=500",
          },
        ]}
      />

      <StrategicPriorities
        title="Strategic Renewable Energy Priorities"
        subtitle="Our investment strategy focuses on key renewable energy areas with high impact potential and sustainable growth opportunities."
        priorities={[
          {
            number: "01",
            title: "Solar PV",
            description:
              "Investing in photovoltaic solar energy across utility-scale, commercial, and residential applications to harness East Africa's abundant sunshine.",
          },
          {
            number: "02",
            title: "Wind Power",
            description:
              "Supporting wind farm development in locations with strong and consistent wind resources to diversify the renewable energy mix.",
          },
          {
            number: "03",
            title: "Hydropower",
            description:
              "Developing run-of-river and small reservoir hydropower projects that provide reliable baseload power with minimal environmental impact.",
          },
          {
            number: "04",
            title: "Geothermal Energy",
            description:
              "Investing in geothermal energy exploration and development to tap into East Africa's significant geothermal resources.",
          },
          {
            number: "05",
            title: "Biomass & Waste-to-Energy",
            description:
              "Supporting projects that convert agricultural waste, forest residues, and municipal solid waste into valuable energy.",
          },
          {
            number: "06",
            title: "Energy Efficiency",
            description:
              "Promoting energy efficiency across industrial, commercial, and residential sectors to reduce energy consumption and enhance sustainability.",
          },
        ]}
      />

      <SectorCta
        title="Ready to invest in East Africa's renewable energy future?"
        description="Connect with our team to explore renewable energy investment opportunities across East Africa."
        ctaText="Contact our renewable energy specialists"
        ctaLink="/contact"
      />
    </>
  )
}
