import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import FooterPage from "../Pages/FooterPage/FooterPage";

const MainLayout = () => {
    return (
        <div className=" bg-gray-700 dark:bg-gray-800 pb-12">
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
            <Outlet></Outlet>
            </div>
            <FooterPage></FooterPage>
        </div>
    );
};

export default MainLayout;