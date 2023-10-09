import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ILoginData } from "modules/types/authorization/authorization.types";
import { authLogin } from "api/auth.service";

export function useLoginMutation() {
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
        console.log(response);
      },
    }
  );
}
