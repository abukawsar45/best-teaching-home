import React from 'react';

const useRoleSet = () => {
  const { user, loading } = useProvider();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ['classBookingCheck', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/selectedClass/${user?.email}`);
      ///console.log(response);
      return response.data;
    },
  });
  return [updateRoleData, refetch];
};

export default useRoleSet;
