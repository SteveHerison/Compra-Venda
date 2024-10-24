import React, { useContext } from "react";
import Menu from "../../assets/menu.svg";
import Logo from "../../assets/ds.svg";

import { Context } from "../../contexts/ContextOn";
import ElementosHeader from "./ElementosHeader";

const Header = () => {
  const { setShowbar, showBar } = useContext(Context);

  // Função para alternar o estado do menu
  const handleToggleMenu = () => {
    setShowbar(!showBar);
  };

  return (
    <header className="h-20 ">
      <div className="fixed top-0 left-0 z-10 w-full h-20 bg-white border-b shadow-lg ">
        <nav className="flex items-center justify-between h-full px-2 md:px-10">
          <div className="w-20 h-20 md:w-28 md:h-28">
            <img src={Logo} alt="" className="object-cover w-full h-full" />
          </div>
          <ElementosHeader />
          {!showBar ? (
            <img
              src={Menu}
              alt="Abrir menu"
              className="w-8 h-8 cursor-pointer md:hidden"
              onClick={handleToggleMenu}
            />
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
