import { useContext, useEffect } from "react";
import Header from "../components/Header";
import { Context } from "../contexts/ContextOn";
import MenuComponent from "../components/Menu";
import Layout from "./layout";
import Footer from "../components/Footer";
import MainRouter from "../routes/MainRouter";

const App = () => {
  const { showBar } = useContext(Context);

  useEffect(() => {
    if (showBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // ou "auto"
    }

    // Limpeza do efeito ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBar]);

  return (
    <Layout>
      <div className="flex w-full h-full ">
        {showBar && <MenuComponent />}
        <div className="flex flex-col w-full h-full">
          <Header />
          <div className="flex-1 px-2 py-5">
            <MainRouter />
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default App;
