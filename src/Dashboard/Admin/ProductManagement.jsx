import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import Swal from "sweetalert2";
import ProductManagementTable from "../../Components/DashboardComponents/ProductManagementTable";

const ProductManagement = () => {
  const { axiosSecure } = useAxiosSecure();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosSecure(`/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [products]);

  const handleDelete = (id) => {
    axiosSecure
      .delete(`/delete-product/${id}`)
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
        }
      })
      .catch((err) => console.error(err));
  };

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

            {products.map((product) => (
              <ProductManagementTable
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
