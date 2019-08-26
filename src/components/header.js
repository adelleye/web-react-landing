import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div id="site-title" align="left">
      <a>Colima</a>
    </div>
    <div className="HeaderGroup">
      <Link to="/about">About</Link>
      <Link to="/ourInstructors">Our Instructors</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/location">Location</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/bookAClass">
        <button>Book a Class</button>
      </Link>
    </div>
  </div>
)

export default Header
