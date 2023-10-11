import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ILoginData } from "modules/types/authorization/authorization.types";
import { authLogin } from "api/auth.service";
import { useContext } from "react";
import AuthContext from "store/auth-context";

export function useLoginMutation() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation<unknown, unknown, ILoginData>(
    (data) => {
      return authLogin(data);
    },
    {
      onSuccess: (response: any) => {
        //localhost/panel
      },
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;   
        const errorMessage = response.response.data.errorMessage;
        switch(errorMessage){
          case "USER_NOT_FOUND":
            ctx.message = "Użytkownik nie został znaleziony.";
            break;
          case "USER_NOT_ACTIVE":
            ctx.message = "Email nie został potwierdzony.";
            break;
          case "USER_DELETED":
            ctx.message = "Użytkownik został już usunięty.";
            break;
          case "LOGIN_ERROR":
            ctx.message = "Niepoprawne dane logowania.";
            break;
          default:
            ctx.message = "Błąd nie został rozpoznany";
            break;
        }   
      },
    }
  );
}
