import styled from "styled-components";

export const Container = styled.button `
  
  width: 10.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.FONTS.Primary};
  font-weight: 500;
  font-size: 2.4rem;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  height: 3.4rem;
  border: 0;
  gap: 1rem;

`;
