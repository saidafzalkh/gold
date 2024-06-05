import { useQuery } from "react-query";
import axiosInstance from "./axiosInstance";

export const useGetReports = () => {
  const {data, isLoading} = useQuery({ queryKey: ["reports"], queryFn: async () => {
    return await axiosInstance.get('/reports')
  }, refetchOnWindowFocus: false });

  return {reports: data?.data.data, isLoading}
};
