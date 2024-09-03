import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./style";

export function IngredientTag({ isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus size={14} /> : <FiX size={14} />}
      </button>
    </Container>
  );
}
