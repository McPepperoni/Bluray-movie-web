/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from "react";
import {
  Container,
  Group,
  Item,
  Meta,
  Subtitle,
  Text,
  Title,
  Entity,
  Image,
  Button,
  Info,
  Maturity,
  Content,
  MatchRate,
  ToolTip,
  ToolTipText,
} from "./styles/card";

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entity = function CardEntity({ children, ...restProps }) {
  return <Entity {...restProps}>{children}</Entity>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Info = function CardInfo({ item, children, ...restProps }) {
  //console.log(item);
  return (
    <Info {...restProps}>
      {children}
      <Content>
        <Group flexDirection="row">
          <Button isBlack={false}>
            <img src="/images/icons/play.svg" />
          </Button>

          <Button isBlack={true}>
            <ToolTip>
              <ToolTipText>Add to My List</ToolTipText>
              <img src="/images/misc/rhombus.png" />
            </ToolTip>
            <img src="/images/icons/add.svg" />
          </Button>

          <Button isBlack={true}>
            <img src="/images/misc/like.svg" />
          </Button>
          <Button isBlack={true}>
            <ToolTip>
              <ToolTipText>Remove from row</ToolTipText>
              <img src="/images/misc/rhombus.png" />
            </ToolTip>
            <img src="/images/misc/x.svg" />
          </Button>
        </Group>
        <Group>
          <Button isBlack={true}>
            <ToolTip>
              <ToolTipText>Episodes and info</ToolTipText>
              <img src="/images/misc/rhombus.png" />
            </ToolTip>
            <img src="/images/misc/check.svg" />
          </Button>
        </Group>
      </Content>
      <Content>
        <Group flexDirection="row">
          <MatchRate>98% Match</MatchRate>
          <Maturity rating={item.maturity}>
            {item.maturity < 12 ? "PG" : item.maturity}+
          </Maturity>
        </Group>
      </Content>
      <Content>
        <Group flexDirection="row">
          <Card.SubTitle>{item.genre}</Card.SubTitle>
          &bull;
          <Card.SubTitle>{item.genre}</Card.SubTitle>
        </Group>
      </Content>
    </Info>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
