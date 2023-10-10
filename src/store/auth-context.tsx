import { IAuthContext } from "modules/types/authorization/authorization.types";
import React from "react";

const AuthContext = React.createContext({
  message: "",
  isError: false,
});

export function AuthContextProvider(props: IAuthContext) {
  return (
    <AuthContext.Provider
      value={{
        message: "",
        isError: false,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
