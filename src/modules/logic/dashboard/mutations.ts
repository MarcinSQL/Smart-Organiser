import {
  dashboardDeleteUserProfile,
  dashboardEditUserProfile,
} from "api/dashboard.service";
import {
  IDeleteUserProfile,
  IUserProfile,
} from "modules/types/dashboard/userProfile.types";
import { useContext } from "react";
import { useMutation } from "react-query";
import AuthContext from "store/auth-context";

export function useEditUserProfileMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IUserProfile>(
    (data) => {
      return dashboardEditUserProfile(data);
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
