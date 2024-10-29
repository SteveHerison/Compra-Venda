import React, { useContext } from "react";
import Close from "../../assets/close.svg";
import { Context } from "../../contexts/ContextOn";
const MenuComponent = () => {
  const { setShowbar, showBar } = useContext(Context);

  const handleCloseMenu = () => {
    setShowbar(!showBar);
  };
  return (
    <div className="fixed z-30 w-full h-full bg-black/25">
      <nav className="w-1/2 h-full bg-white">
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-end justify-end w-full h-10">
            <img
              src={Close}
              alt=""
              className="w-9 h-9"
              onClick={handleCloseMenu}
            />
          </div>
          <ul className="flex flex-col justify-center flex-1 h-full py-5 space-y-3 overflow-y-auto">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center h-20">
            <p>avatar</p>
            <h1>My account</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuComponent;
