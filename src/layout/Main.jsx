import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import useProvider from "../hooks/useProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Main = () => {
  const { dark } = useProvider();
  // console.log(dark)
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div
      className={`px-2 md:px-4 lg:px-8 max-w-screen-2xl ${dark ? 'bg-slate-900 text-white' : 'bg-slate-200 text-black'} `}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;