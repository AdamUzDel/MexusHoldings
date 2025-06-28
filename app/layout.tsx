import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Load Emirates-Medium font
const emiratesMedium = localFont({
  src: "../public/fonts/Emirates-Medium.ttf",
  variable: "--font-emirates-medium",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Mexus Holdings International - Investment Partner in East Africa",
    template: "%s | Mexus Holdings International",
  },
  description:
    "Mexus Holdings International is a trusted investment partner managing funds for local and international investors across diverse sectors in East Africa. Specializing in Manufacturing, Healthcare, Aviation, Renewables, Food Security, and Advanced Technology.",
  keywords: [
    "investment",
    "East Africa",
    "Uganda",
    "Kenya",
    "Tanzania",
    "Rwanda",
    "manufacturing",
    "healthcare",
    "aviation",
    "renewables",
    "food security",
    "advanced technology",
    "investor",
    "portfolio management",
    "financial services",
    "Mexus Holdings",
    "Bytebase Technologies",
  ],
  authors: [{ name: "Mexus Holdings International" }],
  creator: "Mexus Holdings International",
  publisher: "Bytebase Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mexusholdings.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mexusholdings.com",
    title: "Mexus Holdings International - Investment Partner in East Africa",
    description:
      "Trusted investment partner managing funds for local and international investors across diverse sectors in East Africa.",
    siteName: "Mexus Holdings International",
    images: [
      {
        url: "/mexus-logo-blue.png",
        width: 1200,
        height: 630,
        alt: "Mexus Holdings International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexus Holdings International - Investment Partner in East Africa",
    description:
      "Trusted investment partner managing funds for local and international investors across diverse sectors in East Africa.",
    images: ["/mexus-logo-blue.png"],
    creator: "@BytebaseTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /* verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  }, */
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mexusholdings.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mexus-logo-blue" />
        <link rel="icon" type="image/png" sizes="32x32" href="/mexus-logo-blue.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/mexus-logo-blue.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${emiratesMedium.variable} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}

