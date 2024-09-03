import styled from "styled-components";

export const ButtonC = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  font-family: ${({ theme }) => theme.FONTS.Primary};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;

  &:disabled {
    opacity: 0.5;
  }
`;
