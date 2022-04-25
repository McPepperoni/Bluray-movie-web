import React, { createContext, useState, useContext } from "react";
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProp }) {
  const [toggleShow, setToggleShow] = useState(0);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Container {...restProp}>
        <Inner>{children}</Inner>
      </Container>
    </ToggleContext.Provider>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProp }) {
  return <Title {...restProp}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProp }) {
  return <Item {...restProp}>{children}</Item>;
};

Accordion.Header = function AccordionHeader({ id, children, ...restProp }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    // eslint-disable-next-line no-unused-vars
    <Header
      onClick={
        toggleShow === id
          ? // eslint-disable-next-line no-unused-vars
            () => setToggleShow((toggleShow) => 0)
          : // eslint-disable-next-line no-unused-vars
            () => setToggleShow((toggleShow) => id)
      }
      {...restProp}
    >
      {children}
      {toggleShow === id ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ id, children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  //return toggleShow === id ? <Body {...restProps}>{children}</Body> : null;
  return (
    <Body className={toggleShow === id ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
