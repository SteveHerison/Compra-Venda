import { useRoutes } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import About from "../pages/about/About";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/sobre", element: <About /> },
];

const MainRouter = () => {
  const elements = useRoutes(routes); // useRoutes é chamado aqui para gerar os elementos baseados nas rotas

  return elements; // Retorna os elementos de rotas
};

export default MainRouter;
