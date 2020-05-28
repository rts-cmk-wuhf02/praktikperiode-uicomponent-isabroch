import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Subtitle, Title, Blurb } from "./Text";
import { Card } from "./Card";
import Img from "gatsby-image";

export const SmallArticle = ({
  article: { title, images, category, description },
  colSpan = 4,
}) => {
  const style = {
    content: css`
      padding: 30px 42px 38px 38px;
    `,
  };

  return (
    <Card colSpan={colSpan} vAlign="stretch">
      <AspectRatio imgFit="cover" ratio={372 / 236}>
        <Img fluid={images[0].fluid} />
      </AspectRatio>
      <article css={style.content}>
        <Subtitle color={category.color} align="left">
          {category.name}
        </Subtitle>
        <Title size="m" padding>
          <h1>{title}</h1>
        </Title>
        <Blurb lines={4} color="#7B8591">
          {description}
        </Blurb>
      </article>
    </Card>
  );
};
