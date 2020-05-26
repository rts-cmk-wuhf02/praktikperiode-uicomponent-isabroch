import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import "../components/reset.css";
import { css } from "@emotion/core";
import AspectRatio from "../components/AspectRatio";

const RootIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <div
      css={css`
        font-weight: bold;
      `}
    >
      <Helmet title={siteTitle} />
      <AspectRatio
        width={16}
        height={9}
        background="yellow"
        rounded
        imgFit="cover"
      >
        <img src="http://placehold.it/1000" alt="" />
      </AspectRatio>
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
