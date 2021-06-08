import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [sideNavStatus, setSideNavStatus] = useState(false);
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <Menugroup>
        <div>Model S</div>
        <div>Model X</div>
        <div>Model Y</div>
        <div>Model 3</div>
      </Menugroup>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIconContainer>
          <MenuIcon
            fontSize="large"
            onClick={() => {
              setSideNavStatus(true);
            }}
          />
        </MenuIconContainer>
      </RightMenu>
      <SideNav status={sideNavStatus}>
        <CloseContainer>
          <CloseIcon
            fontSize="large"
            onClick={() => {
              setSideNavStatus(false);
            }}
          />
        </CloseContainer>

        <li>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
          <a href="#">Solar Roof</a>
          <a href="#">Solar Panels</a>
          <a href="#">Existing Inventory</a>
          <a href="#">Used Inventory</a>
          <a href="#">Trade-in</a>
          <a href="#">PowerWall</a>
          <a href="#">Commercial Energy</a>
          <a href="#">Utilities</a>
          <a href="#">Test Drive</a>
          <a href="#">Charging</a>
          <a href="#">Find Us</a>
          <a href="#">Support</a>
          <a href="#">Carreers</a>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </li>
      </SideNav>
      <BackDrop
        status={sideNavStatus}
        onClick={() => {
          setSideNavStatus(false);
        }}
      ></BackDrop>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 6rem;
  z-index: 10;
`;

const Menugroup = styled.div`
  display: flex;
  text-transform: uppercase;
  div {
    font-weight: 600;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a:link,
  a:visited {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.4rem;
  }
  a:not(:last-child) {
    padding-right: 1rem;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 35rem;
  padding: 2rem;
  background-color: #fff;
  transition: all 0.5s cubic-bezier(0.5, 0, 0, 0.75);
  transform: ${(props) =>
    props.status ? "translateX(0)" : "translateX(100%)"};
  z-index: 22;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    padding: 2rem;
  }
  a {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${(props) => (props.status ? "100%" : "0%")};
  transition: backdrop-filter 0.5s ease, width 0.3s ease;
  backdrop-filter: ${(props) => (props.status ? "blur(4px)" : "blur(0)")};
`;
