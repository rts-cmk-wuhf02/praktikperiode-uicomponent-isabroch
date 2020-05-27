import React from "react";
import { css } from "@emotion/core";

export const Card = ({
  children,
  maxWidth = "initial",
  maxHeight = "initial",
  background = "white",
  rounded = true,
  className,
}) => {
  const cssWrapper = css`
    background: ${background};
    max-width: ${maxWidth};
    max-height: ${maxHeight};
    border-radius: ${rounded ? 10 : 0}px;
  `;

  return <div css={cssWrapper}>{children}</div>;
};
