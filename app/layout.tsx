import type React from "react"
import "@/app/globals.css"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"

// Load Emirates-Medium font
const emiratesMedium = localFont({
  src: "../public/fonts/Emirates-Medium.ttf",
  variable: "--font-emirates-medium",
  display: "swap",
})

export const metadata = {
  title: "Mexus Holdings International - Coming Soon",
  description: "We are preparing something amazing and exciting for you. Stay tuned!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${emiratesMedium.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

