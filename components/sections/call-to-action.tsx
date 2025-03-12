import Image from "next/image"

export default function CallToAction() {
  return (
    <section id="call-to-action" className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/img/cta-bg.jpg" alt="Call to Action Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in" data-aos-delay="100">
          <h3 className="text-3xl font-bold text-white mb-4">Call Us Now For Any Inquiry</h3>
          <p className="text-white/80 mb-8">
            You have an inquiry, Feel free to call us now and have an opportunity to speak to our managing director
            today.
          </p>
          <a
            href="tel:+256772972249"
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-primary hover:border-primary transition-colors duration-300"
          >
            +256 772 972249
          </a>
        </div>
      </div>
    </section>
  )
}

