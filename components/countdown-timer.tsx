"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set the target date to 2 weeks from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 14)

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Calculate immediately
    calculateTimeLeft()
    setIsLoaded(true)

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`flex flex-col items-center ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-blue-300" size={28} />
        <span className="text-2xl font-bold font-emirates">2 weeks</span>
      </div>

      <div className="grid grid-cols-4 gap-4 sm:gap-6 text-center">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative bg-white/10 rounded-lg p-3 w-16 sm:w-20 md:w-24 backdrop-blur-sm border border-white/20 group-hover:border-white/30 transition-all duration-200">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-emirates">{item.value}</span>
              </div>
            </div>
            <span className="text-sm mt-2 text-blue-200 font-emirates">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

