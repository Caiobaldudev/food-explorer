import styled from "styled-components";

export const Container = styled.div`
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    inset: 0;
    position: absolute;
    z-index: 9999;
    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &.open {
      transform: translateX(0);
    }

    .header__menu {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      width: 100%;
      height: 11.4rem;
      padding-left: 2.8rem;
    }

    & span {
      font-family: ${({ theme }) => theme.FONTS.Primary};
      font-size: 2.1rem;
      line-height: 0;
    }

    & button {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      line-height: 0;
    }
  }

  .content__menu {
    flex: 1;
    width: 100%;
    padding: 0rem 2.8rem;
    & input {
      margin-top: 3.6rem;
      width: 100%;
      padding: 1.6rem 0rem 1.6rem 5.2rem;
      background: url(../src/assets/VectorSearch.svg) no-repeat;
      background-position: 16px 50%;
      font-size: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      text-align: center;
      margin-bottom: 4.6rem;
    }

    .menu__options {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 3rem;

      button {
        font-family: ${({ theme }) => theme.FONTS.Primary};
        font-weight: 400;
        font-size: 2.4rem;
        width: 100%;
        text-align: start;
        line-height: 1;
      }
    }

    .line {
      padding-top: 3rem;
      opacity: 0.1;
      border-bottom: 1px white solid;
    }
  }
`;

export const MenuMobile = styled.button`
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.6rem;
  }

  @media (max-width: 2560px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
