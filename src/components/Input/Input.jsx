import React from "react";
import { Container } from "./style";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </Container>
  );
};

export default Input;
