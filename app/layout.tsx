import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Lato } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--default-font",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--heading-font",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--nav-font",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mexus Holdings International",
  description:
    "Mexus Holdings International - Your trusted partner for production, transportation, real estate, and financial services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

