import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .card {
    background: ${({ theme }) => theme.GRADIENTS.BACKGROUND_200};
    object-fit: cover;
    height: 26rem;
    margin: 17.2rem 12.3rem;
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .imageCard {
    transform: translateY(-18%) translateX(-10%);
    position: absolute;
    overflow: hidden;
  }

  .textCard {
    padding-right: 10rem;
    width: 100%;
    text-align: right;
    h1 {
      font-size: 4rem;
      font-weight: 500;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    .card {
      gap: 2rem;
      height: 12rem;
      margin: 4.4rem 1.6rem 6.2rem 3.6rem;
      justify-content: space-between;
    }

    .contentCard {
      width: 10rem;
      height: 2rem;
    }

    .imageCard {
      transform: translateY(-0%) translateX(-16%);
      img {
        width: 19.1rem;
        height: 12rem;
      }
    }

    .textCard {
      padding-right: 0.8rem;
      padding-left: 6rem;
      padding-top: 2rem;
      max-width: 25rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      h1 {
        white-space: nowrap;
        font-size: 1.6rem;
        font-weight: 500;
      }

      p {
        text-align: left;
        font-size: 1rem;
      }
    }
  }
`;
