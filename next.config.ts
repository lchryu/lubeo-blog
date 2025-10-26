// next.config.ts
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const withMDX = createMDX({
  // Cho phép markdown table, checklist… trong bài
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
})

const nextConfig: NextConfig = {
  // Cho phép các file .mdx trở thành page/component
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

export default withMDX(nextConfig)
