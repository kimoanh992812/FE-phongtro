import React from "react";
import Logo from "../Logo/Logo";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.scss";

function Header() {
  return (
    <header className=''>
      <Logo />
      <NavigationBar />
    </header>
  );
}

export default Header;
