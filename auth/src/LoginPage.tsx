import React, { useState } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";
// @ts-ignore
import { getToken, login } from "@test/utils";

export const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const token = getToken();

  if (token) {
    history.push("/first");
  }

  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const submitForm = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    const {
      data: { success, token },
    } = await axios.post<{ success: boolean; token: string }>(
      "http://localhost:3050/login",
      formValues
    );

    if (success) {
      login();
      history.push("/first");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    name
  ): void => {
    setFormValues({ ...formValues, [name]: event.currentTarget.value });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="email"
          value={formValues.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={formValues.password}
          onChange={(e) => handleChange(e, "password")}
        />

        <button>submit</button>
      </form>
    </div>
  );
};
