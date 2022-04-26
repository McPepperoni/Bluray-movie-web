import React from "react";
import faqsData from "../fixtures/faq";
import { Accordion } from "../components";
import { OptFormContainer } from "./opt-form";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header id={item.id}>{item.header}</Accordion.Header>
          <Accordion.Body id={item.id}>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />
      <OptFormContainer />
    </Accordion>
  );
}
