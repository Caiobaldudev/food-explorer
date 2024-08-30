import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { Container, Button } from "./style";
import { IngredientTag } from "../../components/IngredientTag/IngredientTag";
import { api } from "../../services/api";
import uploadIcon from "../../assets/upload.svg";

export function EditDish() {
  const { id } = useParams();
  const [dishImage, setDishImage] = useState(null);
  const [dishName, setDishName] = useState("");
  const [dishCategory, setDishCategory] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        const dish = response.data;

        setDishImage(dish.image_id ? dish.image_id : null);
        setDishName(dish.name);
        setDishCategory(dish.category);
        const correctedPrice = dish.price.toString().replace(",", ".");
        setDishPrice(correctedPrice);
        setDishDescription(dish.description);
        setIngredients(dish.ingredients.map((ingredient) => ingredient.name));
      } catch (error) {
        console.error("Erro ao buscar o prato:", error);
      }
    }

    fetchDish();
  }, [id]);

  function handleAddIngredient() {
    if (newIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      setNewIngredient("");
    }
  }

  function removeIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!dishName || !dishPrice) {
      return alert("Por favor, preencha os campos Nome e Preço!");
    }
    if (ingredients.length === 0) {
      return alert("Adicione pelo menos um ingrediente ao prato!");
    }
    try {
      await api.put(`/dishes/${id}`, {
        name: dishName,
        category: dishCategory,
        ingredients: ingredients,
        description: dishDescription,
        price: dishPrice,
        image_id: dishImage ? dishImage : undefined,
      });

      if (dishImage instanceof File) {
        const formData = new FormData();
        formData.append("image", dishImage);
        await api.patch(`/dishes/${id}/image`, formData);
      }

      alert("Prato atualizado com sucesso!");
      navigate(`/`);
    } catch (error) {
      console.error("Erro ao atualizar prato:", error);
    }
  }

  async function handleDelete() {
    if (window.confirm("Tem certeza que deseja excluir este prato?")) {
      try {
        await api.delete(`/dishes/${id}`);
        alert("Prato excluído com sucesso!");
        navigate(`/`);
      } catch (error) {
        console.error("Erro ao excluir prato:", error);
      }
    }
  }

  function handleSetImage(e) {
    const file = e.target.files[0];
    if (file) {
      setDishImage(file);
    }
  }

  return (
    <Container>
      <section className="section_wrapper">
        <BackButton />
        <h1>Editar prato</h1>
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
                step="0.01"
                min="0"
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
              <Button type="button" className="delete-button" onClick={handleDelete}>
                Excluir prato
              </Button>
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
