import React from "react";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
import logo from "../logo.svg";

export function HeaderContainer({ children, needSignIn = true }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        {needSignIn ? (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        ) : null}
      </Header.Frame>
      {children}
    </Header>
  );
}
