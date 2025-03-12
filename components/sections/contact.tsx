export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Contact us for more information about our products and services.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
              <p className="text-gray-600 mb-6">
                We are here to help. Contact us by phone, email or via our social media channels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.35l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Kampala, Kawempe B Zone, Uganda
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.984.825l.158.55a1 1 0 01.416.408l.922 2.594a1 1 0 01-.079 1.005l-.414.414a1 1 0 01-.105.121v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-9zm6.263 3.414a1 1 0 01.707-.293H11a1 1 0 110 2h-1.293a1 1 0 01-.707-.293l-.414-.414a1 1 0 01-.105-.121v-2zm4.274 4.274a1 1 0 01.293.707V11a1 1 0 11-2 0v-1.293a1 1 0 01.293-.707l.414-.414a1 1 0 01.105-.121h2z" />
                  </svg>
                  +256 705 275130
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 10.488l7.997-4.604c.647-.372 1.359-.226 1.843.218.484.444.63.982.406 1.319l-7 4.074a.75.75 0 01-.416.208c-.08.007-.16.007-.24 0-.326-.18-.559-.48-.804-.98l-7-4.074c-.224-.337-.078-.875.406-1.319.484-.444 1.196-.59 1.843-.217z" />
                  </svg>
                  info@mexusholdings.com
                </li>
              </ul>
            </div>
  
            <div data-aos="fade-up" data-aos-delay="200">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  