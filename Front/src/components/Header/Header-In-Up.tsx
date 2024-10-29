import React from "react";
import { Link } from "react-router-dom";

const HeaderInUp = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 px-5 shadow-md bg-slate-100/35">
      <span className="flex items-center text-xl">
        Deal.<p className="text-xs">Shop</p>
      </span>
      <div className="flex space-x-3">
        <button className="w-20 p-2 font-semibold text-red-900 shadow-md bg-black/20 rounded-xl">
          <Link to={"/"}>Login</Link>
        </button>
        <button className="w-20 p-2 font-semibold text-red-900 shadow-md bg-black/20 rounded-xl">
          <Link to={"/cadastro"}> Cadastro</Link>
        </button>
      </div>
    </div>
  );
};

export default HeaderInUp;
