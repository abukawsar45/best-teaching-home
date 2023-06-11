// http://localhost:5000/orderClass?email=amar@mail.com&orderClassName=Saom%20Japon%20Course

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useProvider from "./useProvider";

const useClassBooking = () => {
const { user, loading } = useProvider();
const [axiosSecure] = useAxiosSecure();
const { refetch, data: classes = [] } = useQuery({
  queryKey: ['classBookingCheck', user?.email],
  enabled: !loading,
  queryFn: async () => {
    const response = await axiosSecure.get(
      `orderClass?email=${user?.email}&orderClassName=${}`
    );
    console.log(response);
    return response.data;
  },
});
return [classes, refetch];
};

export default useClassBooking;