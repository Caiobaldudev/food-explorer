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

  .final {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    white-space: nowrap;
    button:first-child {
      width: 100%;
      font-family: ${({ theme }) => theme.FONTS.Primary};
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border: 0;
      padding: 1.2rem 6.8rem;
      &:disabled {
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 1024px) {
    #search {
      padding: 1.6rem 4rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 11.4rem;
    padding: 0 2.8rem;
    display: flex;
    justify-content: space-between;
    .final {
      display: none;
    }
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

  @media (max-width: 1024px) {
    img {
      position: absolute;
      width: 2rem;
      height: 2rem;
      margin: 1.4rem 1.1rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileReceipt = styled.button`
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.6rem;
    position: relative;
  }

  > span {
    position: absolute;
    color: white;
    padding-top: 0.2rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    z-index: 1;
    margin: -0.6rem 1.3rem 2rem;
  }

  @media (max-width: 2560px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Logout = styled.button`
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
