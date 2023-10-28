import React from "react";

const UserProfileContext = React.createContext({
  name: "",
  surname: false,
  password: "",
  img: ""
});

export default UserProfileContext;
