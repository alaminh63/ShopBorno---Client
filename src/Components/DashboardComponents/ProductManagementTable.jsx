import React from "react";
import { MdDelete } from "react-icons/md";

const ProductManagementTable = ({ product, handleDelete }) => {
    
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
      <div onClick={() => handleDelete(product._id)}>
        <MdDelete className="m-1 border hover:shadow-md text-5xl rounded-md cursor-pointer text-sky-400 hover:text-red-600 duration-300 p-3" />
      </div>
    </tr>
  );
};

export default ProductManagementTable;
