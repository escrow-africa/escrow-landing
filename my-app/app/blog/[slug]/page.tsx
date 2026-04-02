import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs, SanityCategory } from '@/sanity/lib/posts'
import { urlFor } from '@/sanity/lib/image'

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()

  if (!slugs) return []

  return slugs.map((item) => ({ slug: item.slug }))
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="px-4 py-12 mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{formatDate(post.publishedAt)}</p>

      {post.mainImage?.asset && (
        <div className="relative h-72 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(1600).height(900).url()}
            alt={post.mainImage.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="mb-6 flex items-center gap-3">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(60).height(60).url()}
            alt={post.author.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <p className="text-lg font-medium">{post.author?.name || 'Unknown author'}</p>
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 text-sm text-slate-600">
              {post.categories.map((cat: SanityCategory) => (
                <span key={cat.title} className="rounded bg-slate-100 px-2 py-1">
                  {cat.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <PortableText value={(post.body ?? []) as any[]} />
      </div>
    </article>
  )
}

export default BlogPostPage
