import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div className='mx-auto xl:px-10 md:px-5 sm:px-2 px-1'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;