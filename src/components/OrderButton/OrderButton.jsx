import React from "react";
//navigate
import { useNavigate } from "react-router-dom";
// auth
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
//style/icons
import { OButton } from "./style";
import { PiReceipt } from "react-icons/pi";

const OrderButton = ({ height, width, ...props }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user.role === USER_ROLE.ADMIN;

  const handleNewDishClick = () => {
    navigate("/dishes/");
  };

  return (
    <OButton
      height={height}
      width={width}
      onClick={isAdmin ? handleNewDishClick : null}
    >
      {isAdmin ? (
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
