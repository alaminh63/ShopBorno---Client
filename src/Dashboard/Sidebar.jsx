import { Link, NavLink } from "react-router-dom";
import {
  MdOutlineClass,
  MdManageAccounts,
  MdOutlineManageHistory,
  MdPayments,
  MdAttachMoney,
} from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import { GrCheckboxSelected } from "react-icons/gr";
import useAuthorization from "../Hooks/useAuthorization";
import { FaCartShopping, FaProductHunt, FaUserPlus } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const { role } = useAuthorization();
  return (
    <aside className=" bg-slate-700 top-0 bottom-0 h-screen p-2 shadow-2xl bg-neutral">
      <div className="flex flex-col items-center justify-center gap-3 mt-12">
        <Link to="/">
          <h1 className=" text-lg font-bold text-white flex gap-2 items-center">
            <FaHome />
            ShopBorno - Dashboard
          </h1>
        </Link>
        <h3 className="text-lg font-semibold py-1 text-white  border-2 px-4 bg-sky-500 rounded-lg uppercase">
          {role}
        </h3>
      </div>
      <hr className="mt-12" />
      <ul className="mt-[60px] flex flex-col gap-2  text-white">
        {role === "admin" ? (
          <>
            <li className="font-semibold flex gap-2 items-center">
              <NavLink
                to="/dashboard/userManagement"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black  flex gap-2 text-[16px] items-center"
                }
              >
                <FaUserPlus />
                <span>User Managements</span>
              </NavLink>
            </li>
            <li className="font-semibold flex gap-2 items-center">
              <NavLink
                to="/dashboard/productManagement"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black  flex gap-2 text-[16px] items-center"
                }
              >
                <FaProductHunt />
                <span>Product Management</span>
              </NavLink>
            </li>
            <li className="font-semibold flex gap-2 items-center">
              <NavLink
                to="/dashboard/orderItems"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black  flex gap-2 text-[16px] items-center"
                }
              >
                <FaCartShopping />
                <span> Ordered Items</span>
              </NavLink>
            </li>
            <li className="font-semibold flex gap-2 items-center ">
              <NavLink
                to="/dashboard/addNewProduct"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black  flex gap-2 text-[16px] items-center"
                }
              >
                <IoAddCircle />
                <span> Add New Product</span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="font-semibold">
              <NavLink
                to="/dashboard/allUser"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black  flex gap-2 text-[16px] items-center"
                }
              >
                <span>My Ordered Items</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
