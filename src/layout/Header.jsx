import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderBox>
        <NavBar>
          <Logo src="/images/Logo.svg" alt="로고" />
          <StyledNavLink to="/" activeClassName="active">
            HOME
          </StyledNavLink>
          <StyledNavLink to="/about" activeClassName="active">
            ABOUT
          </StyledNavLink>
          <StyledNavLink to="/categories" activeClassName="active">
            CATEGORIES
          </StyledNavLink>
          <StyledNavLink to="/project" activeClassName="active">
            PROJECT
          </StyledNavLink>
        </NavBar>
        <StyledIconBox
          data="./images/Icon/PersonIcon.svg"
          type="image/svg+xml"
        />
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

  &:hover {
    color: #000;
    transition: 0.3s ease;
    cursor: pointer;
  }

  &.active {
    color: #000;
  }
`;

const StyledIconBox = styled.object`
  width: 30px;
  height: 30px;
  color: #d9d9d9;
  margin: 0 2rem;
  &:hover {
    filter: invert(100%);
    transition: 0.3s ease;
    cursor: pointer;
  }
`;
