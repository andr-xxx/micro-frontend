import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
// @ts-ignore
import { logout } from "@test/utils";

interface RootProps {
  name: string;
}

export const Root: React.FC<RootProps & RouteComponentProps> = ({
  name,
  history,
}) => {
  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <>
      <section>{name} is mounted!!!</section>
      <Link to="/second">Go to second app!</Link>
      <br />
      <Link to="/login">Go to login page without logout</Link>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <div>hello world</div>
    </>
  );
};
