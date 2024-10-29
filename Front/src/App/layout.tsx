import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-slate-50">
      {children}
    </div>
  );
};

export default Layout;
