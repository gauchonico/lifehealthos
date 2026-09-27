import { groq } from 'next-sanity'

export const allPostSlugsQuery = groq`
  *[_type == "post" && isPublished == true && defined(slug.current)][].slug.current
`

export const allPostsQuery = groq`
  *[_type == "post" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{name, "slug": slug.current, avatar}
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    body,
    publishedAt,
    seo,
    "author": author->{name, role, bio, "slug": slug.current, avatar}
  }
`

export const allResourceSlugsQuery = groq`
  *[_type == "resource" && isPublished == true && defined(slug.current)][].slug.current
`

export const allResourcesQuery = groq`
  *[_type == "resource" && isPublished == true] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    type,
    summary,
    image,
    tags,
    publishDate
  }
`

export const resourcesByTypeQuery = groq`
  *[_type == "resource" && isPublished == true && type == $type] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    type,
    summary,
    image,
    tags,
    publishDate
  }
`

export const resourceBySlugQuery = groq`
  *[_type == "resource" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    type,
    summary,
    body,
    image,
    "file": file.asset->{url},
    tags,
    relatedSolutions,
    publishDate
  }
`

export const allFaqsQuery = groq`
  *[_type == "faq" && isPublished == true] | order(order asc) {
    _id,
    question,
    answer,
    category,
    relatedSolution
  }
`

export const allVideoSlugsQuery = groq`
  *[_type == "video" && isPublished == true && defined(slug.current)][].slug.current
`

export const allVideosQuery = groq`
  *[_type == "video" && isPublished == true] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    youtubeUrl,
    videoFileUrl,
    featuredImage,
    summary,
    tags,
    publishDate
  }
`

// Videos tagged "How-to" in the workspace (case-insensitive; also accepts
// "How to" / "Howto") — product explainers shown on /how-to.
export const howToVideosQuery = groq`
  *[_type == "video" && isPublished == true && count(tags[lower(@) in ["how-to", "how to", "howto"]]) > 0] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    youtubeUrl,
    videoFileUrl,
    featuredImage,
    summary,
    tags,
    publishDate
  }
`

export const videoBySlugQuery = groq`
  *[_type == "video" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    youtubeUrl,
    videoFileUrl,
    featuredImage,
    summary,
    tags,
    publishDate
  }
`

export const allWebinarSlugsQuery = groq`
  *[_type == "webinar" && isPublished == true && defined(slug.current)][].slug.current
`

export const allWebinarsQuery = groq`
  *[_type == "webinar" && isPublished == true] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    youtubeUrl,
    featuredImage,
    summary,
    tags,
    publishDate
  }
`

export const webinarBySlugQuery = groq`
  *[_type == "webinar" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    youtubeUrl,
    featuredImage,
    summary,
    tags,
    publishDate
  }
`

export const allNewsSlugsQuery = groq`
  *[_type == "news" && isPublished == true && defined(slug.current)][].slug.current
`

export const allNewsQuery = groq`
  *[_type == "news" && isPublished == true] | order(publishDate desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    tags,
    publishDate
  }
`

export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    body,
    tags,
    publishDate
  }
`

export const allSolutionSlugsQuery = groq`
  *[_type == "solution" && isPublished == true && defined(slug.current)] | order(order asc) [].slug.current
`

export const allSolutionsQuery = groq`
  *[_type == "solution" && isPublished == true] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    shortName,
    icon,
    summary
  }
`

export const solutionBySlugQuery = groq`
  *[_type == "solution" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    shortName,
    icon,
    headline,
    coreMessage,
    summary,
    outcomes,
    challenges,
    includedPlatforms,
    includedCapabilities,
    optionalCapabilities,
    pricingDrivers,
    faqs
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    companyName,
    tagline,
    logo,
    primaryColor,
    secondaryColor
  }
`
