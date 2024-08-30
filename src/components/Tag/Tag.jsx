import { Container } from "./style";

export function Tag({ title }) {
  return (
    <Container>
      {typeof title === 'string' ? title : 'Ingrediente desconhecido'}
    </Container>
  );
}
