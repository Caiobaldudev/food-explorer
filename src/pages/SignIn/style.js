import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 0 10.8rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 7.3rem;
    .logoWrap {
      margin: 0 auto;
    }
  }

  .animeLeft {
    transform: translateX(-20px);
    opacity: 0;
    animation: animeLeft 2s forwards;
  }

  @keyframes animeLeft {
    to {
      transform: initial;
      opacity: initial;
    }
  }

  .animeRight {
    transform: translateX(20px);
    opacity: 0;
    animation: animeRight 2s forwards;
  }

  @keyframes animeRight {
    to {
      transform: initial;
      opacity: 1;
    }
  }
`;

export const Form = styled.form`
  grid-column: 3;
  justify-self: center;
  font-family: ${({ theme }) => theme.FONTS.Secondary};
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  width: 47.6rem;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  gap: 3.2rem;
  font-weight: 500;
  border-radius: 1.6rem;
  padding: 6.4rem;

  h1 {
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    width: 100%;
    padding: 0 4.7rem;
    h1 {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
`;
