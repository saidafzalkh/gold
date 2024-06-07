import { useQuery } from 'react-query';

import axiosInstance from './axiosInstance';

export const useGetReport = (id: string) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["reports", id],
    queryFn: async () => {
      return await axiosInstance.get(`/reports/${id}`);
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  return { data: data?.data.data, isLoading, isSuccess };
};
