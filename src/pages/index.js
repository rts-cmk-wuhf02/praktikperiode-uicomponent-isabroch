import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";
import AspectRatio from "../components/AspectRatio";
import BookmarkArticle from "../components/BookmarkArticle";

const RootIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const article = {
    title: "Virtual Reality",
    category: { name: "Technology", color: "#F0F0F0" },
    img: { src: "https://placekitten.com/200/300", alt: "Kitty!" },
  };

  return (
    <div
      css={css`
        font-family: "Montserrat", sans-serif;
      `}
    >
      <Helmet title={siteTitle}>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BookmarkArticle article={article} />
    </div>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
