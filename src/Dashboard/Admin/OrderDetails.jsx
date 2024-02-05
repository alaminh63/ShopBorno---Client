import { FaStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const OrderDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { axiosSecure } = useAxiosSecure();
  const { data: product = {} } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`singleProduct/${id}`);
      return res.data;
    },
  });
  
  const { data: userDetails = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`users/${email}`);
      return res.data;
    },
  });
  const { name, photo_url, role } = userDetails;
  const {
    _id,
    title,
    image,
    description,
    price,
    rating,
    subCategory,
    color,
    category,
  } = product;

  return (
    <div className="max-w-[1240px] mx-auto mt-16 mb-16 px-2">
      <div className="flex justify-center flex-col md:flex-row gap-4 items-center">
        <img className="w-[400px] h-[500px] mb-6" src={image} alt="" />
        <div>
          <h1 className="text-4xl font-bold mb-4 px-5">{title}</h1>
          <div>
            <div className="flex gap-5 items-center text-sm">
              <div className="flex gap-2 items-center border-r-2 px-5">
                <span className="flex items-center text-orange-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p className="text-sky-500">{rating}</p>
              </div>
              <p className="text-sky-500">124 Answered Questions</p>
            </div>
            <div className="flex items-center gap-3 px-5 mt-2">
              <div className="flex gap-3">
                <h2>
                  Brand:
                  <span className="text-sky-500 uppercase">{subCategory}</span>
                </h2>
                <h2>
                  Category:
                  <span className="text-sky-500 uppercase">{category}</span>
                </h2>
              </div>
              <div className="flex gap-3 items-center">
                <IoMdShare className="cursor-pointer hover:text-sky-500 duration-300" />
                <IoBookmarkOutline className="cursor-pointer hover:text-sky-500 duration-300" />
              </div>
            </div>
          </div>
          <hr className="my-2 w-[390px] ml-5" />

          <div className="px-5">
            <h1 className="text-4xl mb-2">
              BDT <span className="font-semibold">{price}/-</span>
            </h1>
          </div>

          <hr className="my-2 w-[390px] ml-5" />

          <h1 className="px-5 mb-2">
            Color: <span className="font-bold">{color}</span>
          </h1>
          <h1 className="px-5">
            Storage: <span className="">{description}</span>
          </h1>

          <hr className="my-2 w-[390px] ml-5" />

          <div className="flex gap-6 items-center px-5">
            <p>Quantity: 1</p>
          </div>

          <div className="flex gap-6 items-center px-5 mt-5 mb-10">
            <p>
              Sold by <span className="text-sky-500">Example Store</span>
            </p>
            <p className="bg-sky-500 p-2 rounded-md text-white cursor-pointer">
              Visit Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
