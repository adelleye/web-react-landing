import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

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
    <div className="FourthContent">
      <div className="FourthContentGroup">
        <h2>Subscribe to Our Newsletter </h2>
        <p>Sign up to receive news and updates.</p>

        <div className="FieldsWrapper">
          <form>
            <label for="fname"></label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              name="fname"
            />
            <label for="lname"></label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              name="lname"
            />
            <label for="emaila"></label>
            <input
              type="email"
              id="emaila"
              placeholder="Email Address"
              name="lname"
            />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
    <div className="PageFooter">
      <div className="FooterFirstGroup">
        <h3>Colima</h3>
        <p>
          Made with{" "}
          <Link to="https://colima-demo.squarespace.com/">Squarespace</Link>{" "}
        </p>
      </div>

      <div className="FooterSecondGroup">
        <p>
          123 Demo Street <br />
          Lake Tahoe, CA <br />
          (555) 555-5555
        </p>
      </div>

      <div className="FooterThirdGroup">
        <Link to="/about">About</Link>
        <Link to="/location">Location</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/bookaclass">Book a class</Link>
      </div>

      <div className="FooterFourthGroup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
          <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
        </svg>
      </div>
    </div>
  </Layout>
)

export default IndexPage
