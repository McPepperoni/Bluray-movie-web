/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //check valid
  // const validateEmail = () => /\S+@\S+\.\S+/.test(emailAddress);
  // const validatePassword = () =>
  //   String(password)
  //     .toLowerCase()
  //     .match(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //     );

  // const isInvalid = !validateEmail || !validatePassword;
  const isInvalid = password === "" || emailAddress === "";

  //console.log(isInvalid);

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.InputContainer>
              <Form.Input
                placeholder="Email address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <span>Email address</span>
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Input
                type="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <span>Password</span>
            </Form.InputContainer>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
