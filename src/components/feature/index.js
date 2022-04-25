import React from "react";
import { Container, Title, Subtitle } from "./styles/feature";

export default function Feature({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restProp }) {
  return <Title {...restProp}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...restProp }) {
  return <Subtitle {...restProp}>{children}</Subtitle>;
};
