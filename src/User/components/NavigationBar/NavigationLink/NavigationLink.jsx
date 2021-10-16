import { Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function NavigationLink() {
  const menu = [
    {
      path: "/",
      name: "Blog",
    },
    {
      path: "/",
      name: "Báo giá",
    },
  ];

  return (
    <Space size={70}>
      {menu.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            {item.name}
          </Link>
        );
      })}
    </Space>
  );
}

export default NavigationLink;
