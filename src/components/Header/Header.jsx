import React, { useState } from "react";
//estilos
import { Container, InputWrapper, Logout, MobileReceipt } from "./style";
// auth
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
// icons
import { GoSignOut } from "react-icons/go";
// navigate
import { Link, useNavigate } from "react-router-dom";
// components
import CustomLogoSvg from "../LogoSvg/LogoSvg";
import Input from "../Input/Input";
import { OrderButton } from "../OrderButton/OrderButton";
import searchIcon from "../../assets/bloom.svg";
import AdminLogoSvg from "../AdminLogoSvg/AdminLogoSvg";
import { PiReceiptBold } from "react-icons/pi";
import { Hamburguer } from "./Hamburguer/Hamburguer";

const Header = () => {
  const { signOut, user } = useAuth();
  const [search, setSearch] = React.useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  

  const isAdmin = () => {
    return user.role === USER_ROLE.ADMIN;
  };

  const handleNewDishClick = () => {
    navigate("/dishes/");
  };

  return (
    <Container>
      <Hamburguer setMenuOpen={setMenuOpen} isOpen={menuOpen} />
      {isAdmin() ? (
        <Link to="/">
          <AdminLogoSvg
            width="197px"
            height="39px"
            imgColor="#065E7C"
            tColor="#f9f9f9"
          />
        </Link>
      ) : (
        <Link to="/">
          <CustomLogoSvg
            imgColor="#065E7C"
            tColor="#f9f9f9"
            width="197px"
            height="31px"
          />
        </Link>
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
      <div className="final">
        {isAdmin() ? (
          <button onClick={handleNewDishClick}>Novo Prato</button>
        ) : (
          <OrderButton />
        )}
        <Logout>
          <GoSignOut onClick={signOut} />
        </Logout>
      </div>

      {isAdmin() ? (
        <span></span>
      ) : (
        <MobileReceipt>
          <span>0</span>
          <PiReceiptBold />
        </MobileReceipt>
      )}
    </Container>
  );
};

export default Header;
