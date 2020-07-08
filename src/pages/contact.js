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
              <p>Email: connorwcallahan@gmail.com</p>
              <p>Github: <a target="_blank" href="https://github.com/Connor-Callahan" rel="noopener noreferrer">Connor-Callahan</a></p>
              <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/cwcallahan/" rel="noopener noreferrer">cwcallahan</a></p>
              <p>Medium: <a target="_blank" href="https://medium.com/@connorwcallahan"  rel="noopener noreferrer">connorwcallahan</a></p>
            </ul>
          </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage

// <img className="me-icon" alt="astronaut" src={require('../images/me-icon.png')} />
