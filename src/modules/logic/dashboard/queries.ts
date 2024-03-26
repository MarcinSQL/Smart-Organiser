import { dashboardCalendarEvents } from "api/calendar.service";
import { dashboardCosts } from "api/budget.service";
import { dashboardUserAvatar, dashboardUserProfile } from "api/user.service";
import { useQuery } from "react-query";
import {
  CalendarEvents,
  Costs,
  ProfileAvatar,
  ProfileData,
} from "utils/query-keys";

export function useGetProfileDataQuery() {
  return useQuery(ProfileData, dashboardUserProfile);
}

export function useGetProfileAvatarQuery() {
  return useQuery(ProfileAvatar, dashboardUserAvatar);
}

export function useGetCalendarEventsQuery() {
  return useQuery(CalendarEvents, dashboardCalendarEvents);
}

export function useGetCostsQuery() {
  return useQuery(Costs, dashboardCosts);
}
