import React from "react";
import { Container } from "./style";
import CustomLogoSvg from "../LogoSvg/LogoSvg";

const AppFooter = () => {
  return (
    <Container>
      <CustomLogoSvg
        imgColor="#4D585E"
        tColor="#4D585E"
        width="186px"
        height="30px"
      />
      <p>&copy; 2024 - Todos os direitos reservados.</p>
    </Container>
  );
};

export default AppFooter;
