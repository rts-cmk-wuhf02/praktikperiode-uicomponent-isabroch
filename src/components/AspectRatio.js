import React from "react";
import { css } from "@emotion/core";

const RatioCard = ({
  children,
  ratio = 1 / 1,
  background = "white",
  imgFit = "contain",
  className,
  rounded = false,
}) => {
  const cssWrapper = css`
    height: 0;
    padding-top: ${100 / ratio}%;
    background: ${background};
    position: relative;
    overflow: hidden;
    border-radius: ${rounded ? "10px" : "0"};
  `;

  const cssContent = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    > img {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: ${imgFit};
    }

    .gatsby-image-wrapper {
      height: 100%;
    }
  `;

  // https://css-tricks.com/aspect-ratio-boxes/
  return (
    <div className={className} css={cssWrapper}>
      <div css={cssContent}>{children}</div>
    </div>
  );
};

export default RatioCard;
