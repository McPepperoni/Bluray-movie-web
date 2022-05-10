import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styled";
// eslint-disable-next-line no-unused-vars
import { firebase } from "./lib/firebase.pod";
import { FirebaseContext } from "./context/firebase";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
