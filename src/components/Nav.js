import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [show, setShow] = useState(false);

  // Mounting updating Unmounting

  const listner = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return () => {
        window.removeEventListener("scroll", listner);
      };
    });
  }, []);

  return (
    <NavWrapper $show={show}>
      <Logo>
        <img alt="Disney plus logo" src="/images/logo.svg" />
      </Logo>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.$show ? "#090b13" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

export default Nav;
