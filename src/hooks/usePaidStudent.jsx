// https://best-teaching-home-server-abukawsar45.vercel.app/totalstudents/zakaria@gmail.com?status=paid

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useProvider from './useProvider';

const usePaidStudent = () => {
  const { user, loading } = useProvider();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: paidStudents = [] } = useQuery({
    queryKey: ['paidStudents', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/totalstudents/${user?.email}?status=paid`
      );
      console.log(response);
      return response.data;
    },
  });
  return [paidStudents, refetch];
};

export default usePaidStudent;
