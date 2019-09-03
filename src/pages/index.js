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

      <div className="UpcomingTextWrapper">
        <h2>
          Besides our regular schedule, we also frequently host visiting
          teachers and speakers.
        </h2>
      </div>
      <div className="ViewMoreButton">
        <button>View More</button>
      </div>
      <div className="ThirdContent">
        <div className="ThirdContentLeftSide">
          <h2>
            With an emphasis on breathing techniques and meditation, we promote
            thoughtful and reflexive yoga to promote both physical and mental
            well-being.
          </h2>
        </div>

        <div className="ThirdContentRightSide">
          <p>Learn more about our studio and philosophy around yoga.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="FourthContent"></div>
    </div>
  </Layout>
)

export default IndexPage
