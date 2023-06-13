import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useProvider from "./useProvider";


const useAdminForUsers = () => {
  const { user, loading } = useProvider();
  const [axiosSecure] = useAxiosSecure();
  const { data: allUsersData, refetch } = useQuery({
    queryKey: ['manageAllUser', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/admin/allUser/${user?.email}`);
      console.log('1444', response.data);
      return response.data;
    },
  });
  return [allUsersData, refetch];
};

export default useAdminForUsers;