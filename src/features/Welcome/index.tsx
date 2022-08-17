import { DownloadCta } from "features/Download/Cta";
import { DownloadHeader } from "features/Download/Header";
import { Footer, footerSeparatorBackground } from "features/Footer";
import { Header } from "features/Header";
import { HomeFeatures } from "features/Home/Features";
import { HomeProductHero } from "features/Home/Hero";
import { HomePolygonBanner } from "features/Home/PolygonBanner";
import { HomeTryIt } from "features/Home/TryIt";
import { Subscribe } from "features/Subscribe";
import { css } from "linaria";
import React from "react";
import SEO from "shared/seo";
import { semanticSuccess } from "shared/styles/color-palette";
import {
  bodyDarkGold120,
  bodyDarkGrey80,
  sectionBackgroundGold20,
  sectionBackgroundGold5,
  sectionBackgroundOffWhite,
  titleDarkHunterGreen,
} from "shared/styles/colors";
import {
  bodyLargeSegment32,
  bodyLargeSegment36,
  bodyNormalSegment24,
  h1Quincy72,
} from "shared/styles/fonts";
import {
  sectionWideWidth,
  sectionInlinePadding,
  subtitleBlockMargin,
} from "shared/styles/lengths";
import { WelcomeHeader } from "./Header";

export function Welcome() {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: column;
        background: ${sectionBackgroundGold5};
      `}
    >
      <SEO />

      <WelcomeHeader />
      <div
        className={css`
          width: 100%;
          max-width: ${sectionWideWidth};
          padding: 2rem ${sectionInlinePadding};
          margin: 0 auto;
        `}
      >
        <h1
          className={css`
            text-align: center;
            padding: 1rem 2rem;
            font: ${h1Quincy72};
            color: ${titleDarkHunterGreen};
          `}
        >
          Your web3 wallet
          <br />
          isn’t decentralized.
          <br />
          <span
            className={css`
              color: ${semanticSuccess};
            `}
          >
            But it could be.
          </span>
        </h1>
        <p
          className={css`
            text-align: center;
            margin: ${subtitleBlockMargin} auto;
            font: ${bodyLargeSegment36};
            color: ${bodyDarkGrey80};
          `}
        >
          Introducing the first community-owned wallet.
        </p>
        <div
          className={css`
            display: none;
            background: top / cover url("bg.png");
            height: 26rem;
            margin-top: 3rem;

            @media (min-width: 52rem) {
              display: block;
            }
          `}
        />
      </div>
      <div>
        <div id="download">
          <HomeTryIt />
          <DownloadCta />
        </div>
      </div>

      <div
        className={css`
          background: ${sectionBackgroundGold20};
          padding: 6rem 0;
        `}
      >
        <HomeFeatures />
      </div>

      <div
        className={css`
          background: ${sectionBackgroundOffWhite};
          padding: 6rem 0;
        `}
      >
        <Subscribe />
      </div>

      <div
        className={css`
          background: ${footerSeparatorBackground}, ${sectionBackgroundOffWhite};
          padding: 4rem 0 20rem;
        `}
      >
        <DownloadHeader />
        <DownloadCta />
      </div>
      <Footer />
    </div>
  );
}
