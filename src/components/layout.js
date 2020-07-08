import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import config from  "../data/config"
import "../style/navigation.scss"
import "../style/index.scss"
import "../style/projects.scss"
import "../style/contact.scss"
import "../style/blog.scss"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="app" >
        <Navigation navLinks={config}/>
        <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
