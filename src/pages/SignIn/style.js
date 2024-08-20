import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 0 10.8rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  grid-column: 2;
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
    margin-bottom: 3.2rem;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
`;
