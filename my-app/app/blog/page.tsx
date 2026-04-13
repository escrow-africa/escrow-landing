import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogPostCard from "@/components/BlogPostCard"
import { getPosts } from "@/sanity/lib/queries"

export const metadata = {
  title: 'Blog | Escrow Landing',
  description: 'Read our latest blog posts and insights',
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <div>
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay updated with our latest insights, tips, and industry news.
            </p>
          </div>

          {/* Blog Posts Grid */}
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <BlogPostCard key={post._id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                No blog posts available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}