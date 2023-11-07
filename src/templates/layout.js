import React from "react";
import styled from "styled-components";
import lwLogo from "../assets/icon.svg";
import SEO from "../components/seo";
import SocialIcons from "../components/socialIcons";
import "./layout.css";

const Container = styled.div`
  padding: 2em 1em;
  max-width: 40em;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export default function Layout({ children, pageContext }) {
  return (
    <>
      <SEO title={pageContext.frontmatter && pageContext.frontmatter.title} />
      <Container>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <img
              alt="Luke Willis Logo"
              src={lwLogo}
              width={40}
              height={40}
              style={{ margin: 0 }}
            />
          </a>
          <SocialIcons />
        </header>
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: "10em",
          }}
        >
          <span>© {new Date().getFullYear()}, Luke Willis</span>
          <span>👨👩👧👦👦👶🐶</span>
        </footer>
      </Container>
    </>
  );
}
