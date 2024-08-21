import React from "react";
// auth
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
//style/icons
import { OButton } from "./style";
import { PiReceipt } from "react-icons/pi";

const OrderButton = ({ height, width, ...props }) => {
  const { user } = useAuth();

  const isAdmin = () => {
    return user.role === USER_ROLE.ADMIN;
  };

  return (
    <OButton height={height} width={width}>
      {isAdmin() ? (
        <p>Novo prato</p>
      ) : (
        <>
          <PiReceipt />
          <p>
            Pedidos <span className="count">(0)</span>
          </p>
        </>
      )}
    </OButton>
  );
};

export default OrderButton;
