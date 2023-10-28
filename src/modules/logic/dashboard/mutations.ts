import { dashboardUserProfile } from "api/dashboard.service";
import { IUserProfile } from "modules/types/dashboard/userProfile.types";
import { useContext } from "react";
import { useMutation } from "react-query";
import UserContext from "store/user-context";

export function useUserProfileMutation() {
  const ctx = useContext(UserContext);

  return useMutation<unknown, unknown, IUserProfile>(
    (data) => {
      return dashboardUserProfile(data);
    },
    {
      onSuccess: (response: any) => {
        ctx.img = response.img;
        ctx.name = response.name;
      },
      onError: (response: any) => {},
    }
  );
}
