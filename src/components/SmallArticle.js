import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Title } from "./Title";
import { Card } from "./Card";
import Img from "gatsby-image";

export const SmallArticle = ({
  article: { title, images, category, description },
}) => {
  const style = {};

  return (
    <Card maxWidth="370px" maxHeight="470px">
      <AspectRatio imgFit="cover" ratio={372 / 236}>
        <Img fluid={images[0].fluid} />
      </AspectRatio>
      text
    </Card>
  );
};
