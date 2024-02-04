import { Link } from "react-router-dom";

const SingleGirls = ({ singleGirl }) => {
  const { _id, title, image, color, price } = singleGirl;
  return (
    <div className="mt-16 mb-10">
      <div className="shadow rounded-md">
        <img className="rounded-t-md" src={image} alt="" />
        <h1 className="text-2xl my-2 font-bold">{title}</h1>
        <div className="mb-2">
          <p>Color: {color}</p>
          <p>Price: BDT {price}/-</p>
        </div>
        <div className="cursor-pointer mt-3 hover:bg-[#c0e7f8] bg-[#008ECC] hover:text-[#008ECC] text-white hover:bg-transparent rounded-b-md duration-300 p-3">
          <Link to={`/singleProduct/${_id}`}>
            <button className="block w-full mx-auto">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGirls;
