import { Button } from "antd";
import React from "react";

function ButtonSimple({ name, modified }) {
  return (
    <Button shape='round' size='large' className={`${modified}`}>
      {name}
    </Button>
  );
}

export default ButtonSimple;
