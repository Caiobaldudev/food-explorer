import React, { useEffect, useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { DishCard } from "../../components/Slide/Card/Card.jsx";
import { Container } from "./style.js";

const SearchResults = () => {
  const { searchResults } = useSearch();
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (searchResults.length > 0) {
      setAnimationClass("animeDown");
    } else {
      setAnimationClass("animeUp");
    }
  }, [searchResults]);

  return (
    <Container className={animationClass}>
      {searchResults.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </Container>
  );
};

export default SearchResults;
