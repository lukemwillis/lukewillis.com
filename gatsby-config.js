module.exports = {
  siteMetadata: {
    siteUrl: "https://lukewillis.com",
    title: "Luke Willis",
    author: "Luke Willis",
    githubUsername: "lukemwillis",
    twitterUsername: "lukemwillis",
    linkedinUsername: "lukemwillis",
    stackOverflowUserId: "2479481",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID || "IN-DEV",
        anonymize: true,
        respectDNT: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.svg",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        icon: "src/assets/icon.svg",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
