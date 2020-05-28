import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Subtitle, Title, Blurb } from "./Text";
import { Card } from "./Card";
import Img from "gatsby-image";

const ExtraImages = ({ images }) => {
  const imageElements = [];
  for (let i = 1; i < images.length; i++) {
    if (images[i]) {
      const element = (
        <AspectRatio imgFit="cover" ratio={1 / 1} rounded>
          <Img fluid={images[i].fluid} />
        </AspectRatio>
      );
      imageElements.push(element);
    }
  }

  if (imageElements.length === 0) {
    return null;
  }
  return imageElements;
};

export const LargeArticle = ({
  article: { title, images, category, description },
  colSpan = 8,
}) => {
  return (
    <Card colSpan={colSpan}>
      <AspectRatio imgFit="cover" ratio={293 / 375} rounded>
        <Img fluid={images[0].fluid} />
      </AspectRatio>

      <ExtraImages images={images} />
    </Card>
  );
};
