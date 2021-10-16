import { Modal } from "antd";
import React from "react";
import FormLogin from "../FormLogin/FormLogin";

function PopupLogin({ handlePopupLogin, popupLogin, handlePopupSignup }) {
  return (
    <Modal
      title='Login'
      centered
      visible={popupLogin}
      onOk={(e) => handlePopupLogin(e, false)}
      onCancel={(e) => handlePopupLogin(e, false)}
      footer={false}>
      <FormLogin
        handlePopupSignup={handlePopupSignup}
        handlePopupLogin={handlePopupLogin}
      />
    </Modal>
  );
}

export default PopupLogin;
