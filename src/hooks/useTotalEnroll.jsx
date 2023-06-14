import React from 'react';
import useProvider from './useProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTotalEnroll = () => {
  /* https://best-teaching-home-server-abukawsar45.vercel.app/totalPaidClass/648313e1573f3dbfa036a344?orderClassName=Moktob%20Every%20Morning */
   const { user, loading } = useProvider();
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: totalEnroll = [] } = useQuery({
     queryKey: ['totalEnroll', user?.email],
     enabled: !loading,
     queryFn: async () => {
       const response = await axiosSecure.get(
         `/totalPaidClass/${}`
       );
       console.log(response);
       return response.data;
     },
   });
   return [totalEnroll, refetch];
};

export default useTotalEnroll;