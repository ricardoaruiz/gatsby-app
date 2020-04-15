import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  // Consultando os posts
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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
          },
        }) => (
          <PostItem
            slug="/about"
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
