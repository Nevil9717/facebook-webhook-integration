import React from "react";
import { loginWithFacebook } from "../lib/auth";

const LoginButton = () => {
  return (
    <button onClick={loginWithFacebook} className="outline">
      SignUp with Facebook
    </button>
  );
};

export default LoginButton;
