import { useQuery } from 'react-query';

import axiosInstance from './axiosInstance';

export const useVerifyToken = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["token"],
    queryFn: async () => {
      return await axiosInstance.get("/check-auth");
    },
    refetchOnWindowFocus: false,
  });

  return {
    res: data?.data,
    isLoading,
    isSuccess,
  };
};
