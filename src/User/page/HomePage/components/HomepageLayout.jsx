import { Col, Row } from "antd";
import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import HomepageContent from "./HomepageContent";

function HomepageLayout() {
  return (
    <Row justify='center' style={{ paddingTop: "2rem" }}>
      <Col span={4}>
        <SideBar />
      </Col>
      <Col span={14}>
        <HomepageContent />
      </Col>
    </Row>
  );
}

export default HomepageLayout;
