import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  input {
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    height: 4.8rem;
    width: 100%;
    padding: 1.6rem 1.4rem;
  }
`;
