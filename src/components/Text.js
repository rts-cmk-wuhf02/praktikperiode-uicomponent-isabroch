import React from "react";
import { css } from "@emotion/core";

export const Subtitle = ({
  children,
  color = "white",
  spacing = 150,
  size = "11px",
  background = "rgba(255, 255, 255, 0.8)",
  align = "center",
  className,
  minwidth = "100px",
  padding = false,
}) => (
  <div
    className={className}
    css={css`
      box-sizing: border-box;
      padding: ${padding ? "8px 16px" : "0"};
      text-align: ${align};
      min-width: ${minwidth};
      background: ${background};
      border-radius: 15px;
      font-weight: 800;
      font-size: ${size};
      text-transform: uppercase;
      color: ${color};
      letter-spacing: ${spacing / 1000}em;
      line-height: 1.4;
    `}
  >
    {children}
  </div>
);

export const Title = ({
  children,
  size = "L",
  color = "inherit",
  className,
  align = "left",
  padding = false,
}) => {
  const sizeFontsizeDict = {
    s: "18px",
    m: "25px",
    l: "35px",
    xl: "45px",
  };

  size = sizeFontsizeDict[size.toLowerCase()];

  return (
    <div
      className={className}
      css={css`
        text-align: ${align};
        font-size: ${size};
        font-weight: 700;
        color: ${color};
        line-height: 1.2;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
        padding: ${padding ? "0.55em 0" : "0"};
      `}
    >
      {children}
    </div>
  );
};

export const Blurb = ({
  children,
  color = "inherit",
  className,
  size = "16px",
  lines = 3,
}) => {
  return (
    <p
      className={className}
      css={css`
        font-size: ${size};
        font-weight: 400;
        line-height: 1.4;
        color: ${color};
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `}
    >
      {children}
    </p>
  );
};
