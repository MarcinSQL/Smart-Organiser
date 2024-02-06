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
import { useMutation, useQueryClient } from "react-query";
import { CalendarEvents, ProfileAvatar, ProfileData } from "utils/query-keys";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";

export function useEditAvatarMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IEditAvatar>(
    (data) => {
      return dashboardEditAvatar(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie zmodyfikowano awatar");
        queryClient.refetchQueries(ProfileAvatar);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useEditPersonalInformationMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IEditPersonalInformation>(
    (data) => {
      return dashboardEditPersonalInformation(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie zmodyfikowano personalia");
        queryClient.refetchQueries(ProfileData);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useEditPasswordMutation() {
  return useMutation<unknown, unknown, IEditPassword>(
    (data) => {
      return dashboardEditPassword(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie zmodyfikowano hasło");
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useCreateEventMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IModalEventsForm>(
    (data) => {
      return dashboardCreateCalendarEvent(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie dodano wydarzenie");
        queryClient.refetchQueries(CalendarEvents);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useEditEventMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IModalEditEventForm>(
    (data) => {
      return dashboardEditCalendarEvent(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie zmodyfikowano wydarzenie");
        queryClient.refetchQueries(CalendarEvents);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useDeleteEventMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IDeleteEvent>(
    (data) => {
      return dashboardDeleteCalendarEvent(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie usunięto wydarzenie");
        queryClient.refetchQueries(CalendarEvents);
      },
      onError: (response: any) => {
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useDeleteUserProfileMutation() {
  const navigate = useNavigate();
  return useMutation<unknown, unknown, IDeleteUserProfile>(
    (data) => {
      return dashboardDeleteUserProfile(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie usunięto konto użytkownika");
        navigate(SignInLink);
      },
      onError: (response: any) => {
        console.log(response);

        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}
