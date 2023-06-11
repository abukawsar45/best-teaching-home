import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useProvider from "./useProvider";


const useMySelectedClass = () => {
const { user, loading } = useProvider();
const [axiosSecure] = useAxiosSecure();
const { refetch, data: selectedClass = [] } = useQuery({
  queryKey: ['classBookingCheck', user?.email],
  enabled: !loading,
  queryFn: async () => {
    const response = await axiosSecure.get(
      `selectedClass/${user?.email}`
    );
    console.log(response);
    return response.data;
  },
});
return [selectedClass, refetch];
};


export default useMySelectedClass;