import React from "react";
import { Container } from "./style";
import hamburger from "../../assets/hamburger.svg";

const BurguersCard = () => {
  return (
    <Container>
      <div className="card">
        <div className="contentCard"></div>
        <div className="imageCard">
          <img src={hamburger} alt="sweet burger img" />
        </div>
        <div className="textCard">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
    </Container>
  );
};

export default BurguersCard;
