import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import useProvider from "../hooks/useProvider";

const Main = () => {
  const {dark} = useProvider()
  return (
    <div className={`mx-auto xl:px-10 md:px-5 sm:px-2 px-1 ${ dark?('bg-black text-white'): ('bg-lime-30 text-lime-300')} `} >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;