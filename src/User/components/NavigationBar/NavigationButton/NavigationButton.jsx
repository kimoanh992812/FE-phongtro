import { Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./NavigationButton.scss";

function NavigationButton({ handlePopupLogin, handlePopupSignup }) {
  return (
    <Space size={70}>
      <Link to='/' onClick={(e) => handlePopupLogin(e, true)}>
        Đăng Nhập
      </Link>
      <Link to='/' onClick={(e) => handlePopupSignup(e, true)}>
        {" "}
        Đăng Ký
      </Link>
    </Space>
  );
}

export default NavigationButton;
