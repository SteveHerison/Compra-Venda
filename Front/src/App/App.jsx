import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { Context } from "../contexts/ContextOn";
import MenuComponent from "../components/Menu";
import Layout from "./layout";
import Footer from "../components/Footer";
import MainRouter from "../routes/MainRouter";
import { useLocation } from "react-router-dom";
import HeaderInUp from "../components/Header/Header-In-Up";

const App = () => {
  const { showBar } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    if (showBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBar]);

  const hideHeaderFooter =
    location.pathname === "/" || location.pathname === "/cadastro";

  const headerInUp =
    location.pathname === "/" || location.pathname === "/cadastro";

  return (
    <Layout>
      <div className="flex w-full h-full ">
        {showBar && <MenuComponent />}
        <div className="flex flex-col w-full h-full">
          {!hideHeaderFooter && <Header />}
          {headerInUp && <HeaderInUp />}
          <div
            className={` ${
              hideHeaderFooter ? "w-full " : "flex-1 px-2 py-2 md:px-10"
            }`}
          >
            <MainRouter />
          </div>
          {!hideHeaderFooter && <Footer />}
        </div>
      </div>
    </Layout>
  );
};

export default App;
