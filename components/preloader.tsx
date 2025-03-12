"use client"

import { useState, useEffect } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-all duration-500">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-[bounce_0.6s_infinite_alternate]"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-[bounce_0.6s_0.1s_infinite_alternate]"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-[bounce_0.6s_0.2s_infinite_alternate]"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-[bounce_0.6s_0.3s_infinite_alternate]"></div>
      </div>
    </div>
  )
}

