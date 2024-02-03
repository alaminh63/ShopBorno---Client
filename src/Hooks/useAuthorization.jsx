import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAuthorization = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: role, isLoading } = useQuery({
    queryKey: ["authorization", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/authorization?email=${user?.email}`);
      return res.data.role;
    },
  });
  return { role, isLoading };
};

export default useAuthorization;
