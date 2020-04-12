import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/" activeStyle={{ color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: "red" }}>
            About
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default AboutPage
