import { key } from "localforage";
import { useEffect, useState } from "react";
import SingleGirls from "./SingleGirls";
import useProducts from "../../../../Hooks/useProducts";

const GirlsCollection = () => {
  const { products } = useProducts("subProducts/girls");
  return (
    <div className="max-w-[1240px] mx-auto mt-10 mb-10 px-2">
      <div className="grid md:grid-cols-5 gap-4">
        {products.map((singleGirl, index) => (
          <SingleGirls key={index} singleGirl={singleGirl} />
        ))}
      </div>
    </div>
  );
};

export default GirlsCollection;
