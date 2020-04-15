import React from "react"
import { graphql } from "gatsby"

const BlogPost = props => {
  const { data } = props

  const post = data.markdownRemark

  return (
    <React.Fragment>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </React.Fragment>
  )
}

// $slug received on context from createPage node function
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
        category
      }
      html
    }
  }
`

export default BlogPost
