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
import {
  CalendarEvents,
  Costs,
  ProfileAvatar,
  ProfileData,
} from "utils/query-keys";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import {
  dashboardCreateExpenses,
  dashboardCreateRevenues,
  dashboardEditCost,
  dashboardGetCost,
} from "api/mainPage.service";
import {
  IMainPageCosts,
  IMainPageEditCost,
  IMainPageGetCost,
} from "modules/types/dashboard/mainPage.types";

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
        const errorMessage = response.response.data.errorCode;
        if (errorMessage === "MESSAGE_NOT_SENT")
          toast.error("Żądanie nie zostało wysłane.");
        else toast.error("Błąd nie został rozpoznany.");
      },
    }
  );
}

export function useCreateRevenuesMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IMainPageCosts>(
    (data) => {
      return dashboardCreateRevenues(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie dodano przychód");
        queryClient.refetchQueries(Costs);
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

export function useCreateExpensesMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IMainPageCosts>(
    (data) => {
      return dashboardCreateExpenses(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie dodano wydatek");
        queryClient.refetchQueries(Costs);
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

export function useGetCostMutation() {
  return useMutation<unknown, unknown, IMainPageGetCost>(
    (data) => {
      toast.loading("Ładowanie...");
      return dashboardGetCost(data);
    },
    {
      onSuccess: () => {
        toast.remove();
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

export function useEditCostMutation() {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, IMainPageEditCost>(
    (data) => {
      return dashboardEditCost(data);
    },
    {
      onSuccess: () => {
        toast.success("Pomyślnie zmodyfikowano wydatek");
        queryClient.refetchQueries(Costs);
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
