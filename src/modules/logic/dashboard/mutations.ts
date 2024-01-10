import {
  dashboardCreateCalendarEvent,
  dashboardDeleteCalendarEvent,
  dashboardEditCalendarEvent,
} from "api/calendar.service";
import {
  dashboardDeleteUserProfile,
  dashboardEditAvatar,
  dashboardEditPassword,
  dashboardEditPersonalInformation,
} from "api/user.service";
import {
  IDeleteEvent,
  IModalEditEventForm,
  IModalEventsForm,
} from "modules/types/dashboard/calendar.types";
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
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
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
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
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
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useCreateEventMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IModalEventsForm>(
    (data) => {
      return dashboardCreateCalendarEvent(data);
    },
    {
      onSuccess: () => {
        window.location.reload();
      },
      onError: (response: any) => {
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useEditEventMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IModalEditEventForm>(
    (data) => {
      return dashboardEditCalendarEvent(data);
    },
    {
      onSuccess: () => {
        window.location.reload();
      },
      onError: (response: any) => {
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}

export function useDeleteEventMutation() {
  const ctx = useContext(AuthContext);
  return useMutation<unknown, unknown, IDeleteEvent>(
    (data) => {
      return dashboardDeleteCalendarEvent(data);
    },
    {
      onSuccess: () => {
        window.location.reload();
      },
      onError: (response: any) => {
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
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
        ctx.isError = true;
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          ctx.message = "Żądanie nie zostało wysłane.";
        else ctx.message = "Błąd nie został rozpoznany.";
      },
    }
  );
}
