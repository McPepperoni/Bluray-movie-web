import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
import logo from "../logo.svg";

export function HeaderContainer({
  bg,
  children,
  needSignIn = true,
  isFixed = false,
  ...restProps
}) {
  return (
    <Header bg={bg} {...restProps} isBlack={true}>
      <Header.Frame isFixed={isFixed}>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        {needSignIn ? (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        ) : null}
      </Header.Frame>
      {children}
    </Header>
  );
}
