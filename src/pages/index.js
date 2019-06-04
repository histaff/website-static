import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Make Happy your Workspace and Employers!" />
    <h1>We’ll be back soon!</h1>
    <p>HiStaff is under construction, Stay tuned for something amazing!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link>
    <Link to="/contact/">Contact</Link>
  </Layout>
)

export default IndexPage
