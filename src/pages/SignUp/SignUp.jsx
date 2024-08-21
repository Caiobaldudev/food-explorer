import React, { useState } from "react";
import { Container, Form, StyledLink } from "./style";
import CustomLogoSvg from "../../components/LogoSvg/LogoSvg";
import { useAuth } from "../../hooks/auth";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <Container>
      <CustomLogoSvg
      imgColor="#065E7C" 
      tColor="#f9f9f9"    
      width="324px"        
      height="48px"
      />
      <Form>
        <h1>Crie sua conta</h1>
        <Input
          id="name"
          type="text"
          label="Name"
          value={name}
          setValue={setName}
          onChange={(e) => setName(e.target.value)}
          placeholder="Exemplo: Maria da Silva"
          required
        />
        <Input
          id="email"
          type="text"
          label="Email"
          value={email}
          setValue={setEmail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          required
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          value={password}
          setValue={setPassword}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
          required
        />
        <Button title="Entrar" height="4.8rem" onClick={handleSignIn} />
        <StyledLink to="/">Já tenho uma conta</StyledLink>
      </Form>
    </Container>
  );
};

export default SignUp;
