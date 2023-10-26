import { dashboardUserProfile } from "api/dashboard.service";
import { IUserProfile } from "modules/types/dashboard/userProfile.types";
import { useMutation } from "react-query";

export function useUserProfileMutation() {
  
    return useMutation<unknown, unknown, IUserProfile>(
      (data) => {
        return dashboardUserProfile(data);
      },
      {
        onSuccess: (response: any) => {

        },
        onError: (response: any) => {
          
        },
      }
    );
  }