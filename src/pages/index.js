import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";
import AspectRatio from "../components/AspectRatio";
import BookmarkArticle from "../components/BookmarkArticle";

const articles = (data) => {
  return data.allContentfulArticle.nodes.map((article) => {
    const images = article.images.map((image) => ({ src: image.file.url }));

    return {
      title: article.title,
      category: { name: article.category.name, color: article.category.color },
      images: images,
      description: article.description.description,
    };
  });
};

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
        title
        description {
          description
        }
        images {
          fluid(maxWidth: 2000) {
            ...GatsbyContentfulFluid_tracedSVG
          }
          file {
            url
          }
        }
        category {
          color
          name
        }
      }
    }
  }
`;
