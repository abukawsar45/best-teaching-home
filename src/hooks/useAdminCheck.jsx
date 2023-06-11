
import useProvider from './useProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdminCheck = () => {
  const { user, loading } = useProvider();
  const [axiosSecure] = useAxiosSecure();
  const { data: allClassData, refetch } = useQuery({
    queryKey: ['manageClass', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/admin/allClass/${user?.email}`);
      // console.log(response.data);
      return response.data;
    },
  });
  return [allClassData, refetch];
};

export default useAdminCheck;