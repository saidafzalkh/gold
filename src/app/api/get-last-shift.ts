import { useQuery } from "react-query";

import axiosInstance from "./axiosInstance";

export const useGetLastShift = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["shift"],
    queryFn: async () => {
      return await axiosInstance.get("/reports/last");
    },
    refetchOnWindowFocus: false,
    cacheTime: 0,
    refetchOnMount: true
  });

  return { shift: data?.data.data, isLoading, isSuccess };
};
