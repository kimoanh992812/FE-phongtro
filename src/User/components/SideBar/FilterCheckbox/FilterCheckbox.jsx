import { Checkbox, Form } from "antd";
import React from "react";

function FilterCheckbox() {
  const options = [
    {
      label: "Trống",
      value: "none",
    },
    {
      label: "Được trang bị nội thất",
      value: "have",
    },
  ];

  return (
    <>
      <Form.Item label='NỘI THẤT' name='grandma'>
        <Checkbox.Group options={options} />
      </Form.Item>
    </>
  );
}

export default FilterCheckbox;
