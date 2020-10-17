import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SlackHiStaffImage from "../../../static/images/integration/slack-histaff.svg";
import thumbnailEventWebhook from "../../../static/images/integration/slack-event-webhook.png";
import thumbnailNewsWebhook from "../../../static/images/integration/slack-news-webhook.png";
import thumbnailNoteWebhook from "../../../static/images/integration/slack-note-webhook.png";
import thumbnailGuid1 from "../../../static/images/integration/slack-guid-1.png";
import thumbnailGuid2 from "../../../static/images/integration/slack-guid-2.png";

const AboutPage = () => (
    <Layout>
        <SEO title="Slack Integration"/>

        <div className={"page-header"}>
            <img alt={"Slack"} src={SlackHiStaffImage}/>
            <h2>HiStaff and Slack</h2>
            <p>HiStaff is excited to announce a new integration with Slack<br />if you use the Slack it can be really efficient for your team.</p>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEventWebhook}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Slack Event Webhook</h2>
                                <p>The ability to send Event alerts to any channel when a new event is created by anyone.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Slack News Webhook</h2>
                                <p>Let staff know about any news on the Slack channel.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailNewsWebhook}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNoteWebhook}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Slack Note Webhook</h2>
                                <p>Staff can see an alert about any post on the public board.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"bg-color"}>
            <div className={"container"}>
                <div className={"integration-guid"}>
                    <div className={"title"}>
                        <h2>How to enable and use the Slack integration</h2>
                    </div>

                    <div className={"content"}>
                        <h4>Overview</h4>
                        <p>You need to be an admin in order to enable the Slack integration. With the Slack integration, you can send an alert to Slack.</p>
                        <h4>Step 1</h4>
                        <p>Company admin needs to enable the integration one time for the whole company to use.</p>
                        <img alt={"News"} src={thumbnailGuid1}/>

                        <h4>Step 2</h4>
                        <p>Set up your conditions, and press the Update button. You will be able to send a notification to a specific Slack channel or to a specific user.</p>
                        <img alt={"News"} src={thumbnailGuid2}/>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
