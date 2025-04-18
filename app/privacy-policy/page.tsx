import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Privacy Policy</h1>
            <p className="text-lg text-blue-100">Last updated: April 18, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              At Mexus Holdings International, we are committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, postal address, and other
                information you provide when contacting us or applying for our services.
              </li>
              <li>
                <strong>Financial Information:</strong> Bank account details, investment preferences, and financial
                history when you engage with our investment services.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device information, and cookies when
                you visit our website.
              </li>
              <li>
                <strong>Usage Information:</strong> How you interact with our website, which pages you visit, and
                features you use.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing and managing your investments</li>
              <li>Communicating with you about our services, updates, and promotions</li>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Complying with legal obligations and regulatory requirements</li>
              <li>Detecting, preventing, and addressing technical issues or fraudulent activities</li>
              <li>Analyzing usage patterns to enhance user experience</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                payment processing, data analysis, and customer service.
              </li>
              <li>
                <strong>Business Partners:</strong> Companies we collaborate with to offer joint services or promotions.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.
              </li>
              <li>
                <strong>Corporate Transactions:</strong> In connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
            <p>We do not sell your personal information to third parties for marketing purposes.</p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent for processing your information</li>
              <li>Restricting or objecting to certain processing activities</li>
              <li>Requesting portability of your information</li>
              <li>Opting out of marketing communications</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided at the end of this policy.</p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and
              to remember your preferences. You can manage your cookie preferences through your browser settings.
            </p>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence,
              where data protection laws may differ. We ensure appropriate safeguards are in place to protect your
              information when transferred internationally.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children. If we become aware that we have collected personal information from a child
              without parental consent, we will take steps to remove that information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by posting the updated policy on our website with
              a revised &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <p>
              Mexus Holdings International
              <br />
              Kampala Business Center
              <br />
              Plot 42, Nakasero Road
              <br />
              Kampala, Uganda
              <br />
              Email: privacy@mexusholdings.com
              <br />
              Phone: +256 700 123 456
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button asChild>
              <Link href="/contact">Contact Us With Privacy Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
