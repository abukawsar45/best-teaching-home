import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useProvider from './useProvider';

const useStudent = () => {
  const { user, loading } = useProvider();
  ///console.log(user)
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ['isStudent', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/Student/${user?.email}`);
      ///console.log('1999', response.data)
      return response.data.student;
    },
  });
  ///console.log(isStudent)
  return [isStudent, isStudentLoading];
};

export default useStudent;
