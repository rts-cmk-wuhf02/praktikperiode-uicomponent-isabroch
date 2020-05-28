import React from "react";
import AspectRatio from "./AspectRatio";
import { Card } from "./Card";
import { css } from "@emotion/core";
import { Blurb, Subtitle } from "./Text";

export const Services = ({ service }) => {
  const style = {
    content: css`
      padding: 28px 22px;
      color: white;
      display: flex;
      height: 100%;
      box-sizing: border-box;
      flex-direction: column;
    `,
    icon: css`
      align-self: flex-end;
      margin-bottom: auto;
      flex: 0 0 4vmax;
    `,
    title: css`
      margin: 0.5em 0;
    `,
  };

  return (
    <Card colSpan={3} background={service.color}>
      <AspectRatio>
        <article css={style.content}>
          <img src={service.icon} alt="" css={style.icon} />
          <Subtitle
            color="inherit"
            background="transparent"
            size="18px"
            spacing={50}
            align="left"
            css={style.title}
          >
            <h1>{service.name}</h1>
          </Subtitle>
          <Blurb>{service.description}</Blurb>
        </article>
      </AspectRatio>
    </Card>
  );
};
