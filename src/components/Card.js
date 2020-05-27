import React from "react";
import { css } from "@emotion/core";

export const Card = ({
  children,
  maxWidth = "initial",
  maxHeight = "initial",
  background = "white",
  rounded = true,
  colSpan = 1,
  className,
}) => {
  const cssWrapper = css`
    overflow: hidden;
    background: ${background};
    max-width: ${maxWidth};
    max-height: ${maxHeight};
    border-radius: ${rounded ? 10 : 0}px;
    grid-column: span ${colSpan};
  `;

  return <div css={cssWrapper}>{children}</div>;
};
