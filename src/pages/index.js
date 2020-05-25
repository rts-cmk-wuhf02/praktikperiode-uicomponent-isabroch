import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";

const RootIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <div
      css={css`
        font-weight: bold;
      `}
    >
      <Helmet title={siteTitle} />
      Text
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
