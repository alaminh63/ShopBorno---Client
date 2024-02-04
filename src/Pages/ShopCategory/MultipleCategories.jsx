import { Link } from "react-router-dom"
import shop1 from "../../assets/Shop Category/shop1.jpg"
import shop2 from "../../assets/Shop Category/shop2.jpg"
import shop3 from "../../assets/Shop Category/shop3.jpg"
import shop4 from "../../assets/Shop Category/shop4.jpg"
import shop5 from "../../assets/Shop Category/shop5.png"
import shop6 from "../../assets/Shop Category/shop6.jpg"
import shop7 from "../../assets/Shop Category/shop7.jpg"

const MultipleCategories = () => {
    return (
        <div className="max-w-[1240px] mx-auto px-2 mt-10 mb-20">
            <h1 className="my-3 text-sky-500">From all Shop.</h1>
            <div className="grid md:grid-cols-3 gap-6 items-center">
                <Link to="/allFashions">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop1} alt="" />
                    </div>
                </Link>
                <Link to="/allSoftware">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop2} alt="" />
                    </div>
                </Link>
                <Link to="/AllPcBuilding">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop3} alt="" />
                    </div>
                </Link>
                <Link to="/allFrozen">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop4} alt="" />
                    </div>
                </Link>
                <Link to="/allGrocery">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop5} alt="" />
                    </div>
                </Link>
                <Link to="/allPhones">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop6} alt="" />
                    </div>
                </Link>
                <Link to="/allElectronics">
                    <div className="border hover:shadow-md duration-300 scale-100 hover:scale-95 rounded-md">
                        <img className="block mx-auto w-[350px] h-[300px]" src={shop7} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MultipleCategories;