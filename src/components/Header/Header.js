import React, { Component } from "react";
import BrandLogo from "../../assets/logo.png";
import styled from "styled-components";
import { Navbar, NavbarBrand } from "reactstrap";

const Logo = styled.img`
  height: 10vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 3vw;
`;

const NavBar = styled(Navbar)`
  display: flex;
  justify-content: center;
  background-color: #191970;
  color: #933594;
  width: 100%;
  padding: 0;
`;

class Header extends Component {
  render() {
    return (
      <div>
        <NavBar expand="md">
          <Container>
            <NavbarBrand>
              <Logo src={BrandLogo} alt="NewsFeed`" />
            </NavbarBrand>
          </Container>
        </NavBar>
      </div>
    );
  }
}

export default Header;
