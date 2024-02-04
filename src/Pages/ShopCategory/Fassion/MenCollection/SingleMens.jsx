import { Link } from "react-router-dom";

const SingleMens = ({ singleMens }) => {
  const { _id, title, image, price, rating, color } = singleMens;
  return (
    <div>
      <div className="rounded-md shadow-black/10 shadow">
        <img className="h-[260px] block mx-auto p-2" src={image} alt="" />
        <div className="px-2">
          <h1 className="text-xl font-bold my-2">{title}</h1>
          <p>Price: BDT {price}/-</p>
          <p>Rating: {rating}</p>
          <p>Color: {color}</p>
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

export default SingleMens;
