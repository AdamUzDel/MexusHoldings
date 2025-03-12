"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
    document.body.classList.toggle("overflow-hidden")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isHomePage && !isScrolled ? "bg-transparent" : "bg-black shadow-md",
        isMobileNavOpen && "bg-black",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/img/logo.png"
            alt="Mexus Holdings International"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>

        <nav
          className={cn(
            "font-nav",
            isMobileNavOpen ? "fixed inset-0 pt-20 bg-black/90 flex flex-col items-center" : "hidden lg:block",
          )}
        >
          <ul className={cn("flex gap-6", isMobileNavOpen && "flex-col items-center text-xl gap-8")}>
            <li>
              <Link
                href="/#hero"
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-white hover:text-primary",
                  pathname === "/" && "text-primary",
                )}
                onClick={() => isMobileNavOpen && toggleMobileNav()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-white hover:text-primary",
                )}
                onClick={() => isMobileNavOpen && toggleMobileNav()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-white hover:text-primary",
                )}
                onClick={() => isMobileNavOpen && toggleMobileNav()}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#portfolio"
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-white hover:text-primary",
                )}
                onClick={() => isMobileNavOpen && toggleMobileNav()}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/#team"
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-white hover:text-primary",
                )}
                onClick={() => isMobileNavOpen && toggleMobileNav()}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className={cn(
                  "font-medium transition-colors duration-300",
                  isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-white hover:text-primary",
                )}
                onClick={() => isMobileNavOpen && toggleMobileNav()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="/login"
          className="hidden lg:inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
        >
          Create An Account
        </Link>

        <button className="lg:hidden text-white text-2xl" onClick={toggleMobileNav} aria-label="Toggle mobile menu">
          {isMobileNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

