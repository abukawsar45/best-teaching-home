import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import useProvider from "../hooks/useProvider";

const Main = () => {
  const { dark } = useProvider();
  console.log(import.meta.env);
  return (
    <div
      className={`relative px-2 md:px-4 lg:px-8 max-w-screen-2xl ${
        dark ? 'bg-neutral-800 text-zinc-200' : 'bg-black text-lime-300'
      } `}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;