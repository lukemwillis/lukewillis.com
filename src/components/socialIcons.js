import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaGithub, FaStackOverflow, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SocialIcons = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            githubUsername
            twitterUsername
            linkedinUsername
            stackOverflowUserId
          }
        }
      }
    `
  )
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1em"
    }}>
      <OutboundLink
        target="_blank"
        href={`https://github.com/${siteMetadata.githubUsername}`}
      >
        <FaGithub size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        target="_blank"
        href={`https://linkedin.com/in/${siteMetadata.linkedinUsername}`}
      >
        <FaLinkedinIn size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        target="_blank"
        href={`https://stackoverflow.com/users/${siteMetadata.stackOverflowUserId}`}
      >
        <FaStackOverflow size="1.5rem" />
      </OutboundLink>
      <OutboundLink
        target="_blank"
        href={`https://twitter.com/${siteMetadata.twitterUsername}`}
      >
        <FaXTwitter size="1.5rem" />
      </OutboundLink>
    </div>
  )
}

export default SocialIcons
