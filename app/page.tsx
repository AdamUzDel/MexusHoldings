"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import CountdownTimer from "@/components/countdown-timer"
import Image from "next/image"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <main
      className={`emirates-font min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-10 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-75 blur-lg"></div>
          <div className="relative bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/20">
            <Image
              src="/mexus-logo-blue.png"
              alt="Mexus Holdings International Logo"
              width={100}
              height={100}
              className="rounded-full m-2"
            />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 font-emirates">
          MEXUS HOLDINGS INTERNATIONAL
        </h1>

        <Card className="w-full max-w-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8 overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
          <CardContent className="p-6 sm:p-10 relative">
            <h2 className="text-xl sm:text-2xl font-medium mb-6 font-emirates">
              We are preparing something amazing and exciting for you.
            </h2>

            <p className="text-lg mb-6 text-blue-100">Special surprise for our subscribers</p>

            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 font-emirates bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Coming soon
            </h3>

            <div className="flex flex-col items-center mb-10">
              <CountdownTimer />
              <p className="text-xl font-bold mt-4 font-emirates">TO LAUNCH</p>
            </div>

            <p className="text-lg mb-10 text-blue-100 max-w-2xl mx-auto">
              Our website is under construction, but we are ready to go!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-grow group">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 group-hover:text-white/80 transition-colors duration-200"
                  size={18}
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50 h-12 focus:border-blue-400 focus:ring-blue-400/50 transition-all duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-none h-12 px-6 font-emirates transition-all duration-200 hover:shadow-lg"
              >
                Subscribe
              </Button>
            </form>

            {/* Footer */}
            <div className="my-8 text-white/60 text-sm">
              © {new Date().getFullYear()} Mexus Holdings International. All rights reserved.
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

