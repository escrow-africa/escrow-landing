import { client } from './client'

export const getPosts = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    "excerpt": body[0...2]{
      ...
    }
  }`

  try {
    const posts = await client.fetch(query)
    return posts
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error)
    return []
  }
}

export const getPostBySlug = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    body
  }`

  try {
    const post = await client.fetch(query, { slug })
    return post
  } catch (error) {
    console.error('Failed to fetch post from Sanity:', error)
    return null
  }
}
