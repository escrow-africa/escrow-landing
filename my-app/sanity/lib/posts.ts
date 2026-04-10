import { groq } from 'next-sanity'
import { client } from './client'

export interface SanityImageRef {
  asset: { _ref: string }
  alt?: string
}

export interface SanityAuthor {
  name: string
  image?: SanityImageRef
}

export interface SanityCategory {
  title: string
}

export interface SanityPostSummary {
  _id: string
  title: string
  slug: { current: string }
  author?: SanityAuthor
  categories?: SanityCategory[]
  mainImage?: SanityImageRef
  publishedAt: string
  excerpt?: string
}

export interface SanityPost extends SanityPostSummary {
  body?: unknown[]
}


export async function getAllPosts(): Promise<SanityPostSummary[]> {
  const query = groq`*[_type == 'post'] | order(publishedAt desc) {
    _id,
    title,
    slug {
      current
    },
    "author": author-> {
      name,
      image
    },
    "categories": categories[]-> {
      title
    },
    mainImage,
    publishedAt,
    excerpt,
  }`

  return client.fetch(query)
}
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const query = groq`*[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }`

  return client.fetch(query)
}
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = groq`*[_type == 'post' && slug.current == $slug][0] {
    _id,
    title,
    slug {
      current
    },
    "author": author-> {
      name,
      image
    },
    "categories": categories[]-> {
      title
    },
    mainImage,
    publishedAt,
    body,
  }`

  return  client.fetch(query, { slug })
}

export async function getRelatedPosts(categories: string[], currentPostId: string): Promise<SanityPostSummary[]> {
  if (!categories || categories.length === 0) return []

  const query = groq`*[_type == 'post' && _id != $currentPostId && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug {
      current
    },
    "author": author-> {
      name,
      image
    },
    "categories": categories[]-> {
      title
    },
    mainImage,
    publishedAt,
    excerpt,
  }`

  return client.fetch(query, { categories, currentPostId })
}
