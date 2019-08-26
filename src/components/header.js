import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
