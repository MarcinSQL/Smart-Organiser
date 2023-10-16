import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  IConfirmAccount,
  IResetPassword,
  ILoginData,
  IRegistration,
  IResetPasswordConfirm,
} from "modules/types/authorization/authorization.types";
import {
  authConfirmAccount,
  authResetPassword,
  authLogin,
  authRegistration,
  authResetPasswordConfirm,
} from "api/auth.service";
import { useContext } from "react";
import AuthContext from "store/auth-context";
import {
  ApprovedAccountLink,
  ApprovedEmailLink,
  ApprovedResetPasswordLink,
  SignUpInfoLink,
} from "links";

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
        switch (errorMessage) {
          case "USER_NOT_FOUND":
            ctx.message = "Użytkownik nie został znaleziony.";
            break;
          case "USER_NOT_ACTIVE":
            ctx.message =
              "Email nie został potwierdzony. (Sprawdź swoją skrzynkę pocztową)";
            break;
          case "USER_DELETED":
            ctx.message = "Użytkownik został już usunięty.";
            break;
          case "LOGIN_ERROR":
            ctx.message = "Niepoprawne dane logowania.";
            break;
          default:
            ctx.message = "Błąd nie został rozpoznany.";
            break;
        }
      },
    }
  );
}

export function useSignUpMutation() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation<unknown, unknown, IRegistration>(
    (data) => {
      return authRegistration(data);
    },
    {
      onSuccess: (response: any) => {
        navigate(SignUpInfoLink);
      },
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "ACCOUNT_EXISTS")
          ctx.message = "Użytkownik już istnieje.";
        else if (errorMessage === "REGISTRATION_ERROR")
          ctx.message = "Błędna rejestracja.";
        else if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useConfirmAccountMutation() {
  const navigate = useNavigate();

  return useMutation<unknown, unknown, IConfirmAccount>(
    (data) => {
      return authConfirmAccount(data);
    },
    {
      onSuccess: (response: any) => {
        navigate(ApprovedAccountLink);
      },
      onError: (response: any) => {
        const ctx = useContext(AuthContext);
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "USER_NOT_FOUND")
          ctx.message = "Użytkownik nie został odnaleziony.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useResetPasswordMutation() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation<unknown, unknown, IResetPassword>(
    (data) => {
      return authResetPassword(data);
    },
    {
      onSuccess: (response: any) => {
        navigate(ApprovedEmailLink);
      },
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "USER_NOT_FOUND")
          ctx.message = "Użytkownik nie został odnaleziony.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useResetPasswordConfirmMutation() {
  const navigate = useNavigate();

  return useMutation<unknown, unknown, IResetPasswordConfirm>(
    (data) => {
      return authResetPasswordConfirm(data);
    },
    {
      onSuccess: (response: any) => {
        navigate(ApprovedResetPasswordLink);
      },
      onError: (response: any) => {
        const ctx = useContext(AuthContext);
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "USER_NOT_FOUND")
          ctx.message = "Użytkownik nie został odnaleziony.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}
