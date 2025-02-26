import React from "react";
import tkpLogo from "../assets/tkp.svg";
import burnkoinLogo from "../assets/burnkoin.svg";
import kapLogo from "../assets/kap.svg";
import newsletterSite from "../assets/newsletter-site.jpg";
import podcastSite from "../assets/pod-site.jpg";
import kapSite from "../assets/kap-site.jpg";
import bkSite from "../assets/bk-site.jpg";
import nftSite from "../assets/nft-site.jpg";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default function Carousel() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
        flexWrap: "wrap",
      }}
    >
      <div class="card">
        <OutboundLink target="_blank" href="//kap.domains">
          <img class="hero" alt="KAP site preview" src={kapSite} />
          <h4 style={{ margin: 0; }}>KAP Name Service</h4>
          <img class="icon" alt="KAP Logo" src={kapLogo} />
        </OutboundLink>
      </div>
      <div class="card">
        <OutboundLink target="_blank" href="//burnkoin.com">
          <img class="hero" alt="BurnKoin site preview" src={bkSite} />
          <h4>BurnKoin Staking Pool</h4>
          <img class="icon" alt="BurnKoin Logo" src={burnkoinLogo} />
        </OutboundLink>
      </div>
      <div class="card">
        <OutboundLink target="_blank" href="//nft.thekoinpress.com">
          <img class="hero" alt="NFT site preview" src={nftSite} />
          <h4>Press Badge NFT Minting Site</h4>
          <img class="icon" alt="The Koin Press Logo" src={tkpLogo} />
        </OutboundLink>
      </div>
      <div class="card">
        <OutboundLink target="_blank" href="//thekoinpress.com">
          <img class="hero" alt="Newsletter site preview" src={newsletterSite} />
          <h4>Daily newsletter</h4>
          <img class="icon" alt="The Koin Press Logo" src={tkpLogo} />
        </OutboundLink>
      </div>
      <div class="card">
        <OutboundLink target="_blank" href="//podcast.thekoinpress.com">
          <img class="hero" alt="Podcast site preview" src={podcastSite} />
          <h4>Weekly podcast</h4>
          <img class="icon" alt="The Koin Press Logo" src={tkpLogo} />
        </OutboundLink>
      </div>
    </div>
  );
}
