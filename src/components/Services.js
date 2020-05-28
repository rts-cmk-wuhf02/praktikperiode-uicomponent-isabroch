import React from "react";
import AspectRatio from "./AspectRatio";
import { Card } from "./Card";

export const Services = ({ service }) => {
  console.log(service);
  return (
    <Card colSpan={3} background={service.color}>
      <AspectRatio></AspectRatio>
    </Card>
  );
};
