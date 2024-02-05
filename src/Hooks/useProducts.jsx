import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProducts = (params) => {
  const { axiosSecure } = useAxiosSecure();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/${params}`);
      return res.data;
    },
  });
  return { products, refetch };
};

export default useProducts;
