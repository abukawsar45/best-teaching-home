import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import useProvider from "../hooks/useProvider";

const Main = () => {
  const {dark} = useProvider()
  return (
    <div
      className={`relative mx-auto max-w-screen-2xl ${
        dark ? 'bg-black text-white' : 'bg-lime-30 text-lime-300'
      } `}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;