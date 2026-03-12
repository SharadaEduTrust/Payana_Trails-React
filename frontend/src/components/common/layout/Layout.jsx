import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EFE9] font-sans">
      <Header />
      <main className={`flex-1 ${isHomePage ? "pt-0" : "pt-20"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
