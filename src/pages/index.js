import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";
import BookmarkArticle from "../components/BookmarkArticle";
import { articles } from "../data/articles";
import { SmallArticle } from "../components/SmallArticle";

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const articleData = articles(data);

  const style = {
    base: css`
      font-family: "Montserrat", sans-serif;
      background: #eaeaea;
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 30px;
      align-items: flex-start;
    `,
  };

  return (
    <div css={style.base}>
      <Helmet title={siteTitle}>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <BookmarkArticle article={articleData[1]} />
      <SmallArticle article={articleData[1]} />
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
