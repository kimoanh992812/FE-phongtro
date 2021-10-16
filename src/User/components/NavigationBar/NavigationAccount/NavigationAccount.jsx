import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

function NavigationAccount() {
  return (
    <>
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    </>
  );
}

export default NavigationAccount;
