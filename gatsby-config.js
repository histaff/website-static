module.exports = {
    siteMetadata: {
        title: `HiStaff`,
        description: `Make your Staff and Workspace Happy`,
        author: `@mostafasoufi`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#FF54AC`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/histaff.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-omni-font-loader",
            options: {
              enableListener: true,
              preconnect: ["https://fonts.gstatic.com"],

              web: [
                {
                  file:
                    "https://fonts.googleapis.com/css2?family=PT+Serif&display=swap",
                  name: "PT Serif",
                },
              ],
              custom: [
                {
                  name: "Inter",
                  file: "/fonts/fonts.css",
                },
              ],
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics-gdpr`,
            options: {
                // The property ID; the tracking code won't be generated without it.
                trackingId: "UA-180346042-2",
                // Optional parameter (default false) - Enable analytics in development mode.
                enableDevelopment: true, // default false
                // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
                anonymizeIP: true,
                // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
                autoStartWithCookiesEnabled: false,
                // Optional parameter - Configuration for react-ga and google analytics
                reactGaOptions: {
                    debug: false,
                    gaOptions: {
                        sampleRate: 10
                    }
                }
            },
        },
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
                googleAnalytics: {
                    trackingId: 'UA-180346042-2', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-google-analytics', // default
                    anonymize: true, // default
                    allowAdFeatures: false // default
                },
                googleTagManager: {
                    trackingId: '', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-google-tagmanager', // default
                    dataLayerName: 'dataLayer', // default
                },
                facebookPixel: {
                    pixelId: '', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-facebook-pixel', // default
                },
                // defines the environments where the tracking should be available  - default is ["production"]
                environments: ['production', 'development']
            },
        },
    ],
}
