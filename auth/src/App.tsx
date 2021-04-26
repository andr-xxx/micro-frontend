import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Auth } from "./Auth";
import { LoginPage } from "./LoginPage";

export default function App<AppProps>() {
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={Auth} />
    </BrowserRouter>
  );
}
