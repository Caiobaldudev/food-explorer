import React, { useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import BurguersCard from "../../components/BurguersCard/BurguersCard";
import { EmblaCarousel } from "../../components/Slide/EmblaCarousel";
import SearchResults from "../../components/SearchResults/SearchResults";
import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <SearchResults />

      <BurguersCard />
      <EmblaCarousel title="Refeições" />
      <EmblaCarousel title="Sobremesas" />
      <EmblaCarousel title="Bebidas" />
    </Container>
  );
}
