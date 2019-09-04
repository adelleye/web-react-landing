/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

exports.onRenderBody = ({
  setHeadComponents,

  setPostBodyComponents,
}) => {
  setHeadComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
    />,
  ])
  setPostBodyComponents([
    <script
      key="3"
      type="text/javascript"
      src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"
    />,
  ])
}
