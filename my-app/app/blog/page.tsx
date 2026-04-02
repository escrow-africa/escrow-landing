import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, SanityPostSummary, SanityCategory } from '@/sanity/lib/posts'
import { urlFor } from '@/sanity/lib/image'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const Blog = async () => {
  const posts = await getAllPosts()

  if (!posts || posts.length === 0) {
    return (
      <div className="px-4 py-12 mx-auto  max-w-5xl">
        <h1 className="text-3xl font-bold mt-7">Blog</h1>
        <p className="mt-4 text-gray-500">No posts found. Please add content in Sanity Studio.</p>
      </div>
    )
  }

  return (
    <main className="px-4 py-12 mx-auto max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post: SanityPostSummary) => (
          <article key={post._id} className="overflow-hidden rounded-xl border border-slate-200">
            {post.mainImage?.asset && (
              <Link href={`/blog/${post.slug.current}`} className="relative block h-52 w-full">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(700).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Link>
            )}

            <div className="p-5">
              <Link href={`/blog/${post.slug.current}`} className="no-underline">
                <h2 className="text-2xl font-semibold hover:text-blue-600">{post.title}</h2>
              </Link>
              <p className="mt-2 text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
              <p className="mt-3 text-gray-700">{post.excerpt || 'No excerpt available'}</p>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                {post.author?.image && (
                  <Image
                    src={urlFor(post.author.image).width(40).height(40).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                )}
                <span>{post.author?.name || 'Unknown author'}</span>
              </div>

              {post.categories && post.categories.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories.map((cat: SanityCategory) => (
                    <span key={cat.title} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                      {cat.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Blog