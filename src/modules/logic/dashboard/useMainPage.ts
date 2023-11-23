import useGetProfileDataQuery from "./queries";

export default function useMainPage() {
  const { data, isLoading } = useGetProfileDataQuery();
  return { data, isLoading };
}
