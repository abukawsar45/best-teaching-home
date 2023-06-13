
import useProvider from './useProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaidClass = () => {
const { user, loading } = useProvider();
const [axiosSecure] = useAxiosSecure();
const { refetch, data: paidClasses = [] } = useQuery({
  queryKey: ['paidClass', user?.email],
  enabled: !loading,
  queryFn: async () => {
    const response = await axiosSecure.get(`/paidClass/${user?.email}`);
    console.log(response);
    return response.data;
  },
});
return [paidClasses, refetch];
};

export default usePaidClass;