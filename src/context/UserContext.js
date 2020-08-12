// import React, { useState, createContext } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = (props) => {
//   const [menu, setMenu] = useState("logout");

//   return (
//     <AuthContext.Provider value={[menu, setMenu]}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const iniateUser = currentUser ? currentUser : null;
  const [user, setUser] = useState(iniateUser);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
