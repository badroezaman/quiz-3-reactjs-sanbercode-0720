import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [menu, setMenu] = useState("logout");

  return (
    <AuthContext.Provider value={[menu, setMenu]}>
      {props.children}
    </AuthContext.Provider>
  );
};
