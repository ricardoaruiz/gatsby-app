import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Paginator from "../components/Paginator"
import PostItem from "../components/PostItem"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { numPages, currentPage } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        (
          {
            node: {
              frontmatter: { background, category, description, date, title },
              timeToRead,
              fields: { slug },
            },
          },
          index
        ) => (
          <PostItem
            key={index}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={`${timeToRead} minutos de leitura`}
            title={title}
            description={description}
          />
        )
      )}
      <Paginator
        numPages={numPages}
        currentPage={currentPage}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

// $skip and $limit received on context from createPage node function
export const query = graphql`
  query PostListPaginated($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
