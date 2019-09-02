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
    <div className="SecondContent">
      <div className="UpcomingClassLabel">
        <div className="UpcomingTextWrapper">
          <h1>Upcoming Classes</h1>
        </div>
      </div>

      <div className="YogaInstructorContainer">
        <div className="YogaAerobicsContainer">
          <h3>Yoga Aerobics</h3>
        </div>
        <div className="InstructorTrainingContainer">
          <h3>Instructor Training</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
