import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  padding: 2.4rem 12.3rem;

  #search {
    padding: 1.6rem 13.7rem;
    padding-right: 0;
    margin-top: 0;
    background-image: url("../../assets/search.png") no-repeat;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  min-width: 0;

  img {
    position: absolute;
    width: 2rem;
    height: 2rem;
    margin: 1.4rem 10.1rem;
  }
`;

export const Logout = styled.button`
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
