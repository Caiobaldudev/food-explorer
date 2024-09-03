import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: 0.8rem 0.8rem;
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.FONTS.Primary};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
