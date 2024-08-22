import React, { useState, useEffect } from "react";
import BurguersCard from "../../components/BurguersCard/BurguersCard";
import { EmblaCarousel } from "../../components/Slide/EmblaCarousel";
import { Container } from "./style";

export function Home() {

  return (
    <Container>
      <BurguersCard />
      <EmblaCarousel title="Refeições" />
      <EmblaCarousel title="Sobremesas" />
      <EmblaCarousel title="Bebidas" />

    </Container>
  );
}
