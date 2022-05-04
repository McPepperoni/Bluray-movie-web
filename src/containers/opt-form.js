import React from "react";
import { OptForm } from "../components";

export function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm.Break />
      <OptForm.InputContainer>
        <OptForm.Input placeholder="Email address" />
      </OptForm.InputContainer>
      <OptForm.Button>Get started</OptForm.Button>
    </OptForm>
  );
}
