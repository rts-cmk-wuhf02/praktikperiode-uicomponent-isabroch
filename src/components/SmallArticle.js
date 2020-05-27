import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Title } from "./Title";
import { Card } from "./Card";
import Img from "gatsby-image";

export const SmallArticle = ({
  article: { title, images, category, description },
  colSpan = 4,
}) => {
  const style = {};

  return (
    <Card colSpan={colSpan}>
      <AspectRatio imgFit="cover" ratio={372 / 236}>
        <Img fluid={images[0].fluid} />
      </AspectRatio>
      text
    </Card>
  );
};
