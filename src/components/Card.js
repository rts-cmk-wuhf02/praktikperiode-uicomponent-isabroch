import React from "react";
import { css } from "@emotion/core";

export const Card = ({
  children,
  maxWidth = "initial",
  maxHeight = "initial",
  background = "white",
  rounded = true,
  colSpan = 1,
  rowSpan = 1,
  vAlign = "initial",
  className,
}) => {
  const style = {
    card: css`
      overflow: hidden;
      background: ${background};
      max-width: ${maxWidth};
      max-height: ${maxHeight};
      border-radius: ${rounded ? 10 : 0}px;
      grid-column: span ${colSpan};
      align-self: ${vAlign};
      grid-row: span ${rowSpan};
      box-shadow: 0 1.8px 5px rgba(0, 0, 0, 0.1), 0 3px 20px rgba(0, 0, 0, 0.05);
    `,
  };
  return (
    <div {...className} css={style.card}>
      {children}
    </div>
  );
};
