import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>About</h1>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem.</p>
            </div>
        </div>
    </Layout>
)

export default AboutPage
