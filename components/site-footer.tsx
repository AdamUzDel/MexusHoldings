import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/mexus-logo-blue.png"
                alt="Mexus Holdings International"
                width={40}
                height={40}
                className="h-10 w-auto bg-white rounded-full p-1"
              />
              <span className="font-emirates text-xl font-bold">MEXUS</span>
            </Link>
            <p className="text-blue-200 mb-6 max-w-xs">
              Mexus Holdings International is a trusted investment partner, managing funds for local and international
              investors across diverse sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-emirates text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sectors" className="text-blue-200 hover:text-white transition-colors">
                  Sectors
                </Link>
              </li>
              {/* <li>
                <Link href="/investors" className="text-blue-200 hover:text-white transition-colors">
                  Investors
                </Link>
              </li> */}
              <li>
                <Link href="/solutions" className="text-blue-200 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/investor-portal" className="text-blue-200 hover:text-white transition-colors">
                  Investor Portal
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-emirates text-lg font-bold mb-4">Our Sectors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sectors/manufacturing" className="text-blue-200 hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/sectors/healthcare" className="text-blue-200 hover:text-white transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/sectors/aviation" className="text-blue-200 hover:text-white transition-colors">
                  Aviation
                </Link>
              </li>
              <li>
                <Link href="/sectors/renewables" className="text-blue-200 hover:text-white transition-colors">
                  Renewables
                </Link>
              </li>
              <li>
                <Link href="/sectors/food-security" className="text-blue-200 hover:text-white transition-colors">
                  Food Security
                </Link>
              </li>
              <li>
                <Link href="/sectors/advanced-technology" className="text-blue-200 hover:text-white transition-colors">
                  Advanced Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-emirates text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-blue-300 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  P.O. Box 5514, Dubai, UAE. <br/>
                  Level 20, Burj Gate Tower, Sheikh Zayed Road - Dubai - UAE
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-300 flex-shrink-0" />
                <a href="tel:+256700123456" className="text-blue-200 hover:text-white transition-colors">
                  +256 772972249 / +256 705275130
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@mexusholdings.com" className="text-blue-200 hover:text-white transition-colors">
                  info@mexusholdings.com 
                </a>
              </li>
            </ul>
          </div>
        </div>

        

        <div className="border-t border-blue-900 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Mexus Holdings International. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-blue-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-blue-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-blue-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="text-blue-300">
              Designed by{" "}
              <a
                href="https://bytebasetechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors font-medium"
              >
                BytebaseTech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

