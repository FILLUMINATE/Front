import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../components/Header/LoginModal";
import { UserContext } from "../context/UserContext";
import Text from "../components/common/Text";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HeaderBox>
        <NavBar>
          <Link to="/">
            <Logo src="/images/Logo.svg" alt="로고" />
          </Link>
          <StyledNavLink to="/" $activeClassName="active">
            HOME
          </StyledNavLink>
          <StyledNavLink to="/about" $activeClassName="active">
            ABOUT
          </StyledNavLink>
          <StyledNavLink to="/categories" $activeClassName="active">
            CATEGORIES
          </StyledNavLink>
          <StyledNavLink to="/project" $activeClassName="active">
            PROJECT
          </StyledNavLink>
        </NavBar>

        {!isLoggedIn && (
          <LoginIcon onClick={openModal}>
            <StyledIcon src={"/images/Icon/PersonIcon.svg"} />
          </LoginIcon>
        )}

        {isModalOpen && (
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </HeaderBox>
    </>
  );
}

export default Header;

const HeaderBox = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 4.375rem;

  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.img`
  padding: 0 2rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.125rem;
  color: #d9d9d9;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: #000;
    transition: 0.3s ease;
    cursor: pointer;
  }

  &.active {
    color: #000;
  }
`;

const LoginIcon = styled(Link)``;

const StyledIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin-right: 4rem;
`;
const AdminMenuIcon = styled.div``;
