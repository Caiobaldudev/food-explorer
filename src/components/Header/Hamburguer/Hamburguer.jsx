import { Link, useNavigate } from "react-router-dom";
import { Container, MenuMobile } from "./style";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useAuth } from "../../../hooks/auth";
import { USER_ROLE } from "../../../utils/roles";

export function Hamburguer({ setMenuOpen, isOpen = false }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = () => {
    return user.role === USER_ROLE.ADMIN;
  };

  function handleMenuOpen(isMenuOpen) {
    if (isMenuOpen) {
      setMenuOpen(true);
      activateBodyScroll(false);
    } else {
      setMenuOpen(false);
      activateBodyScroll(true);
    }
  }

  function activateBodyScroll(active) {
    const body = document.body;
    if (active) {
      body.style.overflow = "auto";
    } else {
      body.style.overflow = "hidden";
    }
  }

  const handleNewDishClick = () => {
    handleMenuOpen(false);
    navigate("/dishes/");
  };

  const handleSignOut = () => {
    signOut(); 
    if (location.pathname === "/dishes/") {
      navigate("/"); 
    }
    handleMenuOpen(false); 
  };

  return (
    <Container>
      <MenuMobile onClick={() => handleMenuOpen(true)}>
        <HiOutlineMenu />
      </MenuMobile>

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="header__menu">
          <button onClick={() => handleMenuOpen(false)}>
            <HiOutlineX size={24} />
          </button>
          <span>Menu</span>
        </div>
        <div className="content__menu">
          <label>
            <input
              type="search"
              placeholder="Busque por pratos ou ingredientes"
            />
          </label>
          <div className="menu__options">
            {isAdmin ? (
              <button onClick={handleNewDishClick}>
                Novo prato <div className="line"></div>
              </button>
            ) : (
              ""
            )}
            <button onClick={handleSignOut}>Sair</button>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </Container>
  );
}
