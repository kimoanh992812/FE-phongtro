import React from "react";
import PopupSignup from "./PopupSignup/PopupSignup";

function Signup({ handlePopupSignup, popupSignup }) {
  return (
    <PopupSignup
      handlePopupSignup={handlePopupSignup}
      popupSignup={popupSignup}
    />
  );
}

export default Signup;
