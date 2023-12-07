import { dashboardUserAvatar, dashboardUserProfile } from "api/user.service";
import { useQuery } from "react-query";
import { ProfileAvatar, ProfileData } from "utils/query-keys";

export function useGetProfileDataQuery() {
  return useQuery(ProfileData, dashboardUserProfile);
}

export function useGetProfileAvatarQuery() {
  return useQuery(ProfileAvatar, dashboardUserAvatar);
}
