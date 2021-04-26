import React from "react";
import { RouteComponentProps } from "react-router-dom";
// @ts-ignore
import { getToken } from "@test/utils";

export const Auth: React.FC<RouteComponentProps> = ({ history, location }) => {
  const token = getToken();
  if (!token && location.pathname !== "/login") {
    history.push("/login");
  }

  return null;
};
