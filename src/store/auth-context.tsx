import React from "react";

const AuthContext = React.createContext({
  message: "",
  status: "",
  isError: false,
});

export default AuthContext;
