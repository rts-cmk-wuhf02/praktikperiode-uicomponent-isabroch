import React from "react";
import AspectRatio from "./AspectRatio";
import { css } from "@emotion/core";
import { Subtitle, Title, Blurb } from "./Text";
import { Card } from "./Card";
import Img from "gatsby-image";

const ExtraImages = ({ images }) => {
  const imageElements = [];
  // Get MAX 3 pictures
  for (let i = 1; i < images.length || i <= 3; i++) {
    if (images[i]) {
      const element = (
        <AspectRatio imgFit="cover" ratio={1 / 1} key={images[i].id} rounded>
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
  const style = {
    wrapper: css`
      display: grid;
      padding: 44px 48px 52px;
      grid-template-columns: 5fr 7fr;
      grid-gap: 20px;
      height: 100%;
      box-sizing: border-box;
    `,
    mainImage: css`
      border-radius: 10px;
      height: 100%;
    `,
    content: css`
      display: flex;
      flex-direction: column;
    `,
    extraImages: css`
      margin-top: auto;
      padding-top: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    `,
  };

  return (
    <Card colSpan={colSpan} vAlign="stretch">
      <article css={style.wrapper}>
        <Img fluid={images[0].fluid} css={style.mainImage} />

        <div css={style.content}>
          <Subtitle
            padding
            background={category.color}
            color={"#ffffff"}
            css={css`
              align-self: flex-end;
            `}
          >
            {category.name}
          </Subtitle>
          <Title
            size="l"
            css={css`
              padding: 1rem 0;
            `}
          >
            {title}
          </Title>
          <Blurb lines={4} color="#7B8591">
            {description}
          </Blurb>
          <div css={style.extraImages}>
            <ExtraImages
              images={images}
              css={css`
                margin-top: auto;
              `}
            />
          </div>
        </div>
      </article>
    </Card>
  );
};
