import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const BlogPost = props => {
  const { data } = props

  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} - {post.timeToRead}
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
    </Layout>
  )
}

// $slug received on context from createPage node function
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        category
      }
      html
      timeToRead
    }
  }
`
export default BlogPost
