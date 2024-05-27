import { Outlet } from "react-router-dom";
import Navbar from '../COMPONENTS/Navbar';

const MainLayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
};

export default MainLayouts;