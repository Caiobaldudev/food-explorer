import { Container } from "./style";
import { PiReceipt } from "react-icons/pi";

export function OrderButton({ count }) {
  return (
    <Container type="button">
      <PiReceipt />
      <p>
        Pedidos <span className="count">({count})</span>
      </p>
    </Container>
  );
}
