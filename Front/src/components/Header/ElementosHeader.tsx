import React from "react";
import Look from "../../assets/look.svg";
import User from "../../assets/categorias/user.svg";
import { Link } from "react-router-dom";

const ElementosHeader = () => {
  return (
    <div>
      <div className="relative flex items-center md:hidden">
        <input
          placeholder={`Buscar "carro" `}
          type="text"
          className="p-1 border rounded-md outline-none pl-7 border-zinc-300"
        />
        <img src={Look} alt="" className="absolute w-8 h-8" />
      </div>

      <div className="items-center hidden space-x-5 md:flex">
        <div className="flex space-x-2">
          <img src={User} alt="Avatar" className="w-6 h-6" />
          <p>Minha Conta</p> <p>{">"}</p>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link to={"/sobre"}> Sobre</Link>
          </li>
          <li>
            <Link to={"/ajuda"}> Ajuda</Link>
          </li>
        </ul>
        <button className="p-2 text-white bg-orange-400 rounded-xl">
          Anunciar grátis
        </button>
      </div>
    </div>
  );
};

export default ElementosHeader;
