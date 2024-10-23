import React from "react";
import Look from "../../assets/look.svg";

const ElementosHeader = () => {
  return (
    <div>
      <div className="relative flex items-center md:hidden">
        <input
          placeholder={`Buscar "carro" `}
          type="text"
          name=""
          id=""
          className="p-1 border rounded-md outline-none pl-7 border-zinc-300"
        />
        <img src={Look} alt="" className="absolute w-8 h-8" />
      </div>

      <div className="flex items-center space-x-5">
        <div className="flex space-x-2">
          <img src="Spered" alt="Avatar" />
          <p>Minha Conta</p> <p>{">"}</p>
        </div>
        <ul className="flex gap-4">
          <li>Sobre</li>
          <li>Ajuda</li>
        </ul>
        <button className="p-1 bg-orange-400 rounded-xl">
          Adicionar um post
        </button>
      </div>
    </div>
  );
};

export default ElementosHeader;
