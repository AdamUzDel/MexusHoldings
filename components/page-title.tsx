import Link from "next/link"

interface Breadcrumb {
  label: string
  href: string
  current?: boolean
}

interface PageTitleProps {
  title: string
  description?: string
  breadcrumbs: Breadcrumb[]
}

export function PageTitle({ title, description, breadcrumbs }: PageTitleProps) {
  return (
    <div className="bg-white">
      <div className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center text-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
              {description && <p className="text-gray-600">{description}</p>}
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex flex-wrap items-center text-sm font-semibold">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {breadcrumb.current ? (
                  <span className="text-gray-800">{breadcrumb.label}</span>
                ) : (
                  <Link href={breadcrumb.href} className="text-gray-600 hover:text-primary">
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  )
}

