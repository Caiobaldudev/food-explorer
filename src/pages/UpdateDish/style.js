import styled from "styled-components";

export const Container = styled.div`
  section {
    padding: 4rem 12.3rem 4rem 12.3rem;
    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding: 2.4rem 0rem 3.2rem 0rem;
      font-size: 3.2rem;
      font-weight: 400;
    }
    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }
  }

  .line_one,
  .line_two {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 3.2rem;
  }

  .upload {
    display: flex;
    flex-direction: column;
    width: 100%;
    > span {
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
    input[type="file"] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
      width: 100%;
      cursor: pointer;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      font-family: ${({ theme }) => theme.FONTS.Primary};
      font-size: 1.4rem;
      border-radius: 0.8rem;
      position: relative;
      img {
        margin-right: 1rem;
      }
    }
  }

  .name,
  .category,
  .tags,
  .price {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    > label {
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
    > input,
    > select {
      height: 4.8rem;
      width: auto;
      flex-grow: 1;
      padding-left: 1.4rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
  .upload {
    width: 60%;
  }

  .name {
    width: 150%;
  }
  .category {
    > select {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
    }
  }

  .tags_wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    align-items: center;
    padding: 0.6rem 0.8rem;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;
  }

  .tags {
    display: flex;
    flex-direction: column;
    width: 360%;
  }

  .line_three {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.2rem;

    > label {
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
    > textarea {
      height: 17.2rem;
      width: 100%;
      resize: none;
      padding: 1.4rem;
      font-family: ${({ theme }) => theme.FONTS.Secondary};
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  .button-container {
    gap: 3.2rem;
    display: flex;
    align-self: flex-end;
  }

  .delete-button {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (max-width: 768px) {
    section {
      padding: 1.1rem 3.2rem 2.4rem 3.2rem;
      > h1 {
        content: "Novo prato";
        padding: 2.2rem 0rem 3.6rem 0rem;
        font-size: 3.2rem;
        font-weight: 400;
      }
      > form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
      }
    }
    .upload {
      display: flex;
      flex-direction: column;
      width: 100%;
      label {
        justify-content: start;
        padding-left: 3.2rem;
        width: 100%;
        img {
          margin-right: 0.8rem;
        }
      }
    }

    .name {
      width: 100%;
    }

    .category {
      width: 100%;
    }
    .line_one,
    .line_two,
    .line_three {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    .tags_wrap {
      width: 100%;
    }
    .tags {
      width: 100%;
    }

    .price {
      width: 100%;
    }

    .description {
      width: auto;
    }
    .button-container {
      width: 100%;
      align-self: center;
    }
  }
`;

export const Button = styled.button`
  width: 17.2rem;
  height: 4.8rem;
  font-family: ${({ theme }) => theme.FONTS.Primary};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  &:disabled {
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
