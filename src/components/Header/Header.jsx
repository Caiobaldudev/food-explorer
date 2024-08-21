import React from "react";
import CustomLogoSvg from "../LogoSvg/LogoSvg";
import { GoSignOut } from "react-icons/go";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Container, InputWrapper, Logout } from "./style";
import Input from "../Input/Input";
import OrderButton from "../OrderButton/OrderButton";
import searchIcon from "../../assets/bloom.svg";

const Header = () => {
  const { signOut, user } = useAuth();
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <Container>
      <CustomLogoSvg
        imgColor="#065E7C"
        tColor="#f9f9f9"
        width="197px"
        height="31px"
      />
      <InputWrapper>
        <img src={searchIcon} alt="Search Icon" />
        <Input
          id="search"
          type="search"
          value={search}
          setValue={setSearch}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Busque por pratos ou ingredientes"
        />
      </InputWrapper>
      <OrderButton height="5.6rem" width="21.6rem" />
      <Logout>
            <GoSignOut onClick={signOut} />
          </Logout>
    </Container>
  );
};

export default Header;
