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

export function DishCard({ dish }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const imageUrl = `${api.defaults.baseURL}/files/${dish.image_id}`;

  const isAdmin = user.role === USER_ROLE.ADMIN;

  const truncateDescription = (description) => {
    if (description.length > 65) {
      return description.substring(0, 65) + "..";
    }
    return description;
  };

  if (!dish) {
    return <p>Dish data is not available.</p>;
  }

  const handleEditDish = () => {
    navigate(`/dishes/${dish.id}`);
  };

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
              <RemoveButton>
                <IoIosRemove />
              </RemoveButton>
              <span className="quantity">01</span>
              <AddButton>
                <IoIosAdd />
              </AddButton>
            </div>
          )}
          {!isAdmin && (
            <div className="wrap_button">
              <Button title="incluir" />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
