import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [toggleIconConfirm, setToggleIconConfirm] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate();
  const { signUp, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const { axiosSecure } = useAxiosSecure();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const name = data.name;
    const photo = data.photoURL;

    if (password !== confirmPassword) {
      setErrorMassage("Password an confirm password doesn't match");
      return;
    } else {
      setErrorMassage("");
    }
    signUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfile(loggedUser, { displayName: name, photoURL: photo });
        const user = {
          name: name,
          email: email,
          photo_url: photo,
        };

        axiosSecure.put(`/add-user?email=${user?.email}`, user).then((res) => {
          console.log(res);
          if (res.data) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Sign Up sucessfull",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInGoogle(googleProvider)
      .then((result) => {
        const user = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photo_url: result?.user?.photoURL,
          phone: result?.user?.phone,
        };

        axiosSecure.put(`/add-user?email=${user?.email}`, user).then((res) => {
          if (res.data) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login sucessfull",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-white lg:w-4/12 md:6/12 pt-20 w-10/12 m-auto  ">
        <div className="py-8 px-8 rounded-xl shadow-2xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} action="" className="mt-6">
            <div className="my-5 text-sm">
              <label htmlFor="username" className="block text-black">
                Username
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              />
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="email" className="block text-black">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-black">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Insert Bangladeshi Phone Number"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Only 11 Bangladeshi digits acceptable",
                  },
                })}
                className={`p-2 w-full  rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="photoURL" className="block text-black">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Photo URL"
              />
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type={`${toggleIcon ? "text" : "password"}`}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              />
              <span
                onClick={() => setToggleIcon(!toggleIcon)}
                className="absolute mt-7 mr-20 ml-2 toggle-icon"
              >
                {toggleIcon ? (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEyeSlash}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEye}
                  ></FontAwesomeIcon>
                )}
              </span>
              <div className="flex justify-end mt-2 text-xs text-gray-600">
                <>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must be PATTERN rules
                    </p>
                  )}
                </>
              </div>
            </div>
            <div className="my-5 text-sm">
              <label htmlFor="password" className="block text-black">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                type={`${toggleIconConfirm ? "text" : "password"}`}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Confirm Password"
              />
              <span
                onClick={() => setToggleIconConfirm(!toggleIconConfirm)}
                className="toggle-icon absolute mt-7 mr-20 ml-2"
              >
                {toggleIcon ? (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEyeSlash}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    className="block"
                    icon={faEye}
                  ></FontAwesomeIcon>
                )}
              </span>
              {<p className="text-red-700 ">{errorMassage}</p>}
            </div>
            <input
              className="btn block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
              type="submit"
              value="Sign Up"
            />
          </form>
          <div className="flex md:justify-between justify-center items-center mt-10">
            <div
              style={{ height: 1 }}
              className="bg-gray-300 md:block hidden w-4/12"
            />
            <p className="md:mx-2 text-sm font-light text-gray-400">
              {" "}
              Login With Social{" "}
            </p>
            <div
              style={{ height: 1 }}
              className="bg-gray-300 md:block hidden w-4/12"
            />
          </div>
          <div className="block mt-7">
            <div>
              <button
                onClick={handleGoogleLogin}
                className="text-center w-full text-white bg-orange-700 p-3 duration-300 rounded-sm hover:bg-blue-700"
              >
                Google
              </button>
            </div>
          </div>
          <p className="mt-12   text-center">
            Already have an account?
            <Link
              to="/login"
              className="bg-sky-500 text-white text-sm mx-2 font-medium p-4 rounded-md"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
