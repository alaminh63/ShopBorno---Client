import React, { useEffect, useState } from "react";

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
        <h1>{subCategory}</h1>
      </td>
      <td>
        <h1>{color}</h1>
      </td>
      <td>
        <h1>{category}</h1>
      </td>

      <td>
        <h1>{rating}</h1>
      </td>
      <td>
        <h1>{price}</h1>
      </td>
    </tr>
  );
};

export default OrderItemsTable;
