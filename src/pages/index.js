import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";
import BookmarkArticle from "../components/BookmarkArticle";
import { articles } from "../data/articles";

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div
      css={css`
        font-family: "Montserrat", sans-serif;
      `}
    >
      <Helmet title={siteTitle}>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {articles(data).map((article) => (
        <BookmarkArticle article={article} />
      ))}
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

    allContentfulArticle {
      nodes {
        ...ArticleFragment
      }
    }
  }
`;
