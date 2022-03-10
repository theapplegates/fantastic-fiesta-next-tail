import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
import { DocSearch } from '@docsearch/react'
import Head from 'next/head'

export const d500dad17ba74bb3877dbcb619af617e = process.env.NEXT_PUBLIC_ALGOLIA_KEY
export const WJB3BB1LBY = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID

export function Search() {
  if (!WJB3BB1LBY || !d500dad17ba74bb3877dbcb619af617e) {
    return null
  }
return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${WJB3BB1LBY}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>
      <DocSearch
        apiKey={d500dad17ba74bb3877dbcb619af617e}
        indexName={'nextjs'}
        appId={WJB3BB1LBY}
      />
    </>
  )
}
