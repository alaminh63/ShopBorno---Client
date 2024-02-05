import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext, useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdCallEnd, MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };

  const [toggle, setToggle] = useState();
  return (
    <div className="max-w-[1240px] mx-auto p-3">
      <div className="md:flex justify-between items-center md:mb-3 -mb-10 text-transparent md:text-black font-light">
        <div>
          <h1 className="md:text-[#008ECC] absolute top-[2.2rem] ">
            Welcome to Our Shop
          </h1>
          \
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 md:border-r-2 md:border-[#008ECC] pr-4">
            <TbTruckDelivery className="md:text-[#008ECC]" />
            <h1>Track your order</h1>
          </div>
          <div className="flex items-center gap-2">
            <MdCallEnd className="md:text-[#008ECC]" />
            <h1>+880 1775006663</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="md:w-[400]">
            <h2 className="text-3xl font-bold">ShopBorno</h2>
          </div>
        </Link>

        <span className="md:hidden">
          {toggle ? (
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </span>

        <div
          className={`flex md:w-[800px] items-center duration-300 flex-col py-4 md:p-0 text-white md:text-gray-900 bg-opacity-100 top-20 bg-[#008ECC] md:bg-transparent w-full text-center md:flex-row gap-4 absolute md:static z-50 ${
            toggle ? "left-0" : "-left-full"
          }`}
        >
          <div className="md:w-full w-full right-2 px-2">
            <input
              className="w-full relative p-3 bg-transparent rounded-md border border-sky-300"
              type="search"
              name=""
              id=""
              placeholder="Search essentials"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link to="/cart">
              <div className="flex gap-2 cursor-pointer items-center">
                <FiShoppingCart className="md:text-2xl text-[#008ECC] cursor-pointer" />
                <h1 className="hover:text-white duration-300 rounded hover:bg-[#008ECC] p-2">
                  Cart
                </h1>
              </div>
            </Link>
            <Link to="/dashboard/userManagement">
              <div className="flex   cursor-pointer items-center">
                <MdManageAccounts className="md:text-2xl text-[#008ECC] cursor-pointer" />
                <h1 className="hover:text-white duration-300 rounded hover:bg-[#008ECC] p-2">
                  Dashboard
                </h1>
              </div>
            </Link>

            {user ? (
              <>
                <div className="flex gap-2">
                  {user?.photoURL && (
                    <>
                      <div className="dropdown dropdown-end ms-3">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img
                              title={`${
                                user?.displayName ? user?.displayName : ""
                              }`}
                              className="hidden md:block"
                              src={user?.photoURL}
                              alt={user?.displayName}
                            />
                          </div>
                        </label>
                      </div>
                    </>
                  )}
                  <div
                    onClick={handleLogout}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      className=" hover:text-white rounded duration-300 hover:bg-[#008ECC] p-2"
                      type="button"
                      value="Log Out"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <CgProfile className="md:text-3xl text-[#008ECC]" />
                    <input
                      className=" hover:text-white rounded duration-300 hover:bg-[#008ECC] p-2"
                      type="button"
                      value="Sign In"
                    />
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
