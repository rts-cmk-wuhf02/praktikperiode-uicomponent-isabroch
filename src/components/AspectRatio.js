import React from "react";
import { css } from "@emotion/core";

const RatioCard = ({
  children,
  ratio = 1 / 1,
  maxSize = { width: "initial", height: "initial" },
  background = "white",
  rounded = false,
  imgFit = "contain",
  className,
}) => {
  // https://css-tricks.com/aspect-ratio-boxes/
  return (
    <div
      css={css`
        max-width: ${maxSize.width};
        max-height: ${maxSize.height};
      `}
    >
      <div
        className={className}
        css={css`
          border-radius: ${rounded ? 10 : 0}px;
          height: 0;
          overflow: hidden;
          padding-top: ${100 / ratio}%;
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
    </div>
  );
};

export default RatioCard;
