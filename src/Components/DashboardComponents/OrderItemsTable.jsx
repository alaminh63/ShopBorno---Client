import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderItemsTable = ({ product }) => {
  const { productId } = product;
  const [productDetails, setProductDetails] = useState({});
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
  } = productDetails;
  useEffect(() => {
    fetch(`http://localhost:3000/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);

  
  return (
    <tr className="text-black ">
      <td>
        <img
          className="w-14 h-14 block mx-auto rounded-md"
          src={image}
          alt=""
        />
      </td>
      <td>
        <h1>{title}</h1>
      </td>
     
      <td>
        <h1>{product.email}</h1>
      </td>
      <td>
        <h1>{category}</h1>
      </td>

      <td>
        <h1>{price}</h1>
      </td>
      <td>
        <Link to={`/dashboard/orderDetails/${productId}`}>
          <h1 className="bg-sky-500 font-bold text-white rounded-2xl">
            Order Details
          </h1>
        </Link>
      </td>
    </tr>
  );
};

export default OrderItemsTable;
