import React from "react"
import projects from "../data/projects"
import config from "../data/config"
import ProjectListing from "../components/ProjectListing"
import Blog from "../components/Blog"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <header>
      <div className="summary">
          <p>{config.siteDescription}</p>
      </div>
    </header>
    <ProjectListing projects={projects} />
  </Layout>
)

export default IndexPage
// <Blog />
