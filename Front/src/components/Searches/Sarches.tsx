import React, { useState } from "react";

const Sarches = () => {
  const [activeTab, setActiveTab] = useState("Mais buscados");
  const [activeProduct, setActiveProduct] = useState("Aleatorios");

  // Função para mudar a aba ativa ao clicar
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const handleProductClick = (product: string) => {
    setActiveProduct(product);
  };

  return (
    <figure className="w-full h-full py-4">
      <nav>
        <ul className="flex w-full pb-4 text-sm md:text-base">
          <li
            className={`pb-2 font-semibold border-b ${
              activeTab === "Mais buscados"
                ? "text-orange-700 border-b-orange-700"
                : "hover:text-orange-700 hover:border-b-orange-700"
            }`}
          >
            <button
              className="p-1"
              onClick={() => handleTabClick("Mais buscados")}
            >
              Mais buscados
            </button>
          </li>

          <li
            className={`pb-2 border-b font-semibold ${
              activeTab === "Em alta"
                ? "text-orange-700 border-b-orange-700"
                : "hover:text-orange-700 hover:border-b-orange-700"
            }`}
          >
            <button className="p-1" onClick={() => handleTabClick("Em alta")}>
              Em alta
            </button>
          </li>

          <li
            className={`pb-2 border-b font-semibold ${
              activeTab === "Mais recentes"
                ? "text-orange-700 border-b-orange-700"
                : "hover:text-orange-700 hover:border-b-orange-700"
            }`}
          >
            <button
              className="p-1"
              onClick={() => handleTabClick("Mais recentes")}
            >
              Mais recentes
            </button>
          </li>
        </ul>
        <div className="flex w-full pb-4 space-x-3 text-sm text-white md:text-base">
          <button
            onClick={() => handleProductClick("Aleatorios")}
            className={`pb-2 border font-semibold bg-gray-900 p-2 rounded-xl  ${
              activeProduct === "Aleatorios"
                ? "text-orange-700 border-orange-700"
                : "hover:text-orange-700 hover:border-orange-700"
            }`}
          >
            Aleatorios
          </button>

          <button
            onClick={() => handleProductClick("Celulares")}
            className={`pb-2 border font-semibold bg-gray-900 p-2 rounded-xl  ${
              activeProduct === "Celulares"
                ? "text-orange-700 border-orange-700"
                : "hover:text-orange-700 hover:border-orange-700"
            }`}
          >
            Celulares
          </button>

          <button
            onClick={() => handleProductClick("Promoções")}
            className={`pb-2 border font-semibold bg-gray-900 p-2 rounded-xl ${
              activeProduct === "Promoções"
                ? "text-orange-700 border-orange-700"
                : "hover:text-orange-700 hover:border-orange-700"
            }`}
          >
            Promoções
          </button>
        </div>
        Fotos catalogos
      </nav>
    </figure>
  );
};

export default Sarches;
