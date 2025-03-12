import Image from "next/image"
import Link from "next/link"
import { PageTitle } from "@/components/page-title"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <PageTitle
        title="Blog Details"
        description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog Details", href: `/blog/${params.slug}`, current: true },
        ]}
      />

      <section id="blog-details" className="py-16">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <article className="bg-white rounded-lg shadow-md p-6">
                <div className="relative h-96 w-full mb-6 -mx-6 -mt-6 rounded-t-lg overflow-hidden">
                  <Image src="/assets/img/blog/blog-1.jpg" alt="Blog post" fill className="object-cover" />
                </div>

                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
                </h2>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <Link href="#" className="hover:text-primary">
                      John Doe
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <time dateTime="2022-01-01">Jan 1, 2022</time>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <Link href="#" className="hover:text-primary">
                      12 Comments
                    </Link>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
                    laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem
                    doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro
                    consequatur assumenda perferendis dolore.
                  </p>

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum
                    vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                  </p>

                  <blockquote className="bg-gray-100 p-6 italic border-l-4 border-primary my-6">
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam
                      doloribus minus autem quos.
                    </p>
                  </blockquote>

                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident
                    voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit
                    perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro tempora et quibusdam
                    voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem
                    harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui.
                    Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>

                  <h3>Et quae iure vel ut odit alias.</h3>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio
                    provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam
                    quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui. Quia et
                    suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur
                    dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam
                    dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea. Beatae minima sunt
                    libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem
                    accusamus mollitia aut atque aut.
                  </p>

                  <div className="relative h-80 w-full my-6">
                    <Image
                      src="/assets/img/blog/blog-inside-post.jpg"
                      alt="Blog inside post"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia
                    quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi
                    sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel. Consectetur
                    quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero
                    illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla
                    sit eaque mollitia nisi asperiores est veniam.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <span className="text-gray-600 mr-2">Categories:</span>
                    <Link href="#" className="text-primary hover:underline">
                      Business
                    </Link>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    <span className="text-gray-600 mr-2">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      <Link href="#" className="text-primary hover:underline">
                        Creative
                      </Link>
                      ,
                      <Link href="#" className="text-primary hover:underline">
                        Tips
                      </Link>
                      ,
                      <Link href="#" className="text-primary hover:underline">
                        Marketing
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              <div className="bg-white rounded-lg shadow-md p-6 mt-8 flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/assets/img/blog/blog-author.jpg"
                  alt="Author"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
                  <div className="flex gap-2 mb-3">
                    <Link href="#" className="text-gray-500 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-gray-600">
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas
                    repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mt-8">
                <h4 className="text-xl font-bold mb-6">8 Comments</h4>

                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="flex gap-4">
                    <Image
                      src="/assets/img/blog/comments.jpg"
                      alt="Commenter"
                      width={60}
                      height={60}
                      className="rounded-full h-12 w-12"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold">Georgia Reader</h5>
                        <Link href="#" className="text-sm text-primary flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                          </svg>
                          Reply
                        </Link>
                      </div>
                      <time className="text-sm text-gray-500 block mb-2">01 Jan, 2022</time>
                      <p className="text-gray-600">
                        Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis
                        molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui
                        facilis et.
                      </p>
                    </div>
                  </div>

                  {/* Comment 2 with replies */}
                  <div className="flex gap-4">
                    <Image
                      src="/assets/img/blog/comments-2.jpg"
                      alt="Commenter"
                      width={60}
                      height={60}
                      className="rounded-full h-12 w-12"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold">Aron Alvarado</h5>
                        <Link href="#" className="text-sm text-primary flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                          </svg>
                          Reply
                        </Link>
                      </div>
                      <time className="text-sm text-gray-500 block mb-2">01 Jan, 2022</time>
                      <p className="text-gray-600">
                        Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut
                        beatae.
                      </p>

                      {/* Reply 1 */}
                      <div className="flex gap-4 mt-6 ml-6">
                        <Image
                          src="/assets/img/blog/comments-3.jpg"
                          alt="Commenter"
                          width={60}
                          height={60}
                          className="rounded-full h-12 w-12"
                        />
                        <div>
                          <div className="flex items-center justify-between">
                            <h5 className="font-bold">Lynda Small</h5>
                            <Link href="#" className="text-sm text-primary flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                />
                              </svg>
                              Reply
                            </Link>
                          </div>
                          <time className="text-sm text-gray-500 block mb-2">01 Jan, 2022</time>
                          <p className="text-gray-600">
                            Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae
                            quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed
                            repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor
                            recusandae.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* More comments would go here */}
                </div>

                <div className="mt-10">
                  <h4 className="text-xl font-bold mb-4">Leave a Reply</h4>
                  <p className="text-gray-600 mb-6 text-sm">
                    Your email address will not be published. Required fields are marked *
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name*"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your Email*"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Your Website"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />

                    <textarea
                      placeholder="Your Comment*"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Search</h3>
                <form className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Search..."
                  />
                  <button type="submit" className="absolute right-3 top-2.5 text-gray-500 hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="flex justify-between text-gray-600 hover:text-primary">
                      <span>General</span>
                      <span className="text-gray-500">(25)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between text-gray-600 hover:text-primary">
                      <span>Lifestyle</span>
                      <span className="text-gray-500">(12)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between text-gray-600 hover:text-primary">
                      <span>Travel</span>
                      <span className="text-gray-500">(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between text-gray-600 hover:text-primary">
                      <span>Design</span>
                      <span className="text-gray-500">(22)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between text-gray-600 hover:text-primary">
                      <span>Creative</span>
                      <span className="text-gray-500">(8)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex justify-between text-gray-600 hover:text-primary">
                      <span>Education</span>
                      <span className="text-gray-500">(14)</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Recent Posts</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex gap-3">
                      <Image
                        src={`/assets/img/blog/blog-recent-${item}.jpg`}
                        alt="Recent post"
                        width={80}
                        height={60}
                        className="object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800 hover:text-primary line-clamp-2">
                          <Link href="#">Nihil blanditiis at in nihil autem</Link>
                        </h4>
                        <time className="text-sm text-gray-500">Jan 1, 2022</time>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "App",
                    "IT",
                    "Business",
                    "Mac",
                    "Design",
                    "Office",
                    "Creative",
                    "Studio",
                    "Smart",
                    "Tips",
                    "Marketing",
                  ].map((tag) => (
                    <Link
                      key={tag}
                      href="#"
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

