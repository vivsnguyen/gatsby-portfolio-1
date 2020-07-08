import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <div className="contact-container">
      <div className="contact" >
        <h1>Contact</h1>
          <div className="info">
            <ul>
              <p>📩 Email: vivipnguyen@gmail.com</p>
              <p>👩🏻‍💻 Github: <a target="_blank" href="https://github.com/vivsnguyen" rel="noopener noreferrer">vivsnguyen</a></p>
              <p>👤 LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/thuyvi-nguyen/" rel="noopener noreferrer">thuyvi-nguyen</a></p>
            </ul>
          </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage

// <img className="me-icon" alt="astronaut" src={require('../images/me-icon.png')} />
