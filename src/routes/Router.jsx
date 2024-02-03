import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";

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
        path: "/allPhone",
        element: <AllPhone />,
      },
      {
        path: "/multiple-shop",
        element: <MultipleShop />,
      },
      {
        path: "/fashion",
        element: <AllFashion />,
      },
      {
        path: "/electronics",
        element: <AllElectronics />,
      },
      {
        path: "/software",
        element: <AllSoftware />,
      },
      {
        path: "/pcBuilding",
        element: <AllPc />,
      },
      {
        path: "/frozen",
        element: <AllFrozen />,
      },
      {
        path: "/grocery",
        element: <AllGrocery />,
      },
    ],
  },
]);

export default Router;
