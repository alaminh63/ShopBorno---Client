import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import useAuth from "../../Hooks/useAuth";
import CartRow from "./CartRow";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
  const { user } = useAuth();
  console.log(user);
  const { axiosSecure } = useAxiosSecure();
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    axiosSecure(`/cartProducts/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setCartProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  const total = cartProducts.reduce(
    (sum, item) => parseInt(item.price) + sum,
    0
  );

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/cartProducts/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
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
          const existingProducts = cartProducts.filter(
            (product) => product._id !== id
          );
          setCartProducts(existingProducts);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-10 px-2">
      <h1 className="text-center font-bold text-2xl my-6">Add To cart</h1>

      <div className="flex items-center gap-5 md:flex-row">
        <div className="md:w-[900px] flex -mt-24 justify-center gap-4 md:flex-row flex-col">
          <table className="w-full text-center text-sky-400">
            <tr className="bg-black rounded-md">
              <th className="py-3">Image</th>
              <th className="py-3">Product Name</th>
              <th className="py-3">Brand</th>
              <th className="py-3">Color</th>
              <th className="py-3">Quantity</th>
              <th className="py-3">Price</th>
              <th className="py-3"></th>
            </tr>

            {cartProducts.map((product) => (
              <CartRow
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </table>
        </div>

        {/* Check out  */}
        <div className="md:w-[330px] mt-16">
          <div className="border rounded-md">
            <h1 className="text-center p-2 text-2xl text-sky-400 font-bold">
              Checkout
            </h1>
            <div className="px-3 font-semibold">
              <div className="flex my-1 justify-between items-center">
                <p>Total Quantity:</p>
                <p>{cartProducts?.length}</p>
              </div>

              <div className="flex mt-4 mb-6 justify-between items-center">
                <p>Sub-Total: </p>
                <p>{total}</p>
              </div>
              <button className="w-full mb-4 p-3 rounded-md bg-slate-100 hover:bg-sky-400 duration-300 hover:text-white">
                Payment Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
