// https://best-teaching-home-server-abukawsar45.vercel.app/users/instructor/zakaria@gmail.com

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useProvider from './useProvider';

const useInstructor = () => {
  const { user, loading } = useProvider();
  ///console.log(user);
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/users/instructor/${user?.email}`
      );
      ///console.log('1999', response.data);
      return response.data.instructor;
    },
  });
  // ///console.log(isInstructor)
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
