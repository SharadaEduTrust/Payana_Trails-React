import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Header";
import Footer from "../Footer";
import NewsletterModal from "../NewsletterModal";

const Layout = ({ children }) => {
  const location = useLocation();
  const currentUrl = `https://payanatrails.com${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EFE9] font-sans">
      <Helmet>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};

export default Layout;
