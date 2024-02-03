import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import AllElectronics from "../Pages/ShopCategory/Electronics/AllElectronics";
import AllFashion from "../Pages/ShopCategory/Fassion/AllFashion";
import AllPhone from "../Pages/ShopCategory/Phones/AllPhone";
import AllSoftware from "../Pages/ShopCategory/Software/AllSoftware";
import AllFrozen from "../Pages/ShopCategory/Frozen/AllFrozen";
import AllGrocery from "../Pages/ShopCategory/Grocery/AllGrocery";
import AllPcBuilding from "../Pages/ShopCategory/PcBuilding/AllPcBuilding";

import MultipleCategories from "../Pages/ShopCategory/MultipleCategories";
import GirlsCollection from "../Pages/ShopCategory/Fassion/GirlsCollection/GirlsCollection";
import MenCollection from "../Pages/ShopCategory/Fassion/MenCollection/MenCollection";
import KidsCollection from "../Pages/ShopCategory/Fassion/KidsCollection/KidsCollection";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allElectronics",
        element: <AllElectronics />,
      },
      {
        path: "/allFashions",
        element: <AllFashion />,
      },
      {
        path: "/allPhones",
        element: <AllPhone />,
      },
      {
        path: "/allSoftware",
        element: <AllSoftware />,
      },
      {
        path: "/allFrozen",
        element: <AllFrozen />,
      },
      {
        path: "/allGrocery",
        element: <AllGrocery />,
      },
      {
        path: "/allPcBuilding",
        element: <AllPcBuilding />,
      },

      {
        path: "/multipleCategories",
        element: <MultipleCategories />,
      },

      {
        path: "/girls",
        element: <GirlsCollection />,
      },

      {
        path: "/mens",
        element: <MenCollection />,
      },

      {
        path: "/kids",
        element: <KidsCollection />,
      },
    ],
  },
]);

export default Router;
