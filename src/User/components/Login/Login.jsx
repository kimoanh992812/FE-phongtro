import React from "react";
import PopupLogin from "./PopupLogin/PopupLogin";

function Login({ handlePopupLogin, popupLogin, handlePopupSignup }) {
  return (
    <PopupLogin
      handlePopupLogin={handlePopupLogin}
      popupLogin={popupLogin}
      handlePopupSignup={handlePopupSignup}
    />
  );
}

export default Login;
