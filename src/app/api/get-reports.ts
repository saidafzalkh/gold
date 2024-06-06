import { useQuery } from "react-query";
import axiosInstance from "./axiosInstance";

export const useGetReports = (params?: any) => {
  const { data, isLoading, isSuccess, refetch } = useQuery({
    queryKey: ["reports", params],
    queryFn: async () => {
      return await axiosInstance.get("/reports", { params });
    },
    refetchOnWindowFocus: false,
  });

  return { reports: data?.data.data, isLoading, isSuccess, refetch };
};
