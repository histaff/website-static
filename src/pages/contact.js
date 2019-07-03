import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-8"}>
                        <p>We take our commitment to our users seriously. If you need our help with your user account, have questions about how to use the HiStaff, any feedback or are experiencing technical difficulties, please do not hesitate to contact us.</p>
                    </div>

                    <div className={"col-4"}>
                        <div className={"contact-items"}>
                            <h2>contact@histaff.io</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
