import { useRoutes } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import About from "../pages/about/About";
import Help from "../pages/help";
import Default from "../components/Default";
import SingIn from "../pages/singIn";
import SingUp from "../pages/singUp";

const routes = [
  { path: "/", element: <SingIn /> },
  { path: "/cadastro", element: <SingUp /> },
  { path: "/home", element: <Home /> },
  { path: "/sobre", element: <About /> },
  { path: "/ajuda", element: <Help /> },
  { path: "/*", element: <Default /> },
];

const MainRouter = () => {
  const elements = useRoutes(routes);

  return elements;
};

export default MainRouter;
