import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../images/hero.png";

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"feature"}>
            <h1>Make your Staff and Workspace Happy</h1>
            <p>HiStaff gives your complex the opportunity to increase the percentage of happiness<br/>and enjoyment of
                your staff and as a result, bring productivity to your workspace.</p>
            <img src={featureImage}/>
        </div>

        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
    </Layout>
)

export default IndexPage
