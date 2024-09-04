import styled from "styled-components";

export const Container = styled.div.attrs((props) => ({}))`
  width: 30.4rem;
  height: 46.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  position: relative;
  display: flex;
  justify-content: center;

  .dishDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px black solid;
    border-radius: 0.8rem;
  }

  > .dishDescription img {
    top: 24px;
    width: 17.6rem;
    height: 17.6rem;
    margin-top: 2.4rem;
  }

  > .dishDescription {
    > .dishName {
      padding: 1.5rem;
      font-size: 2.4rem;
      font-weight: 700;
      width: 27rem;
      font-family: ${({ theme }) => theme.FONTS.Primary};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      white-space: nowrap;
    }
  }

  > .dishDescription p {
    padding: 0 2.4rem 1.5rem 2.4rem;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.24rem;
    text-align: center;
  }

  .dishPrice {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 3.2rem;
    padding-bottom: 1.5rem;
  }

  .wrap-order {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  .order_varyButtons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .quantity {
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    width: 2.4rem;
    height: 3rem;
    font-size: 2rem;
  }

  .wrap_button {
    & button {
      padding: 1.5rem 2.4rem;
    }
  }

  @media (max-width: 768px) {
    width: 21rem;
    height: 29.2rem;

    .wrap_button {
      button {
        padding: 0.8rem 6rem;
      }
    }

    .dishDescription img {
      width: 8.8rem;
      height: 8.8rem;
      margin-top: ${({ isAdmin }) => (isAdmin ? "6.4rem" : "2.4rem")};
    }

    > .dishDescription {
      width: 21rem;
      > .dishName {
        padding: 1.2rem;
        font-size: 1.4rem;
        font-weight: 500;
        width: 16.2rem;
      }
    }

    .dishDescription p {
      display: none;
    }

    .dishPrice {
      font-size: 1.6rem;
      font-weight: 400;
      padding-bottom: 1.2rem;
    }

    .wrap-order {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.6rem;
    }

    .quantity {
      font-size: 1.6rem;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

//botão
export const FavButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.8rem;

  > svg {
    color: #fff;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const RemoveButton = styled.button`
  > svg {
    font-size: 3rem;
    color: #fff;
  }
`;

export const AddButton = styled.button`
  > svg {
    font-size: 3rem;
    color: #fff;
  }
`;
