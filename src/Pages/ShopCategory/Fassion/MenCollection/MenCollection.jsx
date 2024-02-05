import { useEffect, useState } from "react";
import SingleMens from "./SingleMens";
import useProducts from "../../../../Hooks/useProducts";

const MenCollection = () => {
  const { products } = useProducts("subProducts/mens");

  //   const [mens, setMens] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/subProducts/mens")
  //       .then((res) => res.json())
  //       .then((data) => setMens(data));
  //   }, []);
  //   // useEffect(() =>{
  //   //     fetch("https://fakestoreapi.com/products")
  //   //     .then(res => res.json())
  //   //     .then(data => setMens(data))
  //   // }, [])

  return (
    <div className="max-w-[1240px] mx-auto mt-10 mb-20 px-2">
      <div className="grid md:grid-cols-5 gap-4">
        {products.map((singleMens, i) => (
          <SingleMens key={i} singleMens={singleMens} />
        ))}
      </div>
    </div>
  );
};

export default MenCollection;
