import { Link } from "react-router-dom";
import logo1 from "../../../assets/Phone Brand/apple.png";
import logo2 from "../../../assets/Phone Brand/blackberry.png";
import logo3 from "../../../assets/Phone Brand/motorola.png";
import logo4 from "../../../assets/Phone Brand/opp.png";
import logo5 from "../../../assets/Phone Brand/realme.jpeg";
import logo6 from "../../../assets/Phone Brand/Samsung.png";
import logo7 from "../../../assets/Phone Brand/sony.png";
import logo8 from "../../../assets/Phone Brand/Xiaomi.png";
import logo9 from "../../../assets/Phone Brand/walton.png";
import logo10 from "../../../assets/Phone Brand/Vivo.png";
import { useEffect, useState } from "react";

const AllPhone = () => {
  const [allPhones, setAllPhones] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products/phones`)
      .then((res) => res.json())
      .then((data) => setAllPhones(data));
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto mt-10 ">
      {/* <div className="grid md:grid-cols-9 grid-cols-3 ml-4 gap-3 items-center my-9">
        <Link to="/samsung">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="Samsung"
          />
        </Link>
        <Link to="/sony">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="Sony"
          />
        </Link>
        <Link to="/blackberry">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="BlackBerry"
          />
        </Link>
        <Link to="/vivo">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="VIVO"
          />
        </Link>
        <Link to="/oppo">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="OPPO"
          />
        </Link>
        <Link to="/motorola">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="Motorola"
          />
        </Link>
        <Link to="/realme">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="Realme"
          />
        </Link>
        <Link to="/mi">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="Xiaomi"
          />
        </Link>
        <Link to="/walton">
          <input
            className="border p-3 cursor-pointer rounded-md hover:text-white duration-300 hover:bg-[#008ECC]"
            type="button"
            value="Walton"
          />
        </Link>
      </div> */}
      <div className="grid md:grid-cols-5 grid-cols-2 items-center">
        {allPhones.map((phones, index) => (
          <div key={index}>
            <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-14">
              <div className="bg-white rounded-md shadow-lg">
                <img className="block mx-auto p-9" src={phones.image} alt="" />
                <div className="px-4 my-2">
                  <h1 className="font-bold my-3">{phones.title}</h1>
                  <p>Color: {phones.color}</p>
                  <p>Storage: {phones.storage}</p>
                  <p className="font-bold">Price: BDT {phones.price}</p>
                </div>
                <Link to={`/singleProduct/${phones._id}`}>
                  <div className="cursor-pointer mt-3 hover:bg-[#c0e7f8] bg-[#008ECC] hover:text-[#008ECC] text-white hover:bg-transparent rounded-b-md duration-300 p-3">
                    <button className="block w-full mx-auto">Buy Now</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BRAND BTN  */}
    </div>
    // <div className="max-w-[1240px] mx-auto mt-16 px-2">
    //   <div className="grid md:grid-cols-5 gap-4">

    //     {/* <Link to="/apple">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo1}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Apple</h1>
    //       </div>
    //     </Link>
    //     <Link to="/blackberry">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo2}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Blackberry</h1>
    //       </div>
    //     </Link>
    //     <Link to="/motorola">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo3}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Motorola</h1>
    //       </div>
    //     </Link>
    //     <Link to="/oppo">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo4}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">OPPO</h1>
    //       </div>
    //     </Link>
    //     <Link to="/realme">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo5}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">REALME</h1>
    //       </div>
    //     </Link>
    //     <Link to="/samsung">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo6}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Samsung</h1>
    //       </div>
    //     </Link>
    //     <Link to="/sony">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo7}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Sony</h1>
    //       </div>
    //     </Link>
    //     <Link to="/mi">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo8}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Xiaomi</h1>
    //       </div>
    //     </Link>
    //     <Link to="/walton">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo9}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Walton</h1>
    //       </div>
    //     </Link>
    //     <Link to="/vivo">
    //       <div className="border py-7 rounded-md bg-slate-100 hover:scale-90 duration-300 scale-100">
    //         <img
    //           className="w-[100px] h-[100px] block mx-auto"
    //           src={logo10}
    //           alt=""
    //         />
    //         <h1 className="text-center mt-3 uppercase font-bold">Vivo</h1>
    //       </div>
    //     </Link> */}
    //   </div>
    // </div>
  );
};

export default AllPhone;
