import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, ButtonLink, Container, Logo } from "./styles/header";

export default function Header({ bg = true, children, ...restProp }) {
  return bg ? <Background {...restProp}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProp }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProp} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProp }) {
  return <ButtonLink {...restProp}>{children}</ButtonLink>;
};
