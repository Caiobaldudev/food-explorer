import { Container } from "./style";
import { PiReceipt } from "react-icons/pi";

export function OrderButton() {
  return (
    <Container type="button">
      <PiReceipt />
      <p>
        Pedidos <span className="count">(0)</span>
      </p>
    </Container>
  );
}
