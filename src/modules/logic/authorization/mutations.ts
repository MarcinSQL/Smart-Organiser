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
        const errorMessage = response.response.data.errorMessage;
        if(errorMessage === "USER_NOT_FOUND") ctx.message = "Użytkownik nie został znaleziony.";
        if(errorMessage === "USER_NOT_ACTIVE") ctx.message = "Email nie został potwierdzony.";
        if(errorMessage === "USER_DELETED") ctx.message = "Użytkownik został już usunięty.";
        if(errorMessage === "LOGIN_ERROR") ctx.message = "Niepoprawne dane logowania.";
        ctx.isError = response.response.data.isError;      
      },
    }
  );
}
