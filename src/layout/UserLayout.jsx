import React from "react";
import Footer from "../User/components/Footer/Footer";
import Header from "../User/components/Header/Header";

function UserLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default UserLayout;
