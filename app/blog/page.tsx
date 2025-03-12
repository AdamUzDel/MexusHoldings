import Link from "next/link"
import Image from "next/image"
import { PageTitle } from "@/components/page-title"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Dolorum optio tempore voluptas dignissimos",
      category: "Politics",
      image: "/assets/img/blog/blog-1.jpg",
      author: {
        name: "Maria Doe",
        image: "/assets/img/blog/blog-author.jpg",
      },
      date: "Jan 1, 2022",
    },
    {
      id: 2,
      title: "Nisi magni odit consequatur autem nulla dolorem",
      category: "Sports",
      image: "/assets/img/blog/blog-2.jpg",
      author: {
        name: "Allisa Mayer",
        image: "/assets/img/blog/blog-author-2.jpg",
      },
      date: "Jun 5, 2022",
    },
    {
      id: 3,
      title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
      category: "Entertainment",
      image: "/assets/img/blog/blog-3.jpg",
      author: {
        name: "Mark Dower",
        image: "/assets/img/blog/blog-author-3.jpg",
      },
      date: "Jun 22, 2022",
    },
    {
      id: 4,
      title: "Non rem rerum nam cum quo minus olor distincti",
      category: "Sports",
      image: "/assets/img/blog/blog-4.jpg",
      author: {
        name: "Lisa Neymar",
        image: "/assets/img/blog/blog-author-4.jpg",
      },
      date: "Jun 30, 2022",
    },
    {
      id: 5,
      title: "Accusamus quaerat aliquam qui debitis facilis consequatur",
      category: "Politics",
      image: "/assets/img/blog/blog-5.jpg",
      author: {
        name: "Denis Peterson",
        image: "/assets/img/blog/blog-author-5.jpg",
      },
      date: "Jan 30, 2022",
    },
    {
      id: 6,
      title: "Distinctio provident quibusdam numquam aperiam aut",
      category: "Entertainment",
      image: "/assets/img/blog/blog-6.jpg",
      author: {
        name: "Mika Lendon",
        image: "/assets/img/blog/blog-author-6.jpg",
      },
      date: "Feb 14, 2022",
    },
  ]

  return (
    <>
      <PageTitle
        title="Blog"
        description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog", current: true },
        ]}
      />

      <section id="blog" className="py-16 bg-background">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.category}</p>

                  <h2 className="text-xl font-bold mb-4 text-gray-800 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <div className="flex items-center">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-xs text-gray-500">
                        <time dateTime="2022-01-01">{post.date}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <Link
                href="#"
                className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                1
              </Link>
              <Link href="#" className="py-2 px-4 border border-gray-300 bg-primary text-sm font-medium text-white">
                2
              </Link>
              <Link
                href="#"
                className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                3
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

