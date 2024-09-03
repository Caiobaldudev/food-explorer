import React, { useState } from "react";
import { Container, Form, StyledLink } from "./style";
import CustomLogoSvg from "../../components/LogoSvg/LogoSvg";
import { useAuth } from "../../hooks/auth";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api.js";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    await api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário Cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <div className="logoWrap animeLeft">
        <CustomLogoSvg
          imgColor="#065E7C"
          tColor="#f9f9f9"
          width="324px"
          height="48px"
        />
      </div>
      <Form className="animeRight">
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
        <Button title="Criar conta" height="4.8rem" onClick={handleSignUp} />
        <StyledLink to="/">Já tenho uma conta</StyledLink>
      </Form>
    </Container>
  );
};

export default SignUp;
