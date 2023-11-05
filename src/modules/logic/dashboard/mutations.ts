import { dashboardEditUserProfile } from "api/dashboard.service";
import { IUserProfile } from "modules/types/dashboard/userProfile.types";
import { useMutation } from "react-query";

export function useEditUserProfileMutation() {
  return useMutation<unknown, unknown, IUserProfile>(
    (data) => {
      return dashboardEditUserProfile(data);
    },
    {
      onSuccess: (response: any) => {},
      onError: (response: any) => {},
    }
  );
}
