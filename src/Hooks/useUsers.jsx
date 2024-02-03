import { useContext } from "react";
import { useQuery } from "react-query";

import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const { axiosSecure } = useAxiosSecure();
  const { loading } = useContext(AuthContext);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return { users, refetch };
};

export default useUsers;
