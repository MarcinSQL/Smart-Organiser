import { dashboardUserProfile } from "api/user.service";
import { useQuery } from "react-query";
import { ProfileData } from "utils/query-keys";

export default function useGetProfileDataQuery(){
    return useQuery(ProfileData, dashboardUserProfile);
}