import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 0.8rem;
  padding: 0.8rem 1.6rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    > svg {
      color: ${({ theme, $isNew }) =>
        $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
  }

  > input {
    max-height: 4.8rem;
    width: fit-content;
    white-space: nowrap;
    display: inline;
    overflow: hidden;
    font-family: ${({ theme }) => theme.FONTS.Secondary};
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
