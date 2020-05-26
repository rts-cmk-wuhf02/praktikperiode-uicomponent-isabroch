import React from "react";
import { css } from "@emotion/core";

export const Title = ({
  children,
  color = "white",
  spacing = 200,
  size = "11px",
}) => (
  <span
    css={css`
      font-weight: bold;
      font-size: ${size};
      text-transform: uppercase;
      color: ${color};
      letter-spacing: ${spacing / 1000}em;
    `}
  >
    {children}
  </span>
);
