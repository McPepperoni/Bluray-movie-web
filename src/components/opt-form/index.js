import React from "react";
import {
  Break,
  Container,
  Input,
  Button,
  Text,
  InputContainer,
} from "./styles/opt-form";

export default function OptForm({ children, ...restProp }) {
  return <Container {...restProp}>{children}</Container>;
}

OptForm.InputContainer = function OptFormInputContainer({
  children,
  ...restProp
}) {
  return <InputContainer {...restProp}>{children}</InputContainer>;
};

OptForm.Input = function OptFormInput({ placeholder, ...restProp }) {
  return (
    <>
      <Input placeholder={placeholder} {...restProp} />
      <span>{placeholder}</span>
    </>
  );
};

OptForm.Button = function OptFormButton({ children, ...restProp }) {
  return (
    <Button {...restProp}>
      {children} <img src="/images/icons/chevron-right.png" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProp }) {
  return <Text {...restProp}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProp }) {
  return <Break {...restProp} />;
};
