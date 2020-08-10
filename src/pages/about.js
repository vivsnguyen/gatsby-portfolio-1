import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <div className="about-container">
    <div className="about" >
        <h1>About</h1>
          <div className="info">
            <ul>
            <p><img src="https://en.gravatar.com/userimage/169635224/5e849dc85e115edbdb936bcdba2ff606.png?size=250"></img></p>
            <p>Hello! My name is Vivi. I graduated in 2019 with a Bachelor's in Cognitive Science from UC Berkeley. Throughout my college career, I've dabbled in teaching a lot of different subjects (reading, math, science, music, and computer science!).</p>

            <p>I've taken courses in computer science in undergrad and worked on Python based research projects in psychology and in education. I also taught computer science for The Coder School, which has a very open-ended learning curriculum. Teaching computer science is where I learned to debug and have fun with coding.</p>

            <p>In the classroom, the teachers I worked with began to make use of new ed-tech tools that made monitoring reading progress so much easier. This was so different from the long-term research I was used to. These tools inspired me to pursue a different path in software, and led me to enrolling in the full-time software engineering bootcamp at Hackbright Academy.</p>

            <p>I am currently interested in full-stack software engineering roles after my graduation from Hackbright!</p>
            </ul>
          </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

