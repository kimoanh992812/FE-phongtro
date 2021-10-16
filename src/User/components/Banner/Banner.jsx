import { PhoneFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import ButtonGroup from "../Button/ButtonGroup/ButtonGroup";
import "./Banner.scss";

function Banner() {
  return (
    <section className='banner'>
      <Row className='banner-container'>
        <Col span={18} offset={3}>
          <h2>Thuecanho.com</h2>
          <p>
            Expat service. Free of comission. Find your next home for rent with
            us in DaNang.
          </p>
          <p>
            <PhoneFilled rotate='90' />
            0989 511 754
          </p>
          <ButtonGroup />
        </Col>
      </Row>
    </section>
  );
}

export default Banner;
