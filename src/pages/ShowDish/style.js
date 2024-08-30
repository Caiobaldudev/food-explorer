import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  padding: 3.2rem 12.1rem 0rem 12.1rem;

  @media (max-width: 768px) {
    gap: 1.6rem;
    padding: 1.6rem 5.6rem 3.35rem 5.6rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 4.8rem;
  .left__content {
    object-fit: cover;
    > img {
      width: 39rem;
      height: 39rem;
    }
  }
  .dish__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 69rem;
    gap: 2.4rem;
    h1 {
      font-size: 4rem;
      font-weight: 500;
    }
    p {
      font-size: 2.4rem;
    }
  }
  .quantityButtons {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    > span {
      width: 2.4rem;
      height: 2.4rem;
      font-size: 2rem;
      font-family: ${({ theme }) => theme.FONTS.Secondary};
    }
  }

  .dish__ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2rem;
    }

  .wrapOrderSDish {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 3.3rem;
  }
  .OButton {
    > button {
      font-size: 1.4rem;
      padding: 1.2rem 2.4rem;
    }
  }

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
    flex-direction: column;
    gap: 1.6rem;
    .left__content {
      > img {
        width: 37rem;
        height: 37rem;
      }
    }

    .dish__description {
      align-items: center;
      max-width: auto;
      h1 {
        font-size: 2.7rem;
        font-weight: 500;
      }

      p {
        font-size: 1.6rem;
        text-align: center;
      }
    }

    .dish__ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 2.4rem;
      justify-content: center;
    }
  }

  .wrapOrderSDish {
    margin-top: 2.4rem;
    margin-bottom: 2rem;
    gap: 1.6rem;
    .quantity {
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      font-size: 2.2rem;
    }
  }
`;

export const RemoveButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
  }
`;

export const AddButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #fff;
  }
`;
