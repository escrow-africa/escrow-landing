import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'

interface Author {
  name: string
  image?: string
}

interface Category {
  title: string
}

interface BlogPostCardProps {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: {
    asset?: {
      url: string
    }
    alt?: string
  }
  author?: Author
  categories?: Category[]
  excerpt?: any[]
}

export default function BlogPostCard({
  title,
  slug,
  publishedAt,
  mainImage,
  author,
  categories,
}: BlogPostCardProps) {
  const formattedDate = format(new Date(publishedAt), 'MMM dd, yyyy')
  const imageUrl = mainImage?.asset?.url

  return (
    <Link href={`/blog/${slug.current}`}>
      <article className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
        {/* Image */}
        {imageUrl && (
          <div className="relative w-full h-48 overflow-hidden bg-gray-200">
            <Image
              src={imageUrl}
              alt={mainImage?.alt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((category, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
            <div className="flex items-center gap-3">
              {author?.image && (
                <div className="relative w-8 h-8">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <span className="font-medium">{author?.name || 'Anonymous'}</span>
            </div>
            <time className="text-gray-500">{formattedDate}</time>
          </div>
        </div>
      </article>
    </Link>
  )
}
