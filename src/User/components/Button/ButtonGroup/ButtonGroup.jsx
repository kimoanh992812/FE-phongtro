import { Space } from "antd";
import React from "react";
import ButtonSimple from "../ButtonSimple";
import "./ButtonGroup.scss";

export default function ButtonGroup() {
  return (
    <Space className='button-group' spacing={12} justify='center'>
      <ButtonSimple name='ĐĂNG TIN' modified='gradient-1 button' />
      <ButtonSimple name='TÌM KIẾM' modified='gradient-2 button' />
    </Space>
  );
}
