import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: .8rem .8rem;
  border-radius: .5rem;
  font-family: ${({theme}) => theme.FONTS.Primary};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;