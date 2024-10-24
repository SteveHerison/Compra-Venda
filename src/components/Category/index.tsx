import React from "react";
import { Categorias } from "../../data/dataCategory";

const Category = () => {
  return (
    <ul className="flex w-full py-2 overflow-x-auto md:grid md:grid-cols-4 md:gap-7 scrollbar-hide">
      {Categorias.map(({ name, subName, images }, index) => (
        <li
          key={index}
          className="flex flex-col items-center justify-start flex-shrink-0 w-1/4 sm:w-1/5 md:flex-row md:w-1/2"
        >
          <button className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="w-12 h-12 p-2 rounded-xl bg-slate-200 hover:bg-orange-100 hover:rounded-full">
              <img src={images.svg} alt={name} className="w-full h-full" />
            </div>
            <p className="text-sm md:text-base">
              <span className="block md:hidden">{subName}</span>
              <span className="hidden md:block">{name}</span>
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Category;
