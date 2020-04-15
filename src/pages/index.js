import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  // Consultando os posts
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
  `)

  const postLists = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postLists.map(
        ({
          node: {
            frontmatter: { background, category, description, date, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
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
    </Layout>
  )
}

export default IndexPage
