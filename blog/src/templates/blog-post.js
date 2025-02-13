import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
    const { title, body } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
    		body {
              childMarkdownRemark {
                html
              }
            }
        }
    }
`

