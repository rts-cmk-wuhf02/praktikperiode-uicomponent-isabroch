import React from "react";
import { Card } from "./Card";
import { NewsLogo } from "./NewsLogo";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import AspectRatio from "./AspectRatio";
import { Blurb, Title } from "./Text";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import "../styles/Slider.css";

export const Slider = ({ colSpan = 8, children }) => {
  return (
    <Card colSpan={colSpan}>
      <AspectRatio ratio={771 / 475}>
        <Flickity
          options={{
            setGallerySize: false,
            prevNextButtons: false,
            wrapAround: true,
            autoPlay: true,
          }}
        >
          {children}
        </Flickity>
      </AspectRatio>
    </Card>
  );
};

export const Slide = ({ article: { title, images, description } }) => {
  return (
    <article
      css={css`
        padding: 36px 36px 60px;
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        &::before {
          display: block;
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: -1;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0) 75%
          );
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: auto;
          position: relative;
          z-index: 3;
        `}
      >
        <NewsLogo size={23} color="white" />
        <Heart color="white" />
      </div>

      <div
        css={css`
          width: 60%;
          min-width: 350px;
          color: white;
        `}
      >
        <Title
          size="xl"
          css={css`
            line-height: 1;
          `}
        >
          {title}
        </Title>
        <Blurb
          css={css`
            line-height: 1.5;
            margin: 0.5em 0;
          `}
          lines={2}
        >
          {description}
        </Blurb>
      </div>

      <Img
        fluid={images[0].fluid}
        /* Must use this method to override gatsby-image inline relative positioning */
        style={{ position: "absolute" }}
        css={css`
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: -2;
        `}
      />
    </article>
  );
};

const Heart = ({ size = 20, color = "red" }) => (
  <button
    className="js-likeArticle"
    css={css`
      width: ${`${size}${Number.isInteger(size) ? "px" : ""}`};
      fill: ${color};
      cursor: pointer;
      transition: 0.2s ease;
      background: transparent;
      border: none;
      padding: 0;

      &:hover {
        transform: scale(1.2);
      }

      svg {
        fill: inherit;
        width: 100%;
        height: 100%;
      }
    `}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.994 19">
      <path
        id="Heart"
        d="M20.624,3.543A4.937,4.937,0,0,0,18.015.584,6.12,6.12,0,0,0,15.368,0a5.494,5.494,0,0,0-4.789,2.492l-.078.156-.078-.117A5.542,5.542,0,0,0,5.634.039,6.12,6.12,0,0,0,2.987.623,5.12,5.12,0,0,0,.339,3.582,6.574,6.574,0,0,0,.573,8.449c1.635,3.426,9.305,10.162,9.617,10.473a.286.286,0,0,0,.234.078h.039a.337.337,0,0,0,.234-.117c.467-.389,8.02-7.047,9.617-10.473A6.227,6.227,0,0,0,20.624,3.543Z"
      />
    </svg>
  </button>
);
