
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useProvider from './useProvider';

const useClass = () => {
   const { user, loading } = useProvider();
   const [axiosSecure] = useAxiosSecure();
   const {refetch, data: classes =[]  } = useQuery({
     queryKey: ['isClass', user?.email],
     enabled: !loading,
     queryFn: async () => {
       const response = await axiosSecure.get(
         `/instru
         
         
         ctor/class/${user?.email}`
       );
       console.log(response);
       return response.data;
     },
   });
   return [classes,refetch];
};

export default useClass;