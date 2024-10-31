import React, { createContext, ReactNode, useState } from "react";
import { PropsOn } from "../types/contextOnType";
import { createUser, createPost } from "../services/apiService";

// Estado inicial do contexto
const initialState: PropsOn = {
  name: "",
  showBar: false,
  showChecked: false,
  setShowbar: () => {},
  setShowChecked: () => {},
  setName: () => {},
};
export const Context = createContext<PropsOn>(initialState);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [showBar, setShowbar] = useState(false);
  const [showChecked, setShowChecked] = useState(false);
  const [name, setName] = useState(localStorage.getItem("name") || "");

  return (
    <Context.Provider
      value={{
        showBar,
        showChecked,
        setShowChecked,
        setShowbar,
        name,
        setName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
