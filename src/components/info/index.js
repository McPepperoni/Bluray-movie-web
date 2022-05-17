import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Background,
  Group,
  CloseButton,
  Content,
  Column,
  Row,
  DetailTitle,
  DetailContent,
  Meta,
  MatchRate,
  Year,
  Maturity,
  Resolution,
  Duration,
} from "./styles/info";

export default function Info({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Info.Content = function InfoContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Info.Group = function InfoGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Info.Meta = function InfoMeta({ meta, children, ...restProps }) {
  return meta ? (
    <Meta {...restProps}>
      <MatchRate>{meta.matchRate}% Match</MatchRate>
      <Year>{meta.year}</Year>
      <Maturity>{meta.maturity}</Maturity>
      <Duration>{meta.length}</Duration>
      <Resolution>{meta.resolution}</Resolution>
      {children}
    </Meta>
  ) : (
    <Meta {...restProps}>
      <MatchRate>93% Match</MatchRate>
      <Year>2020</Year>
      <Maturity>18+</Maturity>
      <Duration>2h 1m</Duration>
      <Resolution>HD</Resolution>
      {children}
    </Meta>
  );
};

Info.Background = function InfoBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Info.Title = function InfoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Info.Subtitle = function InfoSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Info.Row = function InfoRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Info.Column = function InfoColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Info.DetailTitle = function InfoDetailTitle({ children, ...restProps }) {
  return <DetailTitle {...restProps}>{children}</DetailTitle>;
};

Info.DetailContent = function InfoDetailContent({ children, ...restProps }) {
  return <DetailContent {...restProps}>{children}</DetailContent>;
};

Info.CloseButton = function InfoCloseButton({ children, ...restProps }) {
  return (
    <CloseButton {...restProps}>
      <img src="/images/misc/x.svg" />
      {children}
    </CloseButton>
  );
};
