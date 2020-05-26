import React from "react";
import { css } from "@emotion/core";

const RatioCard = ({
  children,
  width = 1,
  height = 1,
  background = "white",
  rounded = false,
  imgFit = "contain",
}) => {
  // https://css-tricks.com/aspect-ratio-boxes/
  return (
    <div
      css={css`
        border-radius: ${rounded ? 10 : 0};
        height: 0;
        overflow: hidden;
        padding-top: ${(height / width) * 100}%;
        background: ${background};
        position: relative;
      `}
    >
      <div
        css={css`
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
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default RatioCard;
