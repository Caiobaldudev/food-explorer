import styled from "styled-components";

export const OButton = styled.button`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: ${({ theme }) => theme.FONTS.Primary};
    font-weight: 400;
  }

  > svg {
    margin-right: 0.8rem;
    font-size: 2.6rem;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;
