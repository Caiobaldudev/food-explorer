import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  width: 100%;
  display: flex;
  padding: 2.4rem 12.3rem;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  left: 0;

  p {
    font-size: 1.4rem;
  }
`;
