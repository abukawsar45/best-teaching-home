import { useQuery } from '@tanstack/react-query';
import useProvider from './useProvider';

const useCart = () => {
  const { user } = useProvider();
  const { isLoading, data } = useQuery({
    queryKey: ['students', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://best-teaching-home-server-abukawsar45.vercel.app/categorys?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [];
};

export default useCart;
