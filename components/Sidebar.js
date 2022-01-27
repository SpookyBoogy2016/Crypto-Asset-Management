import styled from "styled-components";
import React from "react";
import Image from "next/image";
import LogoImg from "../assets/logo.png";
import { navItems } from "../static/navItems";

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={LogoImg} />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((items) => (
          <>
            <NavItems>
              <NavIcon>{items.icon}</NavIcon>
              <div className=" text-2xl">{items.title}</div>
            </NavItems>
          </>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 59%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.a`
  margin-top: 3rem;
`;

const NavItems = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  height: 4rem;
  transition: 0.5s;
  :hover {
    color: white;
  }
`;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;