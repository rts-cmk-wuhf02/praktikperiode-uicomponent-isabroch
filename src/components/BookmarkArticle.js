import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Title } from "./Title";

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

const BookmarkArticle = ({ article }) => {
  const { title, images, category } = article;
  return (
    <AspectRatio maxWidth="370px" ratio={1} background="white" rounded>
      <article
        css={css`
          position: relative;
          box-sizing: border-box;
          height: 100%;
          z-index: 0;
          display: flex;
          flex-direction: column;
          padding: 22px 35px;
        `}
      >
        <Bookmark
          css={css`
            position: absolute;
            right: 10px;
            top: 0;
          `}
        />
        <h1
          css={css`
            font-size: 25px;
            font-weight: bold;
            text-align: center;
          `}
        >
          {title}
        </h1>
        <span
          css={css`
            padding: 0 5px 2px 7px;
            align-self: flex-end;
            margin-top: auto;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
          `}
        >
          <Title color={category.color}>{category.name}</Title>
        </span>
        <img
          src={images[0].src || "http://placehold.it/300"}
          alt={images[0].alt || ""}
          css={css`
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
          `}
        />
      </article>
    </AspectRatio>
  );
};

export default BookmarkArticle;
