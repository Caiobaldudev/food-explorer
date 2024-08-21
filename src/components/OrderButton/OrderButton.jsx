import React from "react";
import { OButton } from "./style";
import { PiReceipt } from "react-icons/pi";

const OrderButton = ({ height, width, ...props }) => {
  return (
    <OButton height={height} width={width}>
      <PiReceipt />
      <p>
        Pedidos <span className="count">(0)</span>
      </p>
    </OButton>
  );
};

export default OrderButton;
