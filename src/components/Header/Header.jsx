import React, { useState } from "react";
import { Container, InputWrapper, Logout, MobileReceipt } from "./style";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CustomLogoSvg from "../LogoSvg/LogoSvg";
import Input from "../Input/Input";
import { OrderButton } from "../OrderButton/OrderButton";
import searchIcon from "../../assets/bloom.svg";
import AdminLogoSvg from "../AdminLogoSvg/AdminLogoSvg";
import { PiReceiptBold } from "react-icons/pi";
import { Hamburguer } from "./Hamburguer/Hamburguer";
import { useOrder } from "../../contexts/OrderContext";
import { useSearch } from "../../contexts/SearchContext";
import { GoSignOut } from "react-icons/go";

const Header = () => {
  const { signOut, user } = useAuth();
  const { searchTerm, setSearchTerm, searchResults } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { orderCount } = useOrder();

  const location = useLocation();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const isAdmin = () => {
    return user.role === USER_ROLE.ADMIN;
  };

  const handleNewDishClick = () => {
    navigate("/dishes/");
  };

  const showSearchInput = location.pathname === "/"

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
     {showSearchInput && (  // Condição para exibir o input somente na rota "/Home"
        <InputWrapper>
          <img src={searchIcon} alt="Search Icon" />
          <Input
            id="search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busque por pratos ou ingredientes"
          />
        </InputWrapper>
      )}
      <div className="final">
        {isAdmin() ? (
          <button onClick={handleNewDishClick}>Novo Prato</button>
        ) : (
          <OrderButton count={orderCount} />
        )}
        <Logout>
          <GoSignOut onClick={handleSignOut} />
        </Logout>
      </div>
      {isAdmin() ? (
        <span></span>
      ) : (
        <MobileReceipt>
          <span>{orderCount}</span>
          <PiReceiptBold />
        </MobileReceipt>
      )}
    </Container>
  );
};

export default Header;
