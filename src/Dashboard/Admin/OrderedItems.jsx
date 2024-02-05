import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import OrderItemsTable from "../../Components/DashboardComponents/OrderItemsTable";

const OrderedItems = () => {
  const { user } = useAuth();
  console.log(user);
  const { axiosSecure } = useAxiosSecure();
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    axiosSecure(`/cartProducts`)
      .then((res) => {
        setCartProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mx-auto mt-10 px-2">
      <div className=" items-center gap-5 md:flex-row">
        <div className="w-full flex -mt-24 gap-4 md:flex-row flex-col">
          <table className="w-full  text-center text-white">
            <tr className="bg-slate-700 rounded-md ">
              <th className="py-3"></th>
              <th className="py-3">Name</th>
              <th className="py-3">Brand</th>
              <th className="py-3">Color</th>
              <th className="py-3">Category</th>
              <th className="py-3">Rating</th>
              <th className="py-3">Price</th>
              <th className="py-3">Actions</th>
            </tr>

            {cartProducts.map((product) => (
              <OrderItemsTable key={product._id} product={product} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderedItems;
