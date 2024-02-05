import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <main className="flex w-full">
      <div className="w-1/6p">
        <div className="sticky top-0 ">
          <Sidebar />
        </div>
      </div>

      <div className="w-5/6 mx-auto  mt-20">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
