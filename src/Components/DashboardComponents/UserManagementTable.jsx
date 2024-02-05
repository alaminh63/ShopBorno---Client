import React from "react";
import { MdDelete } from "react-icons/md";

const UserManagementTable = ({ user, handleDelete }) => {
  const { name, email, photo_url, role } = user;
  return (
    <tr className="text-black">
      <td>
        <img
          className="w-14 h-14 block mx-auto rounded-md"
          src={photo_url}
          alt=""
        />
      </td>
      <td>
        <h1>{name}</h1>
      </td>
      <td>
        <h1>{email}</h1>
      </td>
      <td>
        <h1>{role}</h1>
      </td>
      <td>
        <div onClick={() => handleDelete(user._id)}>
          <MdDelete className="m-1 border hover:shadow-md text-5xl rounded-md cursor-pointer text-sky-400 hover:text-red-600 duration-300 p-3" />
        </div>
      </td>
    </tr>
  );
};

export default UserManagementTable;
