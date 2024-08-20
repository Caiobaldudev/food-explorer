import React from 'react'
import { ButtonC } from "./style";

export const Button = ({ title, height, width, ...props }) => {
  function handleClick(event) {
    event.preventDefault()
    if (props.onClick) {
      props.onClick();
    }
  }
  return (
    <ButtonC type="submit" height={height} width={width} onClick={handleClick}>
      {title}
    </ButtonC>
  );
}

export default Button
