import React, {createContext, useState, useContext} from 'react';
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({children, ...restProp}) {
  return (
    <Container {...restProp}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({children, ...restProp}) {
  return <Title {...restProp}>{children}</Title>;
};

Accordion.Item = function AccordionItem({children, ...restProp}) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProp}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({children, ...restProp}) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProp}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({children, ...restProp}) {
  const {toggleShow} = useContext(ToggleContext);

  return toggleShow ? <Body {...restProp}>{children}</Body> : null;
};
