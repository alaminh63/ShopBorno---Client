import { useEffect, useState } from "react";
import SingleKids from "./SingleKids";
import useProducts from "../../../../Hooks/useProducts";

const KidsCollection = () => {
  const { products } = useProducts("subProducts/kids");
  return (
    <div className="max-w-[1240px] mx-auto mt-10 mb-10 px-2">
      <div className="grid md:grid-cols-5 gap-4">
        {products.map((singleKid, index) => (
          <SingleKids key={index} singleKid={singleKid} />
        ))}
      </div>
    </div>
  );
};

export default KidsCollection;
