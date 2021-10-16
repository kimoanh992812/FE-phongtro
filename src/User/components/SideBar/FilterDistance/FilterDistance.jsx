import React from "react";
import { Form, InputNumber, Space } from "antd";

function FilterDistance() {
  return (
    <>
      {/* Price */}
      <Form.Item label='GIÁ'>
        <Space>
          <Form.Item name='minPrice' initialValue={1}>
            <InputNumber
              min={0}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>

          <Form.Item name='maxPrice' initialValue={1}>
            <InputNumber
              min={0}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
        </Space>
      </Form.Item>

      {/*Size  */}
      <Form.Item label='KÍCH THƯỚC'>
        <Space>
          <Form.Item name='minSize' initialValue={1}>
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item name='maxSize' initialValue={1}>
            <InputNumber min={1} />
          </Form.Item>
        </Space>
      </Form.Item>

      {/* Number bedRoom */}
      <Form.Item label='SỐ PHÒNG NGỦ'>
        <Space>
          <Form.Item name='minBedRoom' initialValue={1}>
            <InputNumber min={1} placeholder='Min' />
          </Form.Item>

          <Form.Item name='maxBedRoom' initialValue={1}>
            <InputNumber min={1} placeholder='Max' />
          </Form.Item>
        </Space>
      </Form.Item>
    </>
  );
}

export default FilterDistance;
