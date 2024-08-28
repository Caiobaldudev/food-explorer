import styled from "styled-components";
export const Container = styled.div`
  padding: 0rem 12.3rem 4.8rem 12.3rem;
  .embla {
    h1 {
      font-family: ${({ theme }) => theme.FONTS.Primary};
      font-size: 3.2rem;
      font-weight: 400;
      margin-bottom: 2.3rem;
    }
  }
  .embla {
    --slide-spacing: 2.7rem;
    --slide-size: 30rem;
  }
  .embla__viewport {
    overflow: hidden;
    position: relative;
  }
  .embla__container {
    backface-visibility: hidden;
    display: flex;
    gap: 2.7rem;
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
  }
  .embla__slide {
    flex: 0 0 var(--slide-size);
    padding-left: var(--slide-spacing);
  }

  .embla__button {
    -webkit-tap-highlight-color: rgba(192, 192, 192, 0.5);
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    touch-action: manipulation;
    display: inline-flex;
    text-decoration: none;
    cursor: pointer;
    border: 0;
    padding: 0;
    margin: 0;
    width: 4rem;
    height: 2.7rem;
    z-index: 1;
    border-radius: 50%;
    color: var(--text-body);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translateY(-50%);
  }
  .embla__button svg {
    z-index: 2;
  }

  .embla__button:disabled {
    color: rgb(101, 101, 101);
  }
  .embla__button--prev {
    top: 44%;
    left: 0;
  }

  .embla__button--prev::before {
    content: "";
    position: absolute;
    width: 0rem;
    height: 100vh;
    box-shadow: 10px 1px 1000px 140px rgba(0, 0, 0, 1);
  }

  .embla__button--next {
    top: 44%;
    right: 0;
  }

  .embla__button--next::before {
    content: "";
    position: absolute;
    width: 0rem;
    height: 100vh;
    box-shadow: 10px 1px 1000px 140px rgba(0, 0, 0, 1);
  }

  .embla__button__svg {
    width: 85%;
    height: 95%;
  }

  @media (max-width: 768px) {
    padding: 0rem 0rem 0rem 2.4rem;
    .embla {
      h1 {
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 2.4rem;
      }
    }

    .embla {
      --slide-spacing: 1.6rem;
      --slide-size: 21rem;
    }

    .embla__container {
      backface-visibility: hidden;
      display: flex;
      gap: 1.6rem;
      touch-action: pan-y pinch-zoom;
      margin-left: calc(var(--slide-spacing) * -1.5);
      margin-bottom: 2.5rem;
    }

    .embla__button__svg {
      display: none;
    }

    .embla__button--prev::before {
      display: none;
    }
    .embla__button--next::before {
      display: none;
    }
  }
`;
