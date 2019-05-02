import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "DD.MM.Y")
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
  return (
    <Layout>
      <Head title="Blog Post" />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <Link to="/blog">Back to Blog</Link>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog