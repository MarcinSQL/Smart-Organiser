import React from "react";

const AuthContext = React.createContext({
  message: "",
  isError: false,
});

export default AuthContext;
