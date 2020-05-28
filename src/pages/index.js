import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../styles/reset.css";
import "../styles/global.css";
import { css } from "@emotion/core";
import BookmarkArticle from "../components/BookmarkArticle";
import { SmallArticle } from "../components/SmallArticle";
import { LargeArticle } from "../components/LargeArticle";
import { articles } from "../data/articles";
import { services } from "../data/services";
import { Services } from "../components/Services";

const RootIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  const style = {
    base: css`
      display: grid;
      grid-auto-flow: dense;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 30px;
      align-items: flex-start;
      margin: 0 auto;
      max-width: 1000px;
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
      {services(data).map((service) => (
        <React.Fragment key={service.id}>
          <Services service={service} />
        </React.Fragment>
      ))}
      {articles(data).map((article) => (
        <React.Fragment key={article.slug}>
          <SmallArticle article={article} />
          <LargeArticle article={article} />
          <BookmarkArticle article={article} />
        </React.Fragment>
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

    allContentfulService {
      nodes {
        ...ServiceFragment
      }
    }
  }
`;
