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
`;
