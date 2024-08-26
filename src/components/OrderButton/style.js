import styled from "styled-components";

export const Container = styled.button`
  padding: 1.2rem 4.6rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  align-items: center;

  > svg {
    margin-right: 0.8rem;
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
