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
        ctx.message = response.response.data.errorMessage;
        ctx.isError = response.response.data.isError;
        ctx.status = response.response.data.errorCode;        
      },
    }
  );
}
