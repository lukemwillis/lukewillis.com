import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaStackOverflow, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SocialIcons = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitterUsername
            linkedinUsername
            stackOverflowUserId
          }
        }
      }
    `
  )
  return (
    <div>
      <OutboundLink
        target="_blank"
        href={`https://twitter.com/${siteMetadata.twitterUsername}`}
      >
        <FaTwitter size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        target="_blank"
        href={`https://linkedin.com/in/${siteMetadata.linkedinUsername}`}
        style={{ marginLeft: "1em" }}
      >
        <FaLinkedinIn size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        target="_blank"
        href={`https://stackoverflow.com/users/${siteMetadata.stackOverflowUserId}`}
        style={{ marginLeft: "1em" }}
      >
        <FaStackOverflow size="1.5rem" />
      </OutboundLink>
    </div>
  )
}

export default SocialIcons
