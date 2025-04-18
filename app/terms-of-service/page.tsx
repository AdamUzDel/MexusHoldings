import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Terms of Service</h1>
            <p className="text-lg text-blue-100">Last updated: April 18, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              Welcome to Mexus Holdings International. These Terms of Service (&quot;Terms&quot;) govern your use of our website
              and services. By accessing our website or using our services, you agree to be bound by these Terms. If you
              do not agree with any part of these Terms, you may not use our website or services.
            </p>

            <h2>1. Services</h2>
            <p>
              Mexus Holdings International provides investment management and financial services to businesses and
              individuals across East Africa. Our services include but are not limited to investment management,
              business monitoring, and profit distribution.
            </p>
            <p>
              The specific services available to you will depend on your eligibility, the agreements you enter into with
              us, and applicable laws and regulations.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              To use our services, you must be at least 18 years old and have the legal capacity to enter into binding
              contracts. If you are using our services on behalf of a business entity, you represent that you have the
              authority to bind that entity to these Terms.
            </p>
            <p>
              Certain services may have additional eligibility requirements, which will be communicated to you before
              you engage with those services.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              Some of our services may require you to create an account. When you register for an account, you agree to
              provide accurate, current, and complete information. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to notify us immediately of any unauthorized use of your account or any other breach of
              security. We cannot and will not be liable for any loss or damage arising from your failure to comply with
              this section.
            </p>

            <h2>4. Investment Risks</h2>
            <p>
              All investments involve risk, and the value of your investments may fluctuate. Past performance is not
              indicative of future results. Before making any investment decisions, you should carefully consider your
              investment objectives, level of experience, and risk appetite.
            </p>
            <p>
              We do not guarantee any specific returns on investments. Any projections or forecasts provided are for
              illustrative purposes only and should not be relied upon as a guarantee of future results.
            </p>

            <h2>5. Fees and Payments</h2>
            <p>
              Our fees for various services will be communicated to you before you engage with those services. You agree
              to pay all fees associated with the services you use in accordance with the payment terms provided.
            </p>
            <p>
              We may modify our fees by providing notice to you. Your continued use of our services after such notice
              constitutes your acceptance of the modified fees.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of
              Mexus Holdings International or our licensors and is protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
              republish, download, store, or transmit any of the material on our website without our prior written
              consent.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Mexus Holdings International and its officers, directors,
              employees, and agents shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or goodwill, arising from or in connection with your
              use of or inability to use our services.
            </p>
            <p>
              Our total liability for all claims arising from or related to these Terms or our services shall not exceed
              the amount you have paid to us for the services giving rise to the claim during the twelve (12) months
              preceding the event giving rise to the liability.
            </p>

            <h2>8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Mexus Holdings International and its officers,
              directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your
              violation of these Terms or your use of our services.
            </p>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our services will immediately cease. All provisions of these Terms
              which by their nature should survive termination shall survive termination, including ownership
              provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Uganda, without regard to
              its conflict of law provisions.
            </p>
            <p>
              Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in
              the courts of Uganda, and you consent to the personal jurisdiction of such courts.
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time to reflect changes in our practices or legal requirements. We
              will notify you of any material changes by posting the updated Terms on our website with a revised &quot;Last
              updated&quot; date.
            </p>
            <p>
              Your continued use of our services after the effective date of the revised Terms constitutes your
              acceptance of the changes.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Mexus Holdings International
              <br />
              Kampala Business Center
              <br />
              Plot 42, Nakasero Road
              <br />
              Kampala, Uganda
              <br />
              Email: legal@mexusholdings.com
              <br />
              Phone: +256 700 123 456
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button asChild>
              <Link href="/contact">Contact Our Legal Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
