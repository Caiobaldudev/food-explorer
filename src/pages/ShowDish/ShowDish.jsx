import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container, Section } from "./style";
import { BackButton } from "../../components/BackButton/BackButton";
import { Tag } from "../../components/Tag/Tag";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import defaultImgDish from "../../assets/default.svg";
import { AddButton, RemoveButton } from "./style.js";
//
import { useAuth } from "../../hooks/auth.jsx";
import { USER_ROLE } from "../../utils/roles.js";
import { api } from "../../services/api.js";
import { useOrder } from "../../contexts/OrderContext";

export function ShowDish() {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToOrder } = useOrder();
  const { user } = useAuth();
  const imageUrl = dish?.image_id
    ? `${api.defaults.baseURL}/files/${dish.image_id}`
    : `${defaultImgDish}`;
  const isAdmin = user.role === USER_ROLE.ADMIN;

  React.useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        setDish(response.data);
      } catch (error) {
        console.error("Erro ao buscar o prato: ", error);
      }
    }

    fetchDish();
  }, [id]);

  const handleAdd = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 5));
  };

  const handleRemove = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  if (!dish) {
    return <p>Carregando prato...</p>;
  }

  const formattedQuantity = quantity.toString().padStart(2, "0");

  const handleInclude = () => {
    addToOrder(quantity);
  };

  return (
    <Container>
      <div className="back_button">
        <BackButton />
      </div>
      <Section>
        <div className="left__content">
          <img src={imageUrl} alt={dish.name || "Imagem do prato"} />
        </div>
        <div className="dish__description">
          <h1>{dish.name || "Nome do prato"}</h1>
          <p>{dish.description || "Descrição do prato"}</p>
          <div className="dish__ingredients">
            {dish.ingredients &&
              dish.ingredients.map((ingredient, index) => (
                <Tag key={index} title={ingredient.name} />
              ))}
          </div>
          <div className="wrapOrderSDish">
            {isAdmin ? (
              ""
            ) : (
              <div className="quantityButtons">
                <RemoveButton onClick={handleRemove} disabled={quantity === 1}>
                  <IoIosRemove />
                </RemoveButton>
                <span className="quantity">{formattedQuantity}</span>
                <AddButton onClick={handleAdd} disabled={quantity === 5}>
                  <IoIosAdd />
                </AddButton>
              </div>
            )}
            <div className="OButton">
              {isAdmin ? (
                <Button
                  title="Editar Prato"
                  onClick={() => navigate(`/dishes/edit/${dish.id}`)}
                />
              ) : (
                <Button
                  title={`incluir · R$ ${dish.price}`}
                  onClick={handleInclude}
                />
              )}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
