import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";
import BookmarkArticle from "../components/BookmarkArticle";
import { articles } from "../data/articles";
import { SmallArticle } from "../components/SmallArticle";
import { LargeArticle } from "../components/LargeArticle";

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
      margin: 0 auto;
      max-width: 1280px;
      box-sizing: border-box;
      padding: 30px;
    `,
  };

  return (
    <div css={style.base}>
      <Helmet title={siteTitle}>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {articleData.map((article) => (
        <>
          <BookmarkArticle article={article} />
          <SmallArticle article={article} />
          <LargeArticle article={article} />
        </>
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
