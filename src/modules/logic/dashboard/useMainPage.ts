import { useGetProfileAvatarQuery, useGetProfileDataQuery } from "./queries";

export default function useMainPage() {
  const { data, isLoading, isError } = useGetProfileDataQuery();
  const {
    data: avatar,
    isLoading: avatarIsLoading,
    isError: avatarIsError,
  } = useGetProfileAvatarQuery();

  return {
    data,
    isLoading,
    isError,
    avatar,
    avatarIsLoading,
    avatarIsError,
  };
}
