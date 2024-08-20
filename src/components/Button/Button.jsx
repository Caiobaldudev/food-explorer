import React from 'react'
import { ButtonC } from "./style";

export const Button = ({ title, height, width }) => {

  return (
    <ButtonC type="button" height={height} width={width}>
      {title}
    </ButtonC>
  );
}

export default Button
