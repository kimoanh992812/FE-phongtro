import { Form, Select } from "antd";
import React from "react";

const optionsType = [
  {
    label: "Căn Hộ",
    value: "canho",
  },
  {
    label: "Nhà",
    value: "nha",
  },
];

const optionsDistrict = [
  {
    label: "Hải Châu",
    value: "haichau",
  },
  {
    label: "Hoàng Sa",
    value: "hoangsa",
  },
  {
    label: "Cẩm lệ",
    value: "camle",
  },
  {
    label: "Thanh Khê",
    value: "thanhkhe",
  },
  {
    label: "Ngũ Hành Sơn",
    value: "nguhanhson",
  },
  {
    label: "Hòa Vang",
    value: "hoavang",
  },
  {
    label: "Sơn Trà",
    value: "sontra",
  },
  {
    label: "Liên Chiểu",
    value: "lienchieu",
  },
];

function FilterList() {
  return (
    <>
      <Form.Item label='LOẠI BẤT ĐỘNG SẢN' name='type'>
        <Select
          mode='multiple'
          showArrow
          style={{ width: "100%" }}
          options={optionsType}
        />
      </Form.Item>

      {/* District */}
      <Form.Item label='ĐỊA ĐIỂM THÀNH PHỐ' name='district'>
        <Select
          mode='multiple'
          showArrow
          style={{ width: "100%" }}
          options={optionsDistrict}
        />
      </Form.Item>
    </>
  );
}

export default FilterList;
