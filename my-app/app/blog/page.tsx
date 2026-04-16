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

  const recentPost = posts[0]
  const topReadPosts = posts.slice(1, 4)
  const previousPosts = posts.slice(4, 9)

  return (
    <main className="px-4 pt-24 pb-12 mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      {/* Top section: Recent blog (3/4) and Top 3 Most Read (1/4) */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Recent Blog - 3/4 width */}
        <div className="w-full lg:w-3/4">
          {recentPost && (
            <article className="overflow-hidden rounded-xl border border-slate-200">
              {recentPost.mainImage?.asset && (
                <Link href={`/blog/${recentPost.slug.current}`} className="relative block h-64 md:h-80 w-full">
                  <Image
                    src={urlFor(recentPost.mainImage).width(1200).height(700).url()}
                    alt={recentPost.mainImage.alt || recentPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                  />
                </Link>
              )}

              <div className="p-6">
                <Link href={`/blog/${recentPost.slug.current}`} className="no-underline">
                  <h2 className="text-2xl md:text-3xl font-semibold hover:text-[#0B493A] mb-3">{recentPost.title}</h2>
                </Link>
                <p className="text-sm text-gray-500 mb-4">{formatDate(recentPost.publishedAt)}</p>
                <p className="text-base md:text-lg text-gray-700 mb-4">{recentPost.excerpt || 'No excerpt available'}</p>

                <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                  {recentPost.author?.image && (
                    <Image
                      src={urlFor(recentPost.author.image).width(40).height(40).url()}
                      alt={recentPost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  )}
                  <span>{recentPost.author?.name || 'Unknown author'}</span>
                </div>

                {recentPost.categories && recentPost.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {recentPost.categories.map((cat: SanityCategory) => (
                      <span key={cat.title} className="rounded bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          )}
        </div>

        {/* Top 3 Most Read - 1/4 width */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-semibold mb-6">Top 3 Most Read</h3>
          <div className="space-y-4">
            {topReadPosts.map((post: SanityPostSummary) => (
              <article key={post._id} className="overflow-hidden rounded-lg border border-slate-200">
                {post.mainImage?.asset && (
                  <Link href={`/blog/${post.slug.current}`} className="relative block h-24 w-full">
                    <Image
                      src={urlFor(post.mainImage).width(400).height(200).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </Link>
                )}

                <div className="p-3">
                  <Link href={`/blog/${post.slug.current}`} className="no-underline">
                    <h4 className="text-sm font-medium hover:text-blue-600 line-clamp-2">{post.title}</h4>
                  </Link>
                  <p className="mt-1 text-xs text-gray-500">{formatDate(post.publishedAt)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Previous Blogs Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Previous Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {previousPosts.map((post: SanityPostSummary) => (
            <article key={post._id} className="overflow-hidden rounded-xl border border-slate-200">
              {post.mainImage?.asset && (
                <Link href={`/blog/${post.slug.current}`} className="relative block h-40 w-full">
                  <Image
                    src={urlFor(post.mainImage).width(400).height(300).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover"
                  />
                </Link>
              )}

              <div className="p-4">
                <Link href={`/blog/${post.slug.current}`} className="no-underline">
                  <h3 className="text-lg font-semibold hover:text-blue-600 line-clamp-2">{post.title}</h3>
                </Link>
                <p className="mt-2 text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
                <p className="mt-2 text-sm text-gray-700 line-clamp-3">{post.excerpt || 'No excerpt available'}</p>

                <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                  {post.author?.image && (
                    <Image
                      src={urlFor(post.author.image).width(24).height(24).url()}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                  )}
                  <span>{post.author?.name || 'Unknown author'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Blog