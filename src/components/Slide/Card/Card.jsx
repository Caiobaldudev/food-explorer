import React, { useState } from "react";
import { AddButton, Container, FavButton, RemoveButton } from "./style";
import { MdFavoriteBorder } from "react-icons/md";
import { PiPencilSimple } from "react-icons/pi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Button } from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { USER_ROLE } from "../../../utils/roles";
import defaultImgDish from "../../../assets/default.svg"
import {api} from '../../../services/api.js';
import { useOrder } from '../../../contexts/OrderContext';

export function DishCard({ dish }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const { addToOrder } = useOrder();
  const imageUrl = dish?.image_id
    ? `${api.defaults.baseURL}/files/${dish.image_id}`
    : `${defaultImgDish}`;

  const isAdmin = user.role === USER_ROLE.ADMIN;

  const truncateDescription = (description) => {
    if (description.length > 65) {
      return description.substring(0, 65) + "..";
    }
    return description;
  };

  const handleAdd = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 5));
  };

  const handleRemove = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleInclude = () => {
    addToOrder(quantity); 
  };

  if (!dish) {
    return <p>Dish data is not available.</p>;
  }

  const handleEditDish = () => {
    navigate(`/dishes/edit/${dish.id}`);
  };

  const formattedQuantity = quantity.toString().padStart(2, "0");

  return (
    <Container>
      <FavButton>
        {isAdmin ? (
          <PiPencilSimple onClick={handleEditDish} />
        ) : (
          <MdFavoriteBorder />
        )}
      </FavButton>
      <div className="dishDescription">
        <img 
          src={dish.image_id ? `${imageUrl}` : `${defaultImgDish}`} 
          alt={dish.name || "Imagem do prato"} 
        />
        <button className="dishName" onClick={() => navigate(`/dishes/${dish.id}`)}>
          {dish.name || "Nome do prato"} &gt;
        </button>
        <p>{truncateDescription(dish.description || "Descrição do prato")}</p>
        <span className="dishPrice">{dish.price || "00,00"}</span>
        <div className="wrap-order">
          {!isAdmin && (
            <div className="order_varyButtons">
              <RemoveButton onClick={handleRemove} disabled={quantity === 1}>
                  <IoIosRemove />
                </RemoveButton>
                <span className="quantity">{formattedQuantity}</span>
                <AddButton onClick={handleAdd} disabled={quantity === 5}>
                  <IoIosAdd />
                </AddButton>
            </div>
          )}
          {!isAdmin && (
            <div className="wrap_button">
              <Button title="incluir" onClick={handleInclude}/>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
