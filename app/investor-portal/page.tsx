"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff } from "lucide-react"

export default function InvestorPortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempted:", formData)
    alert("This is a demo. In a real application, you would be logged into your investor dashboard.")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <main className="flex-1">
      <section className="bg-blue-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold font-emirates mb-6">Investor Portal</h1>
            <p className="text-lg text-blue-100 mb-8">
              Access your investment dashboard to track performance, view reports, and manage your portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Investor Login</CardTitle>
                    <CardDescription>Sign in to access your investment dashboard</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="login" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                      </TabsList>
                      <TabsContent value="login">
                        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Your email address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                              Password
                            </label>
                            <div className="relative">
                              <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <label htmlFor="remember" className="text-sm text-gray-600">
                                Remember me
                              </label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                              Forgot password?
                            </a>
                          </div>
                          <Button type="submit" className="w-full">
                            Sign In
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="register">
                        <div className="space-y-4 mt-4">
                          <p className="text-gray-600">
                            To register for the Investor Portal, please contact our investor relations team or complete
                            the registration form.
                          </p>
                          <Button asChild className="w-full">
                            <a href="/get-started">Get Started</a>
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
              <div className="relative hidden md:block">
                <div className="absolute -inset-4 bg-blue-100 rounded-lg transform rotate-3"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Investor portal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-4">Portal Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our investor portal provides you with all the tools you need to track and manage your investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  View your complete investment portfolio with real-time performance metrics and allocation breakdowns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access detailed financial reports, statements, and tax documents for your investments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investment Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover new investment opportunities across our sectors and easily add to your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secure Messaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Communicate directly with your investment advisor through our secure messaging system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Document Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Store and access all your investment-related documents in one secure location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analyze your investment performance with interactive charts and detailed metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-emirates mb-6">Need Assistance?</h2>
            <p className="text-blue-100 mb-8">
              Our investor relations team is available to help you with any questions or issues regarding the portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
                <a href="mailto:support@mexusholdings.com">Email Support</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                <a href="tel:+256700123456">Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

