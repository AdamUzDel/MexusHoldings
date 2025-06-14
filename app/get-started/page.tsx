"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"

export default function GetStartedPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const [formData, setFormData] = useState({
    investorType: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    investmentAmount: "",
    preferredSectors: [] as string[],
    additionalInfo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, investorType: value }))
  }

  const handleSectorToggle = (sector: string) => {
    setFormData((prev) => {
      const sectors = [...(prev.preferredSectors as string[])]
      if (sectors.includes(sector)) {
        return { ...prev, preferredSectors: sectors.filter((s) => s !== sector) }
      } else {
        return { ...prev, preferredSectors: [...sectors, sector] }
      }
    })
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Prepare the data for Formspree
      const submissionData = {
        investorType: formData.investorType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        investmentAmount: formData.investmentAmount,
        preferredSectors: formData.preferredSectors.join(", "),
        additionalInfo: formData.additionalInfo,
        _subject: `New Investment Application - ${formData.investorType} Investor`,
        _replyto: formData.email,
      }

      // Submit to Formspree (you'll need to create a separate endpoint for investment forms)
      await axios.post("https://formspree.io/f/mzzggzvw", submissionData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      setSubmitStatus({
        type: "success",
        message: "Your investment application has been submitted successfully!",
      })

      // Move to thank you step after successful submission
      setTimeout(() => {
        nextStep()
      }, 2000)
    } catch (error) {
      console.error("Error submitting investment form:", error)
      setSubmitStatus({
        type: "error",
        message: "There was an error submitting your application. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Start Your Investment Journey</h1>
            <p className="text-lg text-blue-100 mb-8">
              Join Mexus Holdings International as an investor and grow your wealth through strategic investments in
              East Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-emirates mb-6">Choose Your Investor Path</h2>
                  <p className="text-gray-700 mb-8">
                    Select the investor type that best describes you to get started with your investment journey.
                  </p>

                  <form className="space-y-8">
                    <RadioGroup value={formData.investorType} onValueChange={handleRadioChange}>
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value="local" id="local" className="mt-1" />
                          <div>
                            <Label htmlFor="local" className="text-lg font-bold">
                              Local Investor
                            </Label>
                            <p className="text-gray-600">For investors based in Uganda or East Africa</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value="international" id="international" className="mt-1" />
                          <div>
                            <Label htmlFor="international" className="text-lg font-bold">
                              International Investor
                            </Label>
                            <p className="text-gray-600">For investors based outside East Africa</p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>

                    <Button onClick={nextStep} disabled={!formData.investorType} size="lg">
                      Continue
                    </Button>
                  </form>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/hands-holding-a-plant.jpg?height=500&width=500"
                      alt="Investment journey"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-emirates mb-4">Tell Us About Yourself</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Please provide your personal information so we can create your investor profile.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>All information is kept confidential and secure.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select
                            value={formData.country}
                            onValueChange={(value) => handleSelectChange("country", value)}
                            disabled={isSubmitting}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="uganda">Uganda</SelectItem>
                              <SelectItem value="kenya">Kenya</SelectItem>
                              <SelectItem value="tanzania">Tanzania</SelectItem>
                              <SelectItem value="rwanda">Rwanda</SelectItem>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
                      Back
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={
                        !formData.name || !formData.email || !formData.phone || !formData.country || isSubmitting
                      }
                    >
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-emirates mb-4">Investment Preferences</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Tell us about your investment interests and preferences.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Investment Details</CardTitle>
                    <CardDescription>This helps us match you with the right investment opportunities.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="investmentAmount">Approximate Investment Amount</Label>
                        <Select
                          value={formData.investmentAmount}
                          onValueChange={(value) => handleSelectChange("investmentAmount", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select investment amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000-25000">$5,000 - $25,000</SelectItem>
                            <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100000-500000">$100,000 - $500,000</SelectItem>
                            <SelectItem value="500000+">$500,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Preferred Investment Sectors</Label>
                        <p className="text-sm text-gray-500 mb-3">Select all that interest you</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {["Manufacturing", "Hospitality", "Healthcare", "Aviation", "Real Estate", "Oil & Gas"].map(
                            (sector) => (
                              <div
                                key={sector}
                                className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${
                                  (formData.preferredSectors as string[]).includes(sector)
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200 hover:border-blue-300"
                                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                onClick={() => !isSubmitting && handleSectorToggle(sector)}
                              >
                                <div
                                  className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                                    (formData.preferredSectors as string[]).includes(sector)
                                      ? "bg-blue-600"
                                      : "bg-gray-200"
                                  }`}
                                >
                                  {(formData.preferredSectors as string[]).includes(sector) && (
                                    <CheckCircle className="h-4 w-4 text-white" />
                                  )}
                                </div>
                                <span>{sector}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          placeholder="Tell us more about your investment goals and any specific questions you have"
                          rows={4}
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      {submitStatus.type && (
                        <Alert
                          className={
                            submitStatus.type === "success"
                              ? "border-green-200 bg-green-50"
                              : "border-red-200 bg-red-50"
                          }
                        >
                          {submitStatus.type === "success" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-600" />
                          )}
                          <AlertDescription
                            className={submitStatus.type === "success" ? "text-green-800" : "text-red-800"}
                          >
                            {submitStatus.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={
                        !formData.investmentAmount || !(formData.preferredSectors as string[]).length || isSubmitting
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {step === 4 && (
              <div className="text-center">
                <div className="mb-8 mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-emirates mb-4">Thank You for Your Interest!</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  We&apos;ve received your investment application and a member of our investment team will contact you
                  within 24-48 hours to discuss the next steps in your investment journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button asChild size="lg">
                    <Link href="/investors">Learn More About Investing</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {step < 4 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                      1
                    </div>
                    Expert Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our experienced team manages your investments across diverse sectors to maximize returns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                      2
                    </div>
                    Transparent Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regular updates and transparent reporting keep you informed about your investment performance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                      3
                    </div>
                    Consistent Returns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our investment approach has consistently delivered strong returns for our investors across all
                    sectors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
