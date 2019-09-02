import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="FirstContent">
      <div className="FirstContentGroup">
        <h1>Taking care of your mind, body and soul.</h1>

        <p>
          Familiarize yourself with our studio and course offering by signing up
          for a complimentary drop-in class now.
        </p>
        <Link to="/page-2/">Book a Class</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
