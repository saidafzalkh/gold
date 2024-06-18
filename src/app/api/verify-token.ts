import { useQuery } from 'react-query';

import useToken from '../hooks/useToken';
import axiosInstance from './axiosInstance';

export const useVerifyToken = () => {
  const { removeToken } = useToken();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["token"],
    queryFn: async () => {
      return await axiosInstance.get("/check-auth");
    },
    refetchOnWindowFocus: false,

    onError: (error) => {
      removeToken();
      if (window) window.location.replace("/auth");
    },
  });

  return {
    res: data?.data,
    isLoading,
    isSuccess,
  };
};
