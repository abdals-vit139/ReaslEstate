import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
