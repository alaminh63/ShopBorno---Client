import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";

const UserDetails = () => {
  //   const { user } = useAuth();
  const { id } = useParams();
  const { axiosSecure } = useAxiosSecure();
  const { data: user = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`users/${id}`);
      return res.data;
    },
  });
  const { name, photo_url, role, email } = user;

  // making cart data to send to server

  return (
    <div className="max-w-2xl mx-auto ">
      <div className="bg-slate-500 flex gap-5">
        <div className="w-2/5">
          <img src={photo_url} className="w-72" alt="" />
        </div>
        <div className="w-4/6 flex font-bold flex-col justify-center">
          <h2 className="text-3xl font-bold">{name}</h2>
          <h3 className="text-lg">Role : {role}</h3>

          <h3 className="text-lg">Email : {email}</h3>
          <h3 className="text-lg">Phone : {email}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
