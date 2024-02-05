import Swal from "sweetalert2";
import UserManagementTable from "../../Components/DashboardComponents/UserManagementTable";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import useUsers from "../../Hooks/useUsers";

const UserManagement = () => {
  const { users, refetch } = useUsers();
  const { axiosSecure } = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure
      .delete(`/delete-user/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted Removed",
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="mx-auto mt-10 px-2">
      <div className=" items-center gap-5 md:flex-row">
        <div className="w-full flex -mt-24 justify-center gap-4 md:flex-row flex-col">
          <table className="w-full  text-center text-white">
            <tr className="bg-slate-700 rounded-md  justify-around">
              <th className="py-3">Serial</th>
              <th className="py-3">Customer Names</th>
              <th className="py-3">Email</th>
              <th className="py-3">role</th>
              <th className="py-3">Actions</th>
            </tr>

            {users.map((user) => (
              <UserManagementTable
                key={user._id}
                user={user}
                handleDelete={handleDelete}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
