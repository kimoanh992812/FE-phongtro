import { Modal } from "antd";
import React from "react";
import FormSignup from "../FormSignup/FormSignup";

function PopupSignup({ handlePopupSignup, popupSignup }) {
  return (
    <Modal
      title='Signup'
      centered
      visible={popupSignup}
      onOk={(e) => handlePopupSignup(e, false)}
      onCancel={(e) => handlePopupSignup(e, false)}
      footer={false}>
      <FormSignup />
    </Modal>
  );
}

export default PopupSignup;
