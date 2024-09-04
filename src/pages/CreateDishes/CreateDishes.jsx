import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { Container, Button } from "./style";
import { IngredientTag } from "../../components/IngredientTag/IngredientTag";
import { api } from "../../services/api";
import uploadIcon from "../../assets/upload.svg";

export function CreateDish() {
  const [dishImage, setDishImage] = useState(null);
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      setNewIngredient("");
    }
  }

  function removeIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredients) => ingredients !== deleted)
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!dishName || !dishPrice) {
      return alert("Por favor, preencha os campos Nome e Preço!");
    }
    if (!dishCategory || dishCategory === "") {
      return alert("Selecione uma categoria válida para o prato!");
    }
    if (ingredients.length === 0) {
      return alert("Adicione pelo menos um ingrediente ao prato!");
    }
    try {
      const response = await api.post("/dishes", {
        image: dishImage,
        name: dishName,
        category: dishCategory,
        ingredients: ingredients,
        description: dishDescription,
        price: dishPrice,
      });

      const newDishId = response.data.id;

      if (dishImage && newDishId) {
        const formData = new FormData();
        formData.append("image", dishImage);
        await api.patch(`/dishes/${newDishId}/image`, formData);
      }

      alert("Prato criado com sucesso!");
      navigate(`/`);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        return alert("Prato já cadastrado! Tente outro prato.");
      }
      console.error("Erro ao criar prato:", error);
    }
  }

  function handleSetImage(e) {
    const file = e.target.files[0];
    setDishImage(file);
  }

  return (
    <Container>
      <section className="section_wrapper">
        <BackButton />
        <h1>Adicionar prato</h1>
        <form onSubmit={handleSubmit}>
          <div className="line_one">
            <div className="upload">
              <span>Imagem do Prato</span>
              <label htmlFor="dishImage">
                <img src={uploadIcon} alt="" />
                Selecionar imagem
              </label>
              <input
                type="file"
                id="dishImage"
                accept="image/png, image/jpeg"
                onChange={handleSetImage}
              />
            </div>
            <div className="name">
              <label htmlFor="dishName">Nome</label>
              <input
                type="text"
                id="dishName"
                placeholder="Ex.: Salada Ceasar"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
              />
            </div>
            <div className="category">
              <label htmlFor="dishCategory">Categoria</label>
              <select
                id="dishCategory"
                value={dishCategory}
                onChange={(e) => setDishCategory(e.target.value)}
              >
                <option value="">Selecione uma categoria</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </div>
          </div>
          <div className="line_two">
            <div className="tags">
              <label>Ingredientes</label>
              <div className="tags_wrap">
                {ingredients.map((ingredient, index) => (
                  <IngredientTag
                    key={index}
                    value={ingredient}
                    onClick={() => removeIngredient(ingredient)}
                  />
                ))}
                <IngredientTag
                  isNew
                  onChange={(e) => setNewIngredient(e.target.value)}
                  placeholder="Adicionar"
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>
            <div className="price">
              <label htmlFor="dishPrice">Preço</label>
              <input
                type="number"
                id="dishPrice"
                placeholder="R$ 00,00"
                value={dishPrice}
                onChange={(e) => setDishPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="line_three">
            <div className="description">
              <label htmlFor="dishDescription">Descrição:</label>
              <textarea
                id="dishDescription"
                value={dishDescription}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDishDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="button-container">
              <Button type="handleSubmit" onClick={handleSubmit}>
                Salvar alterações
              </Button>
            </div>
          </div>
        </form>
      </section>
    </Container>
  );
}
