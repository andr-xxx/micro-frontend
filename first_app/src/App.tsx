import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Root } from "./root.component";

export default function App(props) {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={(routerProps) => <Root {...props} {...routerProps} />}
      />
    </BrowserRouter>
  );
}
