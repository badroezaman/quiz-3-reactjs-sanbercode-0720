import React from "react";
import { AuthProvider } from "./AuthContext";
// import AuthList from "./AuthList";
import AuthForm from "./AuthForm";

const Auth = () => {
  return (
    <AuthProvider>
      {/* <AuthList /> */}
      <AuthForm />
    </AuthProvider>
  );
};

export default Auth;
