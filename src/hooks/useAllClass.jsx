import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useProvider from "./useProvider";


const useAllClass = () => {
  const { user, loading } = useProvider();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: allClassdata = [] } = useQuery({
    queryKey: ['allClassData', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get('/allClass');
      console.log(response);
      return response.data;
    },
  });
  return [allClassdata, refetch];
};

export default useAllClass;