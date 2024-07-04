import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
           <div className="h-[74px]"> <Navbar></Navbar></div>
            <div className="container mx-auto bg-[#f7f9fe] bg-[#f6f8fd "><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;