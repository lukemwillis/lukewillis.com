import React from "react";
import styled from "styled-components";
import lwLogo from "../images/icon.svg";
import tkpLogo from "../images/tkp.svg";
import burnkoinLogo from "../images/burnkoin.svg";
import kapLogo from "../images/kap.svg";
import SEO from "../components/seo";
import SocialIcons from "../components/socialIcons";
import "./layout.css";

const Container = styled.main`
  padding: 1em;
  max-width: 40em;
  margin: 0 auto;
`;

export default function Layout({ children, pageContext }) {
  return (
    <>
      <SEO title={pageContext.frontmatter && pageContext.frontmatter.title} />
      <Container style={{ minHeight: "100vh" }}>
        <main style={{ marginTop: "10vh" }}>{children}</main>
      </Container>
      <footer>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="/">
              <img alt="Luke Willis Logo" src={lwLogo} width={40} height={40} />
            </a>
            <a href="//thekoinpress.com" style={{ marginLeft: "2em" }}>
              <img
                alt="The Koin Press Logo"
                src={tkpLogo}
                width={48}
                height={48}
              />
            </a>
            <a href="//burnkoin.com" style={{ marginLeft: "2em" }}>
              <img
                alt="BurnKoin Logo"
                src={burnkoinLogo}
                width={48}
                height={48}
              />
            </a>
            <a href="//kap.domains" style={{ marginLeft: "2em" }}>
              <img
                alt="KAP Logo"
                src={kapLogo}
                width={132}
                height={48}
              />
            </a>
          </div>
          <div
            style={{
              paddingBottom: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>© {new Date().getFullYear()}, Luke Willis</p> <SocialIcons />
          </div>
          <p style={{ textAlign: "center" }}>👋</p>
        </Container>
      </footer>
    </>
  );
}
