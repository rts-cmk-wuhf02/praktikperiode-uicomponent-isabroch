import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Subtitle, Title } from "./Text";
import { Card } from "./Card";
import Img from "gatsby-image";

const Bookmark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10.07"
    height="27.004"
    viewBox="0 0 10.07 27.004"
    {...props}
  >
    <path
      id="Path_19"
      data-name="Path 19"
      d="M381.951,2543v27l5.082-5.734,4.988,5.734v-27Z"
      transform="translate(-381.951 -2543)"
      fill="red"
    />
  </svg>
);

const BookmarkArticle = ({
  article: { title, images, category },
  colSpan = 4,
}) => {
  const cssContent = css`
    position: relative;
    box-sizing: border-box;
    height: 100%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    padding: 22px 35px;
  `;
  const cssBookmarkPosition = css`
    position: absolute;
    right: 10px;
    top: 0;
  `;

  const cssTitle = css`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  `;

  const cssCategory = css`
    padding: 0 5px 2px 7px;
    align-self: flex-end;
    margin-top: auto;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
  `;

  const cssBackgroundImage = css`
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `;

  return (
    <Card colSpan={colSpan} rounded>
      <AspectRatio ratio={1} background="white">
        <article css={cssContent}>
          <Bookmark css={cssBookmarkPosition} />
          <Title>
            <h1 css={cssTitle}>{title}</h1>
          </Title>
          <Subtitle css={cssCategory} color={category.color}>
            {category.name}
          </Subtitle>
          <Img
            fluid={images[0].fluid}
            /* Must use this method to override gatsby-image inline relative positioning */
            style={{ position: "absolute" }}
            css={cssBackgroundImage}
          />
        </article>
      </AspectRatio>
    </Card>
  );
};

export default BookmarkArticle;
