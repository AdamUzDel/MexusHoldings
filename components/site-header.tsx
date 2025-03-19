"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
            <span className="hidden font-emirates text-xl font-bold sm:inline-block">MEXUS</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavItem href="/sectors" label="Sectors">
              <DropdownMenuItem asChild>
                <Link href="/sectors/manufacturing">Manufacturing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/hospitality">Hospitality</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/healthcare">Healthcare</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/aviation">Aviation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/real-estate">Real Estate</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sectors/oil-and-gas">Oil & Gas</Link>
              </DropdownMenuItem>
            </NavItem>
            <NavItem href="/investors" label="Investors">
              <DropdownMenuItem asChild>
                <Link href="/investors/local">Local Investors</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/investors/international">International Investors</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/investors/success-stories">Success Stories</Link>
              </DropdownMenuItem>
            </NavItem>
            <NavItem href="/solutions" label="Solutions">
              <DropdownMenuItem asChild>
                <Link href="/solutions/investment-management">Investment Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/business-monitoring">Business Monitoring</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/profit-returns">Profit Returns</Link>
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
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/investor-portal">Investor Portal</Link>
          </Button>
          <Button className="hidden md:flex" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <button className="flex md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-white border-b md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 overflow-hidden",
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <MobileNavItem href="/sectors" label="Sectors" />
          <MobileNavItem href="/investors" label="Investors" />
          <MobileNavItem href="/solutions" label="Solutions" />
          <MobileNavItem href="/about-us" label="About Us" />
          <MobileNavItem href="/contact" label="Contact" />
          <div className="pt-4 grid gap-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/investor-portal">Investor Portal</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
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
        <DropdownMenuContent align="start" className="w-48">
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
              <Link href="/sectors/hospitality" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Hospitality
              </Link>
              <Link href="/sectors/healthcare" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Healthcare
              </Link>
              <Link href="/sectors/aviation" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Aviation
              </Link>
              <Link href="/sectors/real-estate" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Real Estate
              </Link>
              <Link href="/sectors/oil-and-gas" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Oil & Gas
              </Link>
            </>
          )}
          {href === "/investors" && (
            <>
              <Link href="/investors/local" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Local Investors
              </Link>
              <Link href="/investors/international" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                International Investors
              </Link>
              <Link href="/investors/success-stories" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Success Stories
              </Link>
            </>
          )}
          {href === "/solutions" && (
            <>
              <Link
                href="/solutions/investment-management"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Investment Management
              </Link>
              <Link
                href="/solutions/business-monitoring"
                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
              >
                Business Monitoring
              </Link>
              <Link href="/solutions/profit-returns" className="block py-1 text-sm text-gray-600 hover:text-blue-700">
                Profit Returns
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

