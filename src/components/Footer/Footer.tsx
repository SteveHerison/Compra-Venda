import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-14 md:hidden">
      <div className="fixed bottom-0 z-20 w-full bg-white border-t h-14">
        <ul className="grid items-center justify-center w-full grid-cols-5 text-xs">
          <li className="flex items-center justify-center w-full h-full">
            Home
          </li>
          <li className="flex items-center justify-center w-full h-full">
            Pesquisa
          </li>
          <li className="flex items-center justify-center w-full h-14">
            <p className="flex gap-2">
              <span>Anunciar</span> <span>gratis</span>
            </p>
          </li>
          <li className="flex items-center justify-center w-full h-full">
            mensagem
          </li>
          <li className="flex items-center justify-center w-full h-full">
            Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
