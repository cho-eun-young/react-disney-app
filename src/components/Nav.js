import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../pages/LoginPage";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigate();

  const { pathname } = useLocation();

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

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigation(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    // firebase에서 제공한 방법 사용
    // google login을 위해서
  };
  return (
    <NavWrapper $show={show}>
      <Logo>
        <img alt="Disney plus logo" src="/images/logo.svg" />
      </Logo>

      {/* URL --> useLocation
    다이나믹한 부분 ---> useParams 
  */}

      {pathname === "/" ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <Input
          value={searchValue}
          onChange={handleChange}
          className="nav__input"
          type="text"
          placeholder="영화를 검색해주세요."
        />
      )}
    </NavWrapper>
  );
};

const Login = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border: 1px solid lightgray;
`;

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
