import styled, { keyframes } from "styled-components";

const openDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px; 
    opacity: 1;
  }
`;

const closeUp = keyframes`
  from {
    max-height: 1000px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.COLORS.DARK_900};
  border-radius: 4px;
  padding: 1rem; 
  /* Estilo padrão */
  max-height: 0;
  opacity: 0;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;


  &.animeDown {
    animation: ${openDown} 0.3s ease-out forwards;
    max-height: 1000px;
    opacity: 1;
  }

  &.animeUp {
    animation: ${closeUp} 0.3s ease-out forwards;
    max-height: 0;
    opacity: 0;
  }
`;
