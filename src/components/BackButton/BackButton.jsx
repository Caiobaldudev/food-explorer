import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from "./style";
import leftArrow from '../../assets/left_arrw.svg';

export function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <Container type="button" onClick={handleGoBack}>
      <img src={leftArrow} alt="Seta para esquerda" />
      voltar
    </Container>
  );
}