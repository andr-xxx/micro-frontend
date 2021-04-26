import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <>
            <section>{props.name} is mounted!</section>
            <a href="/">Go to first app.</a>
          </>
        )}
      />
    </BrowserRouter>
  );
}
