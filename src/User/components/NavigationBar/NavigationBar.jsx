import { Space } from "antd";
import React, { useState } from "react";
import NavigationAccount from "./NavigationAccount/NavigationAccount";
import NavigationButton from "./NavigationButton/NavigationButton";
import NavigationLink from "./NavigationLink/NavigationLink";
import "./NavigationBar.scss";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

function NavigationBar() {
  const [popupLogin, setPopupLogin] = useState(false);
  const [popupSignup, setPopupSignup] = useState(false);

  const handlePopupLogin = (e, visible) => {
    e.stopPropagation();
    setPopupLogin(visible);
  };

  const handlePopupSignup = (e, visible) => {
    e.stopPropagation();
    setPopupSignup(visible);
  };

  return (
    <Space size={70} className='nav'>
      <NavigationLink />
      <NavigationButton
        handlePopupLogin={handlePopupLogin}
        handlePopupSignup={handlePopupSignup}
      />
      <NavigationAccount />
      <Login
        handlePopupLogin={handlePopupLogin}
        popupLogin={popupLogin}
        handlePopupSignup={handlePopupSignup}
      />
      <Signup handlePopupSignup={handlePopupSignup} popupSignup={popupSignup} />
    </Space>
  );
}

export default NavigationBar;
