import { DownloadOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import React from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import FilterDistance from "./FilterDistance/FilterDistance";
import FilterList from "./FilterList/FilterList";
import "./SideBar.scss";

function SideBar() {
  const [form] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Form layout='vertical' onFinish={handleSubmit} form={form}>
      <FilterList />
      <FilterDistance />
      <FilterCheckbox />
      <Form.Item>
        <Button htmlType='submit' shape='round' type='primary' size='large'>
          <DownloadOutlined />
          Search
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SideBar;
