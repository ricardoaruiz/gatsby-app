import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem background="red" />
    <PostItem background="blue" />
    <PostItem background="green" />
  </Layout>
)

export default IndexPage
