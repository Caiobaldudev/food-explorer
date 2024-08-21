import React from "react";
//estilos
import { Container, InputWrapper, Logout } from "./style";
// auth
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
// icons
import { GoSignOut } from "react-icons/go";
// navigate
import { useNavigate } from "react-router-dom";
// components
import CustomLogoSvg from "../LogoSvg/LogoSvg";
import Input from "../Input/Input";
import OrderButton from "../OrderButton/OrderButton";
import searchIcon from "../../assets/bloom.svg";
import AdminLogoSvg from "../AdminLogoSvg/AdminLogoSvg";

const Header = () => {
  const { signOut, user } = useAuth();
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const isAdmin = () => {
    return user.role === USER_ROLE.ADMIN;
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      {isAdmin() ? (
        <AdminLogoSvg
          width="197px"
          height="39px"
          imgColor="#065E7C"
          tColor="#f9f9f9"
        />
      ) : (
        <CustomLogoSvg
          imgColor="#065E7C"
          tColor="#f9f9f9"
          width="197px"
          height="31px"
        />
      )}
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
