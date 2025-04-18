"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when pathname changes (user clicks a link)
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/mexus-logo-blue.png"
              alt="Mexus Holdings International"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden sm:inline-block font-emirates text-xl font-bold">MEXUS HOLDINGS</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavItem href="/sectors" label="Sectors">
              <DropdownMenuItem asChild>
                <Link href="/sectors/manufacturing">Manufacturing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/healthcare">Healthcare</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/aviation">Aviation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/renewables">Renewables</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/food-security">Food Security</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/advanced-technology">Advanced Technology</Link>
              </DropdownMenuItem>
            </NavItem>

            <NavItem href="/solutions" label="Solutions">
              <DropdownMenuItem asChild>
                <Link href="/solutions/advanced-technology-financing">Advanced Technology Financing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/renewables-and-energy-finance">Renewables and Energy Finance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/digitization-finance">Digitization Finance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/supply-chain-finance">Supply Chain Finance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/agritech-loans">Agritech Loans</Link>
              </DropdownMenuItem>
            </NavItem>
            <NavItem href="/about-us" label="About Us">
              <DropdownMenuItem asChild>
                <Link href="/about-us/our-mission">Our Mission</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about-us/leadership">Leadership</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about-us/careers">Careers</Link>
              </DropdownMenuItem>
            </NavItem>
            <NavItem href="/contact" label="Contact" />
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <button className="flex md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - slide in from right */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 bg-white border-l shadow-xl md:hidden transition-all duration-300 ease-in-out w-4/5 max-w-xs",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4 border-b">
          <button onClick={toggleMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          <MobileNavItem href="/sectors" label="Sectors" />
          <MobileNavItem href="/solutions" label="Solutions" />
          <MobileNavItem href="/about-us" label="About Us" />
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
            Contact Us
          </Link>
          <div className="pt-4 grid gap-2">
            <Button className="w-full" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 md:hidden z-40" onClick={() => setIsMenuOpen(false)} />}
    </header>
  )
}

interface NavItemProps {
  href: string
  label: string
  children?: React.ReactNode
}

function NavItem({ href, label, children }: NavItemProps) {
  if (children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
          {label}
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Link href={href} className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
      {label}
    </Link>
  )
}

function MobileNavItem({ href, label }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 pb-2">
      <button
        className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown size={16} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2 pl-4">
          {href === "/sectors" && (
            <>
              <Link href="/sectors/manufacturing" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Manufacturing
              </Link>
              <Link href="/sectors/healthcare" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Healthcare
              </Link>
              <Link href="/sectors/aviation" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Aviation
              </Link>
              <Link href="/sectors/renewables" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Renewables
              </Link>
              <Link href="/sectors/food-security" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Food Security
              </Link>
              <Link
                href="/sectors/advanced-technology"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Advanced Technology
              </Link>
            </>
          )}
          {href === "/solutions" && (
            <>
              <Link
                href="/solutions/advanced-technology-financing"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Advanced Technology Financing
              </Link>
              <Link
                href="/solutions/renewables-and-energy-finance"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Renewables and Energy Finance
              </Link>
              <Link
                href="/solutions/digitization-finance"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Digitization Finance
              </Link>
              <Link
                href="/solutions/supply-chain-finance"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Supply Chain Finance
              </Link>
              <Link href="/solutions/agritech-loans" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Agritech Loans
              </Link>
            </>
          )}
          {href === "/about-us" && (
            <>
              <Link href="/about-us/our-mission" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Our Mission
              </Link>
              <Link href="/about-us/leadership" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Leadership
              </Link>
              <Link href="/about-us/careers" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Careers
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}
