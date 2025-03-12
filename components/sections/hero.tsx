"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Signing up with email:", email)
    setEmail("")
    // Show success message or redirect
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/img/hero-bg.jpg" alt="Hero Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="100">
            Welcome To Mexus Holdings Int.
          </h2>
          <p className="text-xl text-white/80 mb-8" data-aos="fade-up" data-aos-delay="200">
            Subscribe To Our Newsletter To get New Updates On Our Products
          </p>
          <div className="max-w-md" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-lg shadow-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-4 py-3 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

