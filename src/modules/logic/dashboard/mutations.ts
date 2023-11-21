import {
  dashboardDeleteUserProfile,
  dashboardEditAvatar,
  dashboardEditPassword,
  dashboardEditPersonalInformation,
} from "api/user.service";
import {
  IDeleteUserProfile,
  IEditAvatar,
  IEditPassword,
  IEditPersonalInformation,
} from "modules/types/dashboard/userProfile.types";
import { useContext } from "react";
import { useMutation } from "react-query";
import AuthContext from "store/auth-context";

export function useEditAvatarMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IEditAvatar>(
    (data) => {
      console.log(data);

      return dashboardEditAvatar(data);
    },
    {
      onSuccess: (response: any) => {},
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useEditPersonalInformationMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IEditPersonalInformation>(
    (data) => {
      return dashboardEditPersonalInformation(data);
    },
    {
      onSuccess: (response: any) => {},
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useEditPasswordMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IEditPassword>(
    (data) => {
      return dashboardEditPassword(data);
    },
    {
      onSuccess: (response: any) => {},
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useDeleteUserProfileMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IDeleteUserProfile>(
    (data) => {
      return dashboardDeleteUserProfile(data);
    },
    {
      onSuccess: (response: any) => {},
      onError: (response: any) => {
        ctx.isError = response.response.data.isError;
        const errorMessage = response.response.data.errorMessage;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}
