import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

export const authUser = createContext();

export const AuthProivder = ({ children }) => {
  const [token, setToken] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setToken(localStorage.getItem("token"));
      const res = jwtDecode(localStorage.getItem("token"));
      setRole(res.role);
    }
  }, []);
  return (
    <authUser.Provider value={{ token, setRole, setToken, role }}>
      {children}
    </authUser.Provider>
  );
};
