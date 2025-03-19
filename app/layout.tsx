import type React from "react"
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

export const metadata = {
  title: "Mexus Holdings International",
  description:
    "A trusted investment partner managing funds for local and international investors across diverse sectors.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

