import React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
    const { title } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
        }
    }
`

