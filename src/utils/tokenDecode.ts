import { jwtDecode } from "jwt-decode";

class TokenDecode {
  getRole(token: string) {
    const user: any = jwtDecode(token);
    const role =
      user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    return role;
  }

  getUserId(token: string) {
    const user: any = jwtDecode(token);
    const userId =
      user[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
      ];

    return userId;
  }

  getAccountId(token: string) {
    const user: any = jwtDecode(token);
    const accountId =
      user[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid"
      ];
    return accountId;
  }

  getUsername(token: string) {
    const user: any = jwtDecode(token);
    const username =
      user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    return username;
  }

  getNameAndSurname(token: string) {
    const user: any = jwtDecode(token);
    const name =
      user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    const surname =
      user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];
    return name + " " + surname;
  }
}

export default new TokenDecode();
