import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons.jsx";
import Autoplay from "embla-carousel-react";
import { DishCard } from "./Card/Card.jsx";
import { Container } from "./style";
import {api} from '../../services/api.js';

export function EmblaCarousel({title}) {
  const [emblaRef, emblaApi] = useEmblaCarousel([Autoplay()]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get('/dishes');
        const filteredDishes = response.data.filter(dish => dish.category === title);
        setDishes(filteredDishes);
      } catch (error) {
        console.error("Erro ao buscar os pratos: ", error);
      }
    }

    fetchDishes();
  }, [title]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Container>
      <section className="embla">
        <h1>{title}</h1>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))
            ) : (
              <p>Carregando pratos...</p>
            )}
          </div>
          
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
