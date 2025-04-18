import Link from "next/link"

export default function SitemapPage() {
  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Sitemap</h1>
            <p className="text-lg text-blue-100">Find all pages and resources on our website.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-bold font-emirates mb-4 text-blue-600">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sectors" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-700 hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/get-started" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="/investor-portal" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Investor Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h2 className="text-xl font-bold font-emirates mb-4 text-blue-600">Sectors</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/sectors/manufacturing" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/sectors/healthcare" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/sectors/aviation" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Aviation
                  </Link>
                </li>
                <li>
                  <Link href="/sectors/renewables" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Renewables
                  </Link>
                </li>
                <li>
                  <Link href="/sectors/food-security" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Food Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sectors/advanced-technology"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Advanced Technology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-xl font-bold font-emirates mb-4 text-blue-600">Solutions</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/solutions/advanced-technology-financing"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Advanced Technology Financing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/renewables-and-energy-finance"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Renewables and Energy Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/digitization-finance"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Digitization Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/supply-chain-finance"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Supply Chain Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/agritech-loans"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Agritech Loans
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h2 className="text-xl font-bold font-emirates mb-4 text-blue-600">About Us</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us/our-mission" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/leadership" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/careers" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>

              <h2 className="text-xl font-bold font-emirates mb-4 mt-8 text-blue-600">Investors</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/investors/local" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Local Investors
                  </Link>
                </li>
                <li>
                  <Link href="/investors/international" className="text-gray-700 hover:text-blue-600 transition-colors">
                    International Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/investors/success-stories"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-xl font-bold font-emirates mb-4 text-blue-600">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
