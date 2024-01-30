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
import {
  ApprovedAccountLink,
  ApprovedEmailLink,
  ApprovedResetPasswordLink,
  MainPageLink,
  SignUpInfoLink,
} from "links";
import toast from "react-hot-toast";

export function useLoginMutation() {
  const navigate = useNavigate();

  return useMutation<unknown, unknown, ILoginData>(
    (data) => {
      return authLogin(data);
    },
    {
      onSuccess: (response: any) => {
        localStorage.setItem("token", response.data.token);
        navigate(MainPageLink);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        switch (errorMessage) {
          case "USER_NOT_FOUND":
            toast.error("Użytkownik nie został znaleziony.");
            break;
          case "USER_NOT_ACTIVE":
            toast.error(
              "Email nie został potwierdzony. (Sprawdź swoją skrzynkę pocztową)"
            );
            break;
          case "USER_DELETED":
            toast.error("Użytkownik został już usunięty.");
            break;
          case "LOGIN_ERROR":
            toast.error("Niepoprawne dane logowania.");
            break;
          default:
            toast.error("Błąd nie został rozpoznany.");
            break;
        }
      },
    }
  );
}

export function useSignUpMutation() {
  const navigate = useNavigate();

  return useMutation<unknown, unknown, IRegistration>(
    (data) => {
      return authRegistration(data);
    },
    {
      onSuccess: () => {
        navigate(SignUpInfoLink);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "ACCOUNT_EXISTS")
          toast.error("Użytkownik już istnieje.");
        else if (errorMessage === "REGISTRATION_ERROR")
          toast.error("Błędna rejestracja.");
        else if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
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
      onSuccess: () => {
        navigate(ApprovedAccountLink);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "USER_NOT_FOUND")
          toast.error("Użytkownik nie został odnaleziony.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useResetPasswordMutation() {
  const navigate = useNavigate();

  return useMutation<unknown, unknown, IResetPassword>(
    (data) => {
      return authResetPassword(data);
    },
    {
      onSuccess: () => {
        navigate(ApprovedEmailLink);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "USER_NOT_FOUND")
          toast.error("Użytkownik nie został odnaleziony.");
        else toast.error("Błąd nie został rozpoznany.");
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
      onSuccess: () => {
        navigate(ApprovedResetPasswordLink);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "USER_NOT_FOUND")
          toast.error("Użytkownik nie został odnaleziony.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}
